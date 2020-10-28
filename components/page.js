import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Page({ title, sticky, children }) {
  return (
    <div>
      <Head title={title} />
      <Header sticky={sticky} />
      {children}
      <Footer />
    </div>
  )
}
