---
layout: '@layouts/Post.astro'
title: '宣言的DBテーブル定義のススメ'
image: 'https://camo.githubusercontent.com/de83ba9b0d38a369a656064a9bd350839f063f46ecca2f69c3c42f4483f83228/68747470733a2f2f61746c6173676f2e696f2f75706c6f6164732f696d616765732f676f706865722e706e67'
date: '2023-03-31'
---

## Web開発プロジェクトでのDBマイグレーションの運用面の課題

代表の[komi](https://twitter.com/komi_edtr_1230)です。

Webアプリを開発するとき、一般的にWebフレームワークを使うことが多いと思います。
RubyならRuby on Rails, JavaならSpring Boot、PythonではFastAPIやDjangoなど。

ビジネスがいざ動き始めてプロジェクトが走り始めたとき、ビジネスサイドの状況次第でプロジェクトの要件は頻繁に変わります。
例えばユーザーに管理画面でもっと情報見せたいからフロントエンドに渡すJSONのフィールドを増やすなどが起こり得ます。

そうした要件の変更の中で、テーブルを新しく生やしたり既存テーブルに新しくカラムを追加するなどDBに変更を入れることも頻繁に起きます。

DBに変更を入れる際、`マイグレーション`を行う必要がありますね。

Django等でマイグレーションをする際、モデルのコードとDBの状態を見て差分を検知した上でマイグレーション用にSQLを生成します。
プロジェクトが長期化してマイグレーションを複数行っていくと、マイグレーションの際に生成したファイルがたくさん増えていきます。

![img](https://i.stack.imgur.com/tscCr.png)

K Squadでは様々なお客さまへ技術顧問を行っているのですが、先日Djangoプロジェクトにおいて複数のメンバーが同じテーブルに対して異なる変更をするケースが発生し、マイグレーションファイルがコンフリクトしてマイグレーションが失敗するという事件が発生していました。

なぜそんなことが起きていたかというと、マイグレーションファイルが増えるのを嫌がって過去のマイグレーションファイルをgitignoreしていたというのが原因でした。

こうした事件を避けるべく、過去のマイグレーションファイルをGitで管理し、同時にIssue分担を上手にやることによってカバーすることができます。

というように基本的にマイグレーションでの事故は運用で努力すれば問題ないのですが、ところで過去のマイグレーションファイルが増えることが嫌だと感じる人は一定数いるのではないでしょうか？

そこで今回このような手続的なマイグレーション手法ではなく宣言的なマイグレーション手法を提案しようと思います。

## 宣言的マイグレーション

手続的マイグレーションと宣言的マイグレーションは記述された通りにDBの定義を更新するという観点で、本質的には同じです。

しかし手続的なアプローチでは`現在のコードと現在のテーブルの状態に差分があるか`に着目するのに対し、宣言的なアプローチでは`現在のコードの通りになっているか`に着目するという観点で異なります。

具体例を出すと、

```sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

の通りにマイグレーションをしたあとスキーマの状態を

```sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT,
  prefecture TEXT NOT NULL,  -- <-- これが追加された
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

と変更し(`prefecture`カラムを加えた)、その後

```sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_addresses (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
  prefecture TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

としたとします(`prefecture`カラムを`users`テーブルに生やさず別のテーブルに切り出した)。

このとき最初と最後の状態を比較すると結果的に`user_addresses`テーブルが生えただけなのですが、手続的なアプローチだと

- `ALTER TABLE users ADD prefecture ....` として`prefecture`カラムを生やす
- `ALTER TABLE users DROP COLUMN prefecture ....`とテーブルから`prefecture`カラムを削除したあと`CREATE TABLE user_addresses ....`とテーブル作成DDL

というように無駄な過去のマイグレーションファイルが生成されます。

宣言的マイグレーションでは、現在のコードの状態と現在のDBの状態を比較して内部的に変更を検知した上でマイグレーションを行うので無駄なマイグレーションファイルが生成されることはありません。

## 宣言的マイグレーションを行うツール

有名どころだと[atlas](https://github.com/ariga/atlas)や[sqldef](https://github.com/k0kubun/sqldef)があります。

それぞれSQLファイルにてテーブル定義を記述することができますが、atlasはHCLでも記述することができ、同時にエラーメッセージがわかりやすいところがポイントです。

一方でsqldefはSQL Serverに対応しているところがポイントで([ZOZOのエンジニアの方が対応してくれた](https://techblog.zozo.com/entry/database-migration-with-sqldef)ようです)、開発者が[k0kubun](https://twitter.com/k0kubun)さんという日本人の方なので困ったらTwitterでふらっと相談できるというのが良さだと思います。

これらのツールを利用してマイグレーションおよびスキーマ管理を行います。

## モデルのコードへ出力

Webフレームワークを利用しているとモデル(DBに保存されているデータの部分)のコードを記述しなくてはいけません。

しかしスキーマをSQLで管理していて、ここでまたPython等でモデルのコードを書くのはDBの定義を2回しているようなもので無駄だし楽しい仕事ではありません。

つまりモデルのコードを自動生成したいですよね？

Djangoのプロジェクトの場合、`inspectdb`コマンドというのが用意されており、DBをスキャンしてモデルのコードを自動生成してくれます。

また、PythonでORMとしてSQLAlchemyを利用している場合は[sqlacodegen](https://github.com/agronholm/sqlacodegen)というCLIツールが提供されており、FastAPI等ではこちらを使うのが良いでしょう。

Goでは[Gen](https://github.com/go-gorm/gen)や[sqlc](https://sqlc.dev/)いったモデルジェネレータが存在します。

Rubyについては筆者は詳しくないので良いツールがあれば教えてください。

## まとめ

今回は宣言的マイグレーションを紹介させていただきました。

マイグレーション自体についてはatlasといった外部ツールを利用するのでアプリケーションコード生成などやることは多少増えます。

一方でテーブルの状態を宣言的に管理することによってDBの状態の変更履歴をGitの履歴と同一化することができ、DBの管理をアプリケーションコードと同様の形式にすることができます。
つまりロールバックするときは`git revert`すれば良いのです。

もし手続的マイグレーションにツラさを感じた場合は宣言的マイグレーションを試してみてください。
