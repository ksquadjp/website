---
title: '公式ページを更にAstroで書き直しました'
heroImage: 'https://codesandbox.io/api/v1/sandboxes/cu81s/screenshot.png'
pubDate: '2023-01-21'
---

## AstroでLPを書き直した

代表の[komi](https://twitter.com/komi_edtr_1230)です。

つい先週くらいにLPをNext.jsで作り直したというエントリーを書いたのですが、それをメンバーに見せたところ **なんでNext.js使ったの？時代はAstroだよ？** というツッコミをもらいました。

そこからAstroについて調べてみたところ **なんだ、Next.jsじゃなくてAstroでいいじゃん** となったので6時間程度の突貫工事でゼロから書き直しました。

## Astroとは何か

もうすでに一部の技術情報にアンテナを張っている人はご存知ですが、Astroは以下のような思想で設計されたフロントエンドフレームワークです。

- 静的サイトに特化
- なるべくJavaScriptを排除してピュアなHTMLを配信
- とにかく高速化

感覚としてGatsbyに近いプロダクトとなります。

こうした特徴はReactやSvelteといったフレームワークに依存しない独立したプロダクトとなっているため、結果としてAstroランタイムとしてオーバーヘッドが小さくなっているといえます。

## Next.jsからAstroへ

AstroでWebサイトを作るとき、`.astro`という拡張子を持つファイルによって構成していきます。

この`.astro`ファイルとはどのようなものかというと、以下のような具合になっています([出典](https://zenn.dev/kagan/articles/ad0e327db0265a))。

```astro
---
// フロントマッター内にJS/TSが書ける！（ビルド時に実行される）
const list = ['aaa', 'bbb', 'ccc'];
---

<!-- Reactのように（ほぼ）JSXで書ける！ -->
<ul>
  {list.map((item) => <li>{item}</li>)}
</ul>

<style lang="scss">
  // VueのようなScoped CSSが書ける！
  li {
    // Sassなどのメタ言語も使える！
    &:first-child {
      color: red;
    }
  }
</style>

<script>
  // ブラウザで実行されるJS/TSも書ける！
  console.log('in browser');
</script>
```

このファイル内の`---`によって括られたコードフェンスにはJavaScriptを書いていくのですが、ビルド時にはこの部分が排除されてピュアなHTMLが吐き出されます。

## 部品としてのAstroコンポーネント

この`.astro`ファイルはJSXのような扱い方もでき、例えば弊社の[採用ページ](/careers)での募集ポジションについてのコンポーネントは以下のようになっています。

```astro
---
export interface Props {
    postion: string;
 tasks: string[];
    skills: string[];
}

const { 
    position,
    tasks,
    skills,
} = Astro.props;
---
<div class="py-6">
    <h3 class="py-3 text-3xl font-bold">{position}</h3>
    <h4 class="py-2 text-xl font-bold">主な業務</h4>
    <ul class="mx-16 list-disc">
        {tasks.map((task, i) => 
            <li key={i} class="list-item">{task}</li>
        )}
    </ul>
    <h4 class="py-2 text-xl font-bold">歓迎スキル・経験等</h4>
    <ul class="mx-16 list-disc">
        {skills.map((skill, i) => 
            <li key={i} class="list-item">{skill}</li>
        )}
    </ul>
</div>
```

`Astro.props`によってこのコンポーネントの引数を定義しているのがわかると思います。

さて、このコンポーネントを使うときは以下のようになります。

```astro
---
import Postion from './Position.astro'
---

<div class="py-8 lg:mx-48">
    <h2 class="text-6xl font-bold">募集要項</h2>
    <hr />
    <Postion
        position="パートナー"
        tasks={["クライアントとの折衝", "要件定義", "チームのアウトプットに対する品質保証"]}
        skills={["ソフトウェア開発の知識、経験", "自分でビジネスを持つという意識"]}
    />
    <Postion
        position="ソフトウェアエンジニア"
        tasks={["Webシステム・アプリ開発", "UX設計"]}
        skills={["ソフトウェア開発の知識、経験", "OSSプロジェクトへのコミット経験", "技術イベントでの登壇経験"]}
    />
    <Postion
        position="デザイナー"
        tasks={["画像、動画等の各種クリエイティブ制作", "ロゴ制作"]}
        skills={["Photoshop, Illustrator等のソフト使用", "ユーザー目線に立ったUI・UXの設計"]}
    />
</div>
```

まるでNext.jsのような感覚ですね。

そのためJSXに慣れ親しんでいる開発者にはAstroは非常に親和性の高いプロダクトとなっていることがわかります。

## JSXファイルも使える

このAstroのコンポーネントは`.astro`ファイル以外にも`.tsx`ファイルも使用可能です。

例えば弊社のページでは、レスポンシブ対応として画面幅が小さくなるとヘッダーのリンクのボタン部分がメニューボタンへ切り替わります。

メニューボタンはタップされたときだけ開いていて欲しいわけですが、ここの開いてるかどうかの状態管理として`useState`を使いたいところです。

そういう場合、このように`.tsx`ファイルをimportすれば他の`.astro`ファイルと同様にコンポーネントとして扱うことができます。

```astro
---
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

import Head from '../components/base/Head.astro';
// ここ注目
import Header from '../components/base/Header.tsx';
import Footer from '../components/base/Footer.astro';
import Container from '../components/base/Container.astro'

import About from '../components/company/About.astro'
import Members from '../components/company/Members.astro'
---

<!DOCTYPE html>
<html lang="ja">
 <head>
  <Head title={SITE_TITLE} description={SITE_DESCRIPTION} />
 </head>
 <body>
  <Header client:load title={SITE_TITLE} />
  <main class="h-full block">
   <Container>
    <div class="py-10">お仕事のお問い合わせや講演依頼については以下からお問い合わせください。</div>
                <iframe
                    class="h-screen w-full"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf_t29aMV3GleALm1rza3Se9Xpk0r0931-cf9_CoNFMOGzp1w/viewform?embedded=true"
                >
                    読み込んでいます…
                </iframe>
   </Container>
  </main>
  <Footer />
 </body>
</html>
```

## MarkdownをHTMLへ

そしてこのブログ記事ですが、ファイル配置の位置として`./pages/blog/`ディレクトリに`2023-01-21-rewrite-with-astro.md`という名前で置いています。

Astroはビルド時にMarkdownをHTMLへと変換してくれるので、Markdownも特に事前セットアップをすること無く使うことができます。便利ですね。

Markdownファイルによって記述されたページのスタイルについては、`.md`ファイルのコードフェンス(`---`で括られた箇所)内に`layout:`で`.astro`ファイルのパスを指定すればその通りにページがビルドされます。

具体的に、この記事の冒頭部分はファイルとしてこのようになっています。

```markdown
---
layout: '@layouts/Post.astro'
title: '公式ページを更にAstroで書き直しました'
image: 'https://codesandbox.io/api/v1/sandboxes/cu81s/screenshot.png'
date: '2023-01-21'
---

## AstroでLPを書き直した

代表の[komi](https://twitter.com/komi_edtr_1230)です。
```

AstroとしてMarkdownファイルを扱うとき`layout`キーが予約されており、ここに以下のような`.astro`ファイルを指定することで良い具合にページのスタイルを作れます。

```astro
---
import Head from '../components/base/Head.astro';
import Header from '../components/base/Header.tsx';
import Footer from '../components/base/Footer.astro';
import Container from '../components/base/Container.astro'

export interface Props {
 content: {
  title: string;
  description: string;
  date: string;
  image: string;
 };
}

const {
 content: { title, description, date, image },
} = Astro.props;
---

<html lang="ja">
 <head>
  <Head title={title} description={description} />
  <style global>
   .markdown {
    @apply text-lg leading-relaxed lg:px-36 xl:px-48 py-10;
   }
   .markdown p {
    @apply py-2
   }
   .markdown ul {
    @apply px-16 list-disc;
   }
   .markdown ul li {
    @apply list-item;
   }
   .markdown ol {}
   .markdown blockquote {
    @apply my-6;
   }
   .markdown h2 {
    @apply mt-12 mb-4 text-3xl font-bold leading-snug;
   }
   .markdown h3 {
    @apply mt-8 mb-4 text-2xl font-bold leading-snug;
   }
   .markdown a {
    @apply text-blue-600;
   }
   .markdown p code {
    @apply bg-neutral-200 px-1 text-orange-800;
   }
   .markdown pre {
    @apply p-4;
   }
  </style>
 </head>

 <body>
  <Header />
  <main>
   <article>
    <Container>
     <h1 class="py-8 text-4xl font-bold">{title}</h1>
     <div class="py-2">
      <time class="">{date}</time>
     </div>
     <div class="relative">
      <img
       src={image}
       alt=""
       fit="fill"
       class="w-screen"
       loading="lazy"
       decoding="async"
      />
     </div>
     <hr />
     <div class="markdown">
      <slot />
     </div>
    <Container/>
   </article>
  </main>
  <Footer />
 </body>
</html>
```

この中の`Astro.props`にてMarkdownファイルの他のキー(タイトルや日付など)を渡すことができます。

記事本体について、`Layout.astro`ファイル内の`<slot />`にMarkdownのコンテンツが注入される形となっています。

## 終わりに

Astroというプロダクトをメンバーから教えてもらって今回初めて使ってみたのですが、思ってた以上に開発体験が良く、同時に当サイト自体も非常に軽量化することができました。

弊社では主にシステム開発を手掛けることが多いので静的Webサイトを開発することはあまり多くないのですが、今回の技術採用実績を通して次の新規プロジェクトではAstroを本番投入してみようと思います。
