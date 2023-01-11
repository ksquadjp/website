import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <Layout pageTitle='トップ'>
      <Container>
        <div>Top Page</div>
      </Container>
    </Layout>
  )
}
