import Container from "../../components/container";
import Layout from "../../components/layout";

export default function Contact() {
    return (
        <Layout pageTitle='お問い合わせ'>
            <Container>
                <div className="py-10">お仕事のお問い合わせや講演依頼については以下からお問い合わせください。</div>
                <div className="md:p-10">
                    <iframe
                        className="w-full min-h-screen"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSf_t29aMV3GleALm1rza3Se9Xpk0r0931-cf9_CoNFMOGzp1w/viewform?embedded=true"
                    >
                        読み込んでいます…
                    </iframe>
                </div>
            </Container>
        </Layout>
    )
}