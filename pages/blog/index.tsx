import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/header'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Post from '../../interfaces/post'

type Props = {
    allPosts: Post[]
}

export default function Blog({ allPosts }: Props) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <Layout pageTitle='ブログ'>
                <Container>
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}
