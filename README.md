# K Squad Website

## 技術スタック
- フレームワーク & SSG: Astro
- CMS: microCMS
- CDN: Cloudflare

## 記事作成/更新 ワークフロー
1. [microCMS管理ページ](https://ksquad.microcms.io/apis/)へアクセス

2. 作成/更新したい記事の種類(news, blog)に応じて、`サイドバー > コンテンツ(API) > [ニュース | ブログ]`を選択
![procedure2](https://github.com/ksquadjp/website/assets/49549153/296e4422-9e62-4c92-87b1-76c920c5d849)

3. **[作成]** 右上の追加ボタン -> 遷移画面にて**タイトル, 内容, ヒーロー画像, 説明**を編集 -> 右上の公開ボタン
![procedure3-1](https://github.com/ksquadjp/website/assets/49549153/2d5bfe07-9c6e-49bb-95b8-90d2a9ac3726)

4. **[更新]** 該当コンテンツを選択 -> 遷移画面にて更新内容の編集

> [!NOTE]
> コンテンツの内容を編集すると、自動的にビルド&デプロイされ、websiteに反映される仕組みになっています。

## Build
```sh
pnpm run build
```

## Deploy
- GitHubにpushする
- microCMS上でコンテンツを編集する