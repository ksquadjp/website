# K Squad Official Page

K SquadのLPのプロジェクトです。Astroで書かれています。

## ブログ、ニュースの更新

以下のディレクトリにMarkdownの記事を置いてください。

- ブログ = `src/pages/blog/`
- ニュース = `src/pages/news/`

ニュース、ブログについては日時が最新のもの3つがLPのトップページに表示されます。

### 個人のブログ記事をLPに掲載したい場合
ケイスクワッド公式のブログ以外に個人のブログをLPに掲載することができます。
方法としては、以下のように`src/feedsCollector/members.ts`に自分のブログのRSSフィードのURLを記載することで自動的にLPに組み込まれます。
この部分の仕組みは[`team-blog-hub`](docs/add_rss_feed_collector_to_readme)を参考に実装しています。

```typescript
export const members: Member[] = [
  {
    id: "Ryuichi Umehara",
    name: "梅原 隆一",
    role: "業務委託メンバー",
    bio: "京都大学情報学研究科M1",
    avatarSrc: "https://pbs.twimg.com/profile_images/1307941138297311232/McTtMOUI_200x200.jpg", // アバター画像。現在使用されていない。
    sources: ["https://qiita.com/ryuichiastrona/feed"], //RSSフィードのURL
    twitterUsername: "@astrona0626",
    githubUsername: "umepon0626",
    websiteUrl: "https://qiita.com/ryuichiastrona",
    includeUrlRegex: "^.+/e213c6a11f5b43821aab$", // フィルタリングしたいregex.
    excludeUrlRegex:  "^.+/hogehoge$", // includeUrlRegexでフィルタリングした結果の中から除外したいregex
  },
];
```
## 更新作業

本プロジェクトでは、[asdf](https://asdf-vm.com/)を用いて[Node.js](https://nodejs.org)の管理を、[corepack](https://github.com/nodejs/corepack)を用いてパッケージマネージャの管理を、[pnpm](https://pnpm.io/)を用いてパッケージの管理を行っています。

asdfの導入方法は[ここ](https://asdf-vm.com/guide/getting-started.html)を参照してください。
pnpmの導入は以下のコマンドで行うことが出来ます。

```bash
asdf install nodejs
corepack enable pnpm
asdf reshim nodejs
```

mainブランチにpushすればCIで自動でデプロイされます。
