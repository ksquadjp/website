import Image from "next/image"
import Link from "next/link"
import Container from "../components/container"
import Layout from "../components/layout"
import PostType from "../interfaces/post"
import { getAllPosts } from "../lib/api"

type Props = {
  allNewsPosts: PostType[]
}

export const getStaticProps = async () => {
  const allNewsPosts = getAllPosts(["title", "date", "slug", "image"], 1)

  return {
    props: { allNewsPosts },
  }
}

export default function Index({ allNewsPosts }: Props) {
  return (
    <Layout pageTitle="トップ">
      <TopView />
      <Container>
        <News news={allNewsPosts} />
        <Service />
        <Customers />
      </Container>
    </Layout>
  )
}

function TopView() {
  return (
    <div className="relative h-screen w-screen">
      <Image src="/assets/top.jpg" alt="Top Image" fill />
      <div
        className="absolute mx-auto flex h-screen w-screen items-center justify-center px-2 text-4xl font-bold md:text-6xl"
        style={{
          fontFamily: "ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro, メイリオ, Meiryo, sans-serif",
        }}
      >
        技術を通して、価値を提供していく。
      </div>
    </div>
  )
}

type NewsProps = {
  news: PostType[]
}

function News({ news }: NewsProps) {
  const topFiveNews = news.slice(0, 3)
  return (
    <>
      <h2 className="py-10 text-4xl font-bold">ニュース</h2>
      <div className="grid h-auto grid-cols-1 content-center px-4 lg:grid-cols-3">
        {topFiveNews.map((e, i) => (
          <Link key={i} href={"/news/posts/" + e.slug}>
            <div
              key={i}
              className="lg:px-18 mx-6 my-3 grid grid-cols-1 content-center overflow-hidden rounded-lg bg-gray-100 py-3 shadow-lg lg:mx-12 lg:h-80"
            >
              <div className="relative mx-auto aspect-video h-24 px-2 xl:h-36">
                <Image className="rounded-lg" src={e.image} alt={e.title} fill />
              </div>
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{e.title}</div>
                <time className="text-base text-gray-700">{e.date}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mx-auto grid py-10 text-center font-bold">
        <Link href="/news">ニュース一覧</Link>
      </div>
    </>
  )
}

function Service() {
  return (
    <>
      <h2 className="py-10 text-4xl font-bold">サービス</h2>
      <div className="grid h-auto grid-cols-1 p-6 lg:grid-cols-3">
        <div className="lg:px-18 grid grid-rows-2 py-3 lg:mx-12 lg:grid-cols-1">
          <div className="relative">
            <Image src="/assets/electricity.svg" alt="a" fill />
          </div>
          <div>
            <h3 className="flex justify-center py-6 text-center text-xl font-bold lg:text-2xl">
              技術顧問
            </h3>
            <p>
              ベンダーにシステムを発注したいが予算が適正なのかわからない。内製化を進めていきたいがシニアエンジニアが不足している。
              <br />
              そういった様々なケースに対応すべく、御社に伴走して技術顧問として様々なことをサポートさせていただきます。
            </p>
          </div>
        </div>
        <div className="lg:px-18 grid grid-rows-2 py-3 lg:mx-12 lg:grid-cols-1">
          <div className="relative">
            <Image src="/assets/dev_productivity.svg" alt="a" fill />
          </div>
          <div>
            <h3 className="flex justify-center py-6 text-center text-xl font-bold lg:text-2xl">
              システム・アプリ開発
            </h3>
            <p>
              Webサイトから顧客管理システム、モバイルアプリ、LINE
              Botなどあらゆる技術領域をカバーしています。
              <br />
              弊社のノウハウを活かし、少数精鋭チームで高速に開発させていただきます。
            </p>
          </div>
        </div>
        <div className="lg:px-18 grid grid-rows-2 py-3 lg:mx-12 lg:grid-cols-1">
          <div className="relative">
            <Image src="/assets/predictive_analytics.svg" alt="a" fill />
          </div>
          <div>
            <h3 className="flex justify-center py-6 text-center text-xl font-bold lg:text-2xl">
              データ分析基盤構築
            </h3>
            <p>
              アプリやシステムは作るだけでは終わらず、データを有効活用することによってその価値は何倍にも膨らみます。
              <br />
              データ基盤を整備し、客観的な指標に基づいた意思決定がスムーズに行える体制を構築させていただきます。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function Customers() {
  return (
    <>
      <h2 className="py-10 text-4xl font-bold">支援実績</h2>
      <div className="grid h-auto grid-cols-1 p-6 lg:grid-cols-3">
        <div className="relative aspect-video ">
          <Image
            className="object-contain"
            src="https://prtimes.jp/i/10009/34/origin/d10009-34-8c1d501dddb713463c94-0.png"
            alt="a"
            fill
          />
        </div>
        <div className="relative aspect-video">
          <Image
            className="object-contain px-24"
            src="https://cdn-ak.f.st-hatena.com/images/fotolife/s/storesblog/20200128/20200128154616.jpg"
            alt="a"
            fill
          />
        </div>
        <div className="relative aspect-video">
          <Image
            className="object-contain px-24"
            src="https://www.tostv.jp/asset/img/logo-tos.png"
            alt="a"
            fill
          />
        </div>
      </div>
    </>
  )
}
