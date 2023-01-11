import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`K Squad`}</title>
        </Head>
        <Container>
          <Intro />
          <div>hello</div>
        </Container>
      </Layout>
    </>
  )
}
