import styles from './home.module.css'
import { NAME_SHORT, NAME_LONG } from 'lib/constants'

export default function Home() {
  return (
    <div className={styles.main}>
      <img className="no-drag" src="/room.jpg" />
      <div className={styles.content}>
        <h1 className="fw4">{NAME_SHORT}</h1>
        <h4 className="fw3">{NAME_LONG}</h4>
      </div>
    </div>
  )
}
