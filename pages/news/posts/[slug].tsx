import { useRouter } from "next/router"
import ErrorPage from "next/error"
import PostBody from "../../../components/post-body"
import Layout from "../../../components/layout"
import { getPostBySlug, getAllPosts } from "../../../lib/api"
import Head from "next/head"
import markdownToHtml from "../../../lib/markdownToHtml"
import PostType from "../../../interfaces/post"
import Container from "../../../components/container"
import PostHeader from "../../../components/post-header"

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout pageTitle={post.title}>
      <Container>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.image} />
              </Head>
              <PostHeader title={post.title} image={post.image} date={post.date} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content", "image"], 1)
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"], 1)

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
