import Image from "next/image";
import Link from "next/link";
import Container from "../../components/container";
import Layout from "../../components/layout";

export default function Company() {
    return (
        <Layout pageTitle='会社案内'>
            <Container>
                <About />
                <Members />
            </Container>
        </Layout>
    )
}


function About() {
    return (
        <div className="py-8 lg:mx-48">
            <h2 className="font-bold text-6xl">
                私たちについて
            </h2>
            <hr />
            <div className="py-6">
                <p className="py-2 text-xl">
                    K Squadは、ソフトウェア技術に強みを持つメンバーが集結した、お客さまのデジタルに関する困りごとを解決するギルド型のエンジニアリングファームです。
                </p>
                <p className="py-2 text-xl">
                    ソフトウェアエンジニア、デザイナー、ビジネスストラテジストといった多様な専門性を持ったメンバーが所属しており、
                    システムやアプリの開発をはじめとして、技術コンサルティング、ITチーム内製化支援、戦略設計など多岐にわたる業務を提供しています。
                </p>
            </div>
        </div>
    )
}

function Members() {
    return (
        <div className="py-8 lg:mx-48">
            <h2 className="font-bold text-6xl">
                メンバー
            </h2>
            <hr />
            <div className='p-6 grid grid-cols-1 sm:grid-cols-2 h-auto'>
                <div className='lg:px-18 py-4 lg:py-0'>
                    <div className='relative h-40 aspect-square mx-auto'>
                        <Image
                            className="object-cover rounded-lg"
                            src="/assets/komi.jpg"
                            alt='Yusuke Kominami'
                            fill
                        />
                    </div>
                    <div className="md:h-48 p-2">
                        <h3 className='lg:py-3 flex text-center justify-center font-bold text-xl lg:text-2xl'>
                            小南 佑介
                            <br />
                            Yusuke Kominami
                        </h3>
                        <div className="py-2">
                            <h4 className="text-center text-stone-700">代表社員</h4>
                            <div className="text-center text-blue-400"><Link href="https://komi.dev">komi.dev</Link></div>
                        </div>
                    </div>

                    <p className="md:h-64 p-4">
                        2020年京都大学理学部卒業。同年ソフトバンク株式会社に入社し、フルスタックエンジニアとして開発に参画。
                        2021年にヘイ株式会社（後にSTORES株式会社に商号変更）に入社し、1人目のデータエンジニアとしてデータ基盤を構築。
                    </p>
                </div>
                <div className='lg:px-18 py-4 lg:py-0'>
                    <div className='relative h-40 aspect-square mx-auto'>
                        <Image
                            className="object-cover rounded-lg"
                            src="https://cdn2.aprico-media.com/production/imgs/images/000/008/511/original.jpg?1505866639"
                            alt='Yusuke Kominami'
                            fill
                        />
                    </div>
                    <div className="md:h-48 p-2">
                        <h3 className='lg:py-3 flex text-center justify-center font-bold text-xl lg:text-2xl'>
                            葛西 太一
                            <br />
                            Taichi Kasai
                        </h3>
                        <div className="py-2">
                            <h4 className="text-center text-stone-700">パートナー</h4>
                        </div>
                    </div>
                    <p className="md:h-64 p-4">
                        2021年京都大学理学部卒業。学生時代よりLINE社やマネーフォワード社にて開発業務に従事。
                        同年リクルート株式会社に入社し、機械学習を用いたレコメンデーションシステムの開発をリード。
                        2017年度の京都大学理学部首席入学。
                    </p>
                </div>
            </div>
        </div>
    )
}
