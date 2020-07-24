import Head from '../head'
import Header from '../header'
import Footer from '../footer'
import styles from './page.module.css'
import { NAME_SHORT } from 'lib/constants'

export default function Page({ title = NAME_SHORT, description, image, children }) {
  return (
    <div className={styles.wrapper}>
      <Head title={title} description={description} image={image} />
      <Header />
      <main className={styles.main}>
        {children}
        <Footer />
      </main>
    </div>
  )
}
