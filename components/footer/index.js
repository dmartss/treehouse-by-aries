import { Facebook, Instagram, Twitter } from '../icons'
import {
  LLC_NAME,
  ADDRESS_TOP,
  ADDRESS_BOTTOM,
  TWITTER_USER_NAME,
  FACEBOOK_URL,
  INSTAGRAM_USER_NAME,
  EMAIL_ADDRESS,
  PHONE_NUMBER
} from 'lib/constants'
import Container from 'components/container'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <Container wide dark>
      <Container>
        <footer className={styles.root}>
          <nav className={styles.content}>
            <div className={styles.left}>
              <p>{PHONE_NUMBER}</p>
              <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
            </div>

            <div className={styles.center}>
              <span className={styles.social}>
                <a href={FACEBOOK_URL} target="_blank" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href={TWITTER_USER_NAME} target="_blank" aria-label="Twitter">
                  <Twitter />
                </a>
                <a href={INSTAGRAM_USER_NAME} target="_blank" aria-label="Instagram">
                  <Instagram />
                </a>
              </span>

              <p>
                Copyright © {`${new Date().getFullYear()}`} {LLC_NAME}, All rights reserved.
              </p>
            </div>

            <div className={styles.right}>
              <p>{ADDRESS_TOP}</p>
              <p>{ADDRESS_BOTTOM}</p>
            </div>
          </nav>
        </footer>
      </Container>
    </Container>
  )
}
