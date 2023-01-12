import Container from "../../components/container";
import Layout from "../../components/layout";

export default function Careers() {
    return (
        <Layout pageTitle='採用情報'>
            <Container>
                <div className="text-center py-32 mx-auto">
                    K Squadでは多様な専門性・高い自律性をもったメンバーが顧客価値最大化に携わる専門家チームです。
                    <br />
                    ボードメンバーを中心とし、プロジェクトに応じてジョインするパートナーメンバーでK Squadは構成されています。
                    <br />
                    <br />
                    プロフェッショナルとしての覚悟を持ち、「誰かのためにスキルを活かしていきたい」という意識を持ったモチベーションの高いメンバーを募集しています。
                </div>
                <Requirements />
                <Contract />
                <Application />
            </Container>
        </Layout>
    )
}

function Requirements() {
    return (
        <div className="py-8 lg:mx-48">
            <h2 className="font-bold text-6xl">
                募集要項
            </h2>
            <hr />
            <div className="py-6">
                <h3 className="py-3 font-bold text-3xl">
                    パートナー
                </h3>
                <h4 className="py-2 font-bold text-xl">
                    主な業務
                </h4>
                <ul className="list-disc mx-16">
                    <li className="list-item">
                        クライアントとの折衝
                    </li>
                    <li className="list-item">
                        要件定義
                    </li>
                    <li className="list-item">
                        チームのアウトプットに対する品質保証
                    </li>
                </ul>
                <h4 className="py-2 font-bold text-xl">
                    歓迎スキル・経験等
                </h4>
                <ul className="list-disc mx-16">
                    <li className="list-item">
                        ソフトウェア開発の知識、経験
                    </li>
                    <li className="list-item">
                        OSSプロジェクトへのコミット経験あり
                    </li>
                    <li className="list-item">
                        自分でビジネスを持つという意識がある
                    </li>
                </ul>
            </div>
            <div className="py-6">
                <h3 className="py-3 font-bold text-3xl">
                    ソフトウェアエンジニア
                </h3>
                <h4 className="py-2 font-bold text-xl">
                    主な業務
                </h4>
                <ul className="list-disc mx-16">
                    <li className="list-item">
                        Webシステム・アプリ開発
                    </li>
                    <li className="list-item">
                        UX設計
                    </li>
                </ul>
                <h4 className="py-2 font-bold text-xl">
                    歓迎スキル・経験等
                </h4>
                <ul className="list-disc mx-16">
                    <li className="list-item">
                        ソフトウェア開発の知識、経験
                    </li>
                    <li className="list-item">
                        OSSコミットの経験あり
                    </li>
                    <li className="list-item">
                        自分でビジネスを持つという意識がある
                    </li>
                </ul>
            </div>
            <div className="py-6">
                <h3 className="py-3 font-bold text-3xl">
                    デザイナー
                </h3>
                <h4 className="py-2 font-bold text-xl">
                    主な業務
                </h4>
                <ul className="list-disc mx-16">
                    <li className="list-item">
                        画像、動画等の各種クリエイティブ制作
                    </li>
                    <li className="list-item">
                        ロゴ制作
                    </li>
                </ul>
                <h4 className="py-2 font-bold text-xl">
                    歓迎スキル・経験等
                </h4>
                <ul className="list-disc mx-16">
                    <li className="list-item">
                        Photoshop, Illustrator等のソフト使用
                    </li>
                    <li className="list-item">
                        ユーザー目線に立ったUI・UXの設計
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Contract() {
    return (
        <div className="py-8 lg:mx-48">
            <h2 className="font-bold text-6xl">
                形態
            </h2>
            <hr />
            <div className="py-6">
                <h3 className="py-3 font-bold text-3xl">
                    フリーランス
                </h3>
                <p className="py-2">
                    面談時に、簡単なスキルチェックを経て稼働時間や報酬等をご案内します。
                    <br />
                    報酬の支払い頻度や金額についてはパートナーの判断のもとでプロジェクトごとに都度決定します。
                </p>
            </div>
            <div className="py-6">
                <h3 className="py-3 font-bold text-3xl">
                    正社員
                </h3>
                <p className="py-2">
                    勤務条件等は面談時に話し合い
                </p>
            </div>
        </div>
    )
}

function Application() {
    return (
        <div className="py-8 lg:mx-48">
            <h2 className="font-bold text-6xl">
                応募方法
            </h2>
            <hr />
            <div className="py-6">
                ツイッターにて<a href="https://twitter.com/komi_edtr_1230" className="text-blue-400 inline-block">@komi_edtr_1230</a>宛にDMを送ってください。
                <br />
                応募時には自己紹介、志望動機、得意領域などを教えてください。
            </div>
            <div className="py-6">
                上記以外の職種も常時募集しています。ご連絡お待ちしております。
            </div>
        </div>
    )
}