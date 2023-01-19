import Footer from "./footer"
import Header from "./header"
import Meta from "./meta"

type Props = {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Meta pageTitle={pageTitle} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
