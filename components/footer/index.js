import { Facebook, Instagram, Twitter } from '../icons'
import { LLC, ADDRESS, TWITTER, FACEBOOK, INSTAGRAM, EMAIL, PHONE } from 'lib/constants'
import Container from 'components/container'
import Link from 'components/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <Container wide dark center>
      <Container>
        <footer className={styles.root}>
          <nav className={styles.content}>
            <div className="tl">
              <p>{PHONE}</p>
              <Link external href={`mailto:${EMAIL}?subject=Hello`}>
                {EMAIL}
              </Link>
            </div>

            <div className={styles.center}>
              <span className={styles.social}>
                <Link href={FACEBOOK} external aria-label="Facebook">
                  <Facebook />
                </Link>
                <Link external href={TWITTER} aria-label="Twitter">
                  <Twitter />
                </Link>
                <Link external href={INSTAGRAM} aria-label="Instagram">
                  <Instagram />
                </Link>
              </span>

              <p className={styles.mobile}>
                {ADDRESS[0]} {ADDRESS[1]}
              </p>
              <p>
                Copyright © {`${new Date().getFullYear()}`} {LLC}, All rights reserved.
              </p>
            </div>

            <div className="tr">
              <p>{ADDRESS[0]}</p>
              <p>{ADDRESS[1]}</p>
            </div>
          </nav>
        </footer>
      </Container>
    </Container>
  )
}
