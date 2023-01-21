# K Squad Official Page

K SquadのLPのプロジェクトです。Astroで書かれています。

## ブログ、ニュースの更新

以下のディレクトリにMarkdownの記事を置いてください。

- ブログ = src/blog/
- ニュース = src/news/

ニュースについては日時が最新のもの3つがLPのトップページに表示されます。

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
