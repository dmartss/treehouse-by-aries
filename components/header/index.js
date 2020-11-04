import { memo } from 'react'
import cn from 'classnames'
import Banner from './banner'
import Nav from './navbar'
import styles from './header.module.css'

const Header = () => (
  <>
    <Banner />

    <header className={cn(styles.header, styles.sticky)}>
      <Nav />
    </header>
  </>
)

export default memo(Header)
