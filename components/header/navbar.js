import { memo } from 'react'
import Link from 'components/link'
import cn from 'classnames'
import { EMAIL, PHONE, NAME, REZTRIP_URL } from 'lib/constants'
import styles from './navbar.module.css'

import Logo from 'components/icons/logo'
import Container from 'components/container'
import Button from 'components/button'

function Navbar() {
  return (
    <Container>
      <nav className={cn(styles.nav, 'f-reset')}>
        <div className={styles['mobile-top']}>
          <Link href="/" className="fs">
            {NAME[0].toUpperCase()}
          </Link>
          <Link href="/" className="ft">
            {NAME[1].toLowerCase()}
          </Link>
          <Link href="/" className={styles['mobile-logo']} title="Go to the homepage">
            <Logo />
          </Link>

          <div className={styles.book}>
            <Button href={REZTRIP_URL}>Book</Button>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.hotel}>
            <Link href="/" className="fs">
              {NAME[0].toUpperCase()}
            </Link>
            <Link href="/" className="ft">
              {NAME[1].toLowerCase()}
            </Link>
          </div>

          <Link href="/" className={styles.logo} title="Go to the homepage">
            <Logo />
          </Link>
          <Link href="/rooms" className="fs" title="Rooms">
            Rooms
          </Link>
          <Link href="/about" className="fs" title="About">
            About
          </Link>
          <Link href="/photos" className="fs" title="Photos">
            Photos
          </Link>
          <Link href="/specials" className="fs" title="Specials">
            Specials
          </Link>
          <Link
            external
            className="fs"
            href="https://ariesliving.com/terms-and-conditions/treehouse"
            target="_blank"
            rel="noopener noreferrer"
            title="Terms"
          >
            Terms
          </Link>
          <div className={styles.book}>
            <Button href={REZTRIP_URL}>Book</Button>
          </div>
          <div className={styles.icon}>
            <p>{PHONE}</p>
            <Link external href={`mailto:${EMAIL}?subject=Hello`}>
              {EMAIL}
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default memo(Navbar)
