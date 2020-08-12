import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { EMAIL, PHONE_NUMBER, NAME_SHORT, NAME_LONG, REZTRIP_URL } from 'lib/constants'

import Logo from 'components/icons/logo'
import Container from 'components/container'
import Button from 'components/button'

function Navbar() {
  const { route } = useRouter()

  return (
    <Container>
      <nav className="f-reset">
        <div className="mobile-top">
          <Link href="/">
            <a className="subtitle">{NAME_SHORT.toUpperCase()}</a>
          </Link>
          <Link href="/">
            <a style={{ color: 'var(--accents-4)' }}>{NAME_LONG.toLowerCase()}</a>
          </Link>
          <Link href="/">
            <a className="mobile-logo" title="Go to the homepage">
              <Logo />
            </a>
          </Link>

          <div className="book">
            <Button href={REZTRIP_URL}>Book</Button>
          </div>
        </div>

        <div className="links">
          <div className="hotel">
            <Link href="/">
              <a className="subtitle">{NAME_SHORT.toUpperCase()}</a>
            </Link>
            <Link href="/">
              <a style={{ color: 'var(--accents-4)' }}>{NAME_LONG.toLowerCase()}</a>
            </Link>
          </div>

          <Link href="/">
            <a className="logo">
              <Logo />
            </a>
          </Link>
          <Link href="/rooms">
            <a className={cn('subtitle', { selected: route.startsWith('/rooms') })} title="Rooms">
              Rooms
            </a>
          </Link>
          <Link href="/about">
            <a className={cn('subtitle', { selected: route.startsWith('/about') })} title="About">
              About
            </a>
          </Link>
          <Link href="/photos">
            <a className={cn('subtitle', { selected: route.startsWith('/photos') })} title="Photos">
              Photos
            </a>
          </Link>
          <Link href="/specials">
            <a
              className={cn('subtitle', { selected: route.startsWith('/specials') })}
              title="Specials"
            >
              Specials
            </a>
          </Link>
          <div className="book">
            <Button href={REZTRIP_URL}>Book</Button>
          </div>
          <div className="icon subtitle">
            <p>{PHONE_NUMBER}</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: var(--header-height);
          display: flex;
          align-items: center;
        }

        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1;
        }

        .links a {
          text-decoration: none;
          transition: color 0.2s ease;
          flex: 1;
        }

        .links .hotel {
          margin-right: -2rem;
          overflow: hidden;
          white-space: nowrap;
        }

        .links a:hover {
          color: var(--accents-4);
        }

        .links a.selected {
          color: var(--accents-4);
          text-shadow: 0px 0px 1px var(--accents-4);
        }

        .links a:first-child {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          margin: 0;
        }

        .logo,
        .icon,
        .icon > :global(div.container) {
          /* Remove additional space from SVG */
          display: inline-flex;
          justify-content: center;
        }

        .icon > :global(div.container) {
          overflow: visible;
        }

        .mobile-logo,
        .mobile-top {
          display: none;
        }

        .book :global(a) {
          background-color: var(--accents-1);
          color: var(--white);
          border: 1px solid var(--accents-1);
          padding: var(--gap-quarter) var(--gap);
          margin: 0;
        }
        .book :global(a:focus),
        .book :global(a:hover) {
          background-color: transparent;
          color: var(--accents-1);
        }

        .icon {
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 0.5;
          color: var(--accents-1);
          margin: 0 0 var(--gap) var(--gap);
        }

        /* Mobile */

        @media (max-width: 960px) {
          .links .logo {
            padding-left: var(--gap);
          }
        }

        @media (max-width: 640px) {
          .mobile-logo {
            display: block;
          }

          nav {
            height: unset;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--gap) 0;
          }

          nav .links .logo,
          nav .links .hotel,
          nav .links .book {
            display: none;
          }

          nav a,
          nav p {
            font-size: 12px;
          }

          .mobile-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: var(--gap-half);
          }

          .book {
            margin-left: var(--gap-half);
          }
        }
      `}</style>
    </Container>
  )
}

export default memo(Navbar)
