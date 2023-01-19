import Footer from "./footer"
import Header from "./header"
import Meta from "./meta"

type Props = {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
