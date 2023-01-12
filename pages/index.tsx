import Image from 'next/image'
import { BrowserView, MobileView } from 'react-device-detect'
import Container from '../components/container'
import Layout from '../components/layout'
import PostType from '../interfaces/post'


export default function Index() {
  return (
    <Layout pageTitle='トップ'>
      <TopView />
      <Container>
        <Service />
      </Container>
    </Layout >
  )
}

function TopView() {
  return (
    <div className='relative w-screen h-screen'>
      <Image
        src="/assets/top.jpg"
        alt="Top Image"
        fill
      />
      <div
        className='absolute mx-auto w-screen flex justify-center items-center h-screen text-4xl md:text-6xl font-bold px-2'
        style={{ fontFamily: "ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro, メイリオ, Meiryo, sans-serif" }}
      >
        技術を通して、価値を高めていく。
      </div>
    </div>
  )
}

type NewsProps = {
  news: PostType[],
}

function News({ news }: NewsProps) {
  const topFiveNews = news.slice(0, 5);
  return (
    <>
      <h2 className='text-4xl font-bold py-10'>
        ニュース
      </h2>
      <div className='grid p-6 grid-cols-1 lg:grid-cols-3 h-auto'>
        aa
      </div>
    </>
  )
}

function Service() {
  return (
    <>
      <h2 className='text-4xl font-bold py-10'>
        サービス
      </h2>
      <div className='grid p-6 grid-cols-1 lg:grid-cols-3 h-auto'>
        <div className='lg:px-18 lg:mx-12 grid grid-rows-2 lg:grid-cols-1 py-3'>
          <div className='relative'>
            <Image
              src="/assets/electricity.svg"
              alt='a'
              fill
            />
          </div>
          <div>
            <h3 className='flex text-center justify-center font-bold text-xl lg:text-2xl py-6'>
              技術顧問
            </h3>
            <p>
              ベンダーにシステムを発注したいが予算が適正なのかわからない。内製化を進めていきたいがシニアエンジニアが不足している。
              <br />
              そういった様々なケースに対応すべく、御社に伴走して技術顧問として様々なことをサポートさせていただきます。
            </p>
          </div>
        </div>
        <div className='lg:px-18 lg:mx-12 grid grid-rows-2 lg:grid-cols-1 py-3'>
          <div className='relative'>
            <Image
              src="/assets/dev_productivity.svg"
              alt='a'
              fill
            />
          </div>
          <div>
            <h3 className='flex text-center justify-center font-bold text-xl lg:text-2xl py-6'>
              システム・アプリ開発
            </h3>
            <p>
              Webサイトから顧客管理システム、モバイルアプリ、LINE Botなどあらゆる技術領域をカバーしています。
              <br />
              弊社のノウハウを活かし、少数精鋭チームで高速に開発させていただきます。
            </p>
          </div>
        </div>
        <div className='lg:px-18 lg:mx-12 grid grid-rows-2 lg:grid-cols-1 py-3'>
          <div className='relative'>
            <Image
              src="/assets/predictive_analytics.svg"
              alt='a'
              fill
            />
          </div>
          <div>
            <h3 className='flex text-center justify-center font-bold text-xl lg:text-2xl py-6'>
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
