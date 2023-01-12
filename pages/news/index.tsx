import Image from "next/image";
import Link from "next/link";
import Container from "../../components/container";
import HeroPost from "../../components/hero-post";
import Layout from "../../components/layout";
import PostType from "../../interfaces/post";
import { getAllPosts } from '../../lib/api'

type Props = {
    allPosts: PostType[]
}


export default function News({ allPosts }: Props) {
    return (
        <Layout pageTitle='ニュース'>
            <Container>
                {allPosts.map((e, i) =>
                    <div key={i} className="grid grid-cols-1 lg:grid-cols-3 py-6 lg:px-48">
                        <div className="relative aspect-video order-first lg:order-last lg:col-start-3">
                            <Link href={"/news/posts/" + e.slug}>
                                <Image
                                    className="rounded-lg"
                                    src={e.image}
                                    alt={e.title}
                                    fill
                                />
                            </Link>
                        </div>
                        <div className="lg:col-span-2 px-6 lg:px-12 py-6 content-center">
                            <time>{e.date}</time>
                            <Link href={"/news/posts/" + e.slug}>
                                <h2 className="font-bold">
                                    {e.title}
                                </h2>
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </Layout>
    )
}


export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'image',
    ], 1)

    return {
        props: { allPosts },
    }
}
