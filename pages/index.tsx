import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/container'
import Layout from '../components/layout'
import PostType from '../interfaces/post'
import { getAllPosts } from '../lib/api'


type Props = {
    allNewsPosts: PostType[]
}

export const getStaticProps = async () => {
    const allNewsPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'image',
    ], 1,)

    return {
        props: { allNewsPosts },
    }
}


export default function Index({ allNewsPosts }: Props) {
    return (
        <Layout pageTitle='トップ'>
            <TopView />
            <Container>
                <News news={allNewsPosts} />
                <Service />
                <Customers />
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
                技術を通して、価値を提供していく。
            </div>
        </div>
    )
}

type NewsProps = {
    news: PostType[],
}

function News({ news }: NewsProps) {
    const topFiveNews = news.slice(0, 3);
    return (
        <>
            <h2 className='text-4xl font-bold py-10'>
                ニュース
            </h2>
            <div className='grid content-center px-4 grid-cols-1 lg:grid-cols-3 h-auto'>
                {topFiveNews.map((e, i) =>
                    <Link href={"/news/posts/" + e.slug}>
                        <div key={i} className="lg:px-18 mx-6 lg:mx-12 py-3 my-3 grid grid-cols-1 content-center rounded-lg bg-gray-100 overflow-hidden shadow-lg lg:h-80">
                            <div className='relative aspect-video h-24 xl:h-36 mx-auto px-2'>
                                <Image className="rounded-lg" src={e.image} alt={e.title} fill />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{e.title}</div>
                                <time className="text-gray-700 text-base">
                                    {e.date}
                                </time>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            <div className='grid mx-auto text-center py-10 font-bold'>
                <Link href="/news">
                    ニュース一覧
                </Link>
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

function Customers() {
    return (
        <>
            <h2 className='text-4xl font-bold py-10'>
                支援実績
            </h2>
            <div className='grid p-6 grid-cols-1 lg:grid-cols-3 h-auto'>
                <div className='relative aspect-video '>
                    <Image
                        className='object-contain'
                        src="https://prtimes.jp/i/10009/34/origin/d10009-34-8c1d501dddb713463c94-0.png"
                        alt='a'
                        fill
                    />
                </div>
                <div className='relative aspect-video'>
                    <Image
                        className='object-contain px-24'
                        src="https://cdn-ak.f.st-hatena.com/images/fotolife/s/storesblog/20200128/20200128154616.jpg"
                        alt='a'
                        fill
                    />
                </div>
                <div className='relative aspect-video'>
                    <Image
                        className='object-contain px-24'
                        src="https://www.tostv.jp/asset/img/logo-tos.png"
                        alt='a'
                        fill
                    />
                </div>
            </div>
        </>
    )
}