
import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  pageTitle: string,
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
