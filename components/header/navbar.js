import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { EMAIL, PHONE, NAME, REZTRIP_URL } from 'lib/constants'
import styles from './navbar.module.css'

import Logo from 'components/icons/logo'
import Container from 'components/container'
import Button from 'components/button'

function Navbar() {
  const { route } = useRouter()

  return (
    <Container>
      <nav className={cn(styles['nav'], 'f-reset')}>
        <div className={styles['mobile-top']}>
          <Link href="/">
            <a className="fs">{NAME[0].toUpperCase()}</a>
          </Link>
          <Link href="/">
            <a style={{ color: 'var(--accents-4)' }}>{NAME[1].toLowerCase()}</a>
          </Link>
          <Link href="/">
            <a className={styles['mobile-logo']} title="Go to the homepage">
              <Logo />
            </a>
          </Link>

          <div className={styles['book']}>
            <Button href={REZTRIP_URL}>Book</Button>
          </div>
        </div>

        <div className={styles['links']}>
          <div className={styles['hotel']}>
            <Link href="/">
              <a className="fs">{NAME[0].toUpperCase()}</a>
            </Link>
            <Link href="/">
              <a style={{ color: 'var(--accents-4)' }}>{NAME[1].toLowerCase()}</a>
            </Link>
          </div>

          <Link href="/">
            <a className={styles['logo']} title="Go to the homepage">
              <Logo />
            </a>
          </Link>
          <Link href="/rooms">
            <a
              className={cn('fs', { [styles.selected]: route.startsWith('/rooms') })}
              title="Rooms"
            >
              Rooms
            </a>
          </Link>
          <Link href="/about">
            <a
              className={cn('fs', { [styles.selected]: route.startsWith('/about') })}
              title="About"
            >
              About
            </a>
          </Link>
          <Link href="/photos">
            <a
              className={cn('fs', { [styles.selected]: route.startsWith('/photos') })}
              title="Photos"
            >
              Photos
            </a>
          </Link>
          <Link href="/specials">
            <a
              className={cn('fs', { [styles.selected]: route.startsWith('/specials') })}
              title="Specials"
            >
              Specials
            </a>
          </Link>
          <a
            className="fs"
            href="https://ariesliving.com/terms-and-conditions/treehouse"
            target="_blank"
            rel="noopener noreferrer"
            title="Terms"
          >
            Terms
          </a>
          <div className={styles['book']}>
            <Button href={REZTRIP_URL}>Book</Button>
          </div>
          <div className={styles['icon']}>
            <p>{PHONE}</p>
            <a href={`mailto:${EMAIL}?subject=Hello`}>{EMAIL}</a>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default memo(Navbar)
