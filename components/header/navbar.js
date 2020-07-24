import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { EMAIL_ADDRESS, PHONE_NUMBER } from 'lib/constants'

import Logo from 'components/icons/logo'
import Container from 'components/container'
import Button from 'components/button'

function Navbar() {
  const { route } = useRouter()

  return (
    <Container wide center>
      <nav className="f-reset">
        <div className="mobile-top">
          <Link href="/">
            <a className="mobile-logo" title="Go to the homepage">
              <Logo />
            </a>
          </Link>

          <div className="book">
            <Button href="/">Book</Button>
          </div>
        </div>

        <div className="links">
          <Link href="/">
            <a className="logo">
              <Logo />
            </a>
          </Link>

          <div className="urls">
            <Link href="/">
              <a className={cn('mute', { selected: route.startsWith('/rooms') })} title="Rooms">
                Rooms
              </a>
            </Link>

            <Link href="/">
              <a className={cn('mute', { selected: route.startsWith('/about') })} title="About">
                About
              </a>
            </Link>

            <Link href="/">
              <a className={cn('mute', { selected: route.startsWith('/photos') })} title="Photos">
                Photos
              </a>
            </Link>
          </div>

          <div className="book">
            <Button href="/">Book</Button>
          </div>
        </div>
        <div className="right">
          <p>{PHONE_NUMBER}</p>
          <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          height: var(--header-height);
          margin: 0 3rem;
        }

        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          z-index: 1;
        }

        .urls {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          z-index: 1;
        }

        .urls a {
          margin-right: 2rem;
        }

        .links a {
          color: var(--accents-1);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .links a:hover {
          color: var(--accents-3);
        }

        .links a.selected {
          color: var(--accents-2);
          text-shadow: 0px 0px 1px #0070f3;
        }

        .links > a.logo {
          display: flex;
          margin: 0;
        }

        a.icon,
        a.icon > :global(div.container) {
          /* Remove additional space from SVG */
          display: inline-flex;
          justify-content: center;
        }

        a.icon > :global(div.container) {
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

        .right {
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 1rem;
          margin-bottom: 1rem;
          line-height: 0.25;
          color: var(--accents-1);
        }

        /* Mobile */

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
          nav .links .book {
            display: none;
          }

          nav .links a {
            font-size: 14px;
          }

          nav .links a:nth-child(2) {
            margin: 0;
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
