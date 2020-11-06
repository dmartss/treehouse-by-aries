import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import { defaultOgImage } from 'lib/constants'
import config from 'seo.json'
import Header from './header'
import Footer from './footer'

export default function Page({ title, children }) {
  return (
    <div>
      <DefaultSeo {...config} title={title} openGraph={{ images: [{ url: defaultOgImage }] }} />
      <NextHead>
        <link
          rel="preload"
          href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="Treehouse" />
        <meta name="author" content="Aries Living" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </NextHead>

      <Header />
      {children}
      <Footer />
    </div>
  )
}
