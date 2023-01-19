import Container from "../../components/container"
import Layout from "../../components/layout"
import { getAllPosts } from "../../lib/api"
import PostType from "../../interfaces/post"
import Image from "next/image"
import Link from "next/link"

type Props = {
  allPosts: PostType[]
}

export default function Blog({ allPosts }: Props) {
  return (
    <>
      <Layout pageTitle="ブログ">
        <Container>
          {allPosts.map((e, i) => (
            <div key={i} className="grid grid-cols-1 py-6 lg:grid-cols-3 lg:px-48">
              <div className="relative order-first aspect-video lg:order-last lg:col-start-3">
                <Link href={"/blog/posts/" + e.slug}>
                  <Image className="rounded-lg" src={e.image} alt={e.title} fill />
                </Link>
              </div>
              <div className="content-center px-6 py-6 lg:col-span-2 lg:px-12">
                <time>{e.date}</time>
                <Link href={"/blog/posts/" + e.slug}>
                  <h2 className="font-bold">{e.title}</h2>
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "image"])

  return {
    props: { allPosts },
  }
}
