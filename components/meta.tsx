import Head from "next/head"

type Props = {
  pageTitle: string
}

export default function Meta({ pageTitle }: Props) {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`ケイスクワッド合同会社はソフトウェア技術を通してお客様へ最大価値を提供します。アプリ開発からWebシステム構築、データ基盤整備を一気通貫で対応します。`}
      />
      <meta property="og:image" content="/assets/top.jpg" />
      <title>{`K Squad | ${pageTitle}`}</title>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XCCQNP1TC3"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XCCQNP1TC3');
          `,
        }}
      />
    </Head>
  )
}
