---
title: '公式ページをNext.jsで構築した'
heroImage: 'https://miro.medium.com/max/1400/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg'
pubDate: '2023-01-12'
description: 'K Squadの公式サイトをNext.jsを用いて構築しました'
---

## Markdownで更新可能な公式サイトをNext.jsで構築した

代表の[komi](https://twitter.com/komi_edtr_1230)です。
今回LPを一新するということで`Next.js+Tailwind`を使って最初から作ってみました。

LPに求められることとして、定期的にニュースを更新したりするので運用が楽なようにMarkdownで記事を書けるようにしたいというのがあります。
そこで今回React向けに提供されている`remark`を利用してみました。

## 実装メモ

### MarkdownデータをHTMLへ

`remark`ではMarkdownの文法で書かれた内容を構文解析して別のマークアップ言語に変換をしてくれます。

今回のケースではMarkdownで書かれたものHTMLに変換したいので、`remark`と合わせて`remark-html`を使用することで実現できます。

具体的な処理としては`await remark().use(html).process(myMarkdownContent)`というようにすればOKです。

### ファイル名からURLのパスへ

Next.jsではDynamic Routingがサポートされており、例えば`page/posts/[post-id].tsx`というパスでファイルを置いておくとルーティングとして`/posts/{post-id}`へ解決してくれます。

この機構を利用することにより、`useRouter`を上手に使うことによって所定のパスに置いたファイル名をそのままサイトとして表示することが可能です。

## 今後やること

現在これにてK SquadのLPは無事に構築されました。

しかしまだ完璧ではなく、例えばOGPの対応やMarkdownのコードブロックへの対応が完了していません。

これについては今後の課題としておきます。

このサイトのソースコードについては公開されているので、参考に見てみてください。
