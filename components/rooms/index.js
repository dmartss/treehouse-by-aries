import cn from 'classnames'
import Image from 'next/image'
import rooms from 'lib/rooms'
import styles from './rooms.module.css'

export default function Room() {
  return rooms.map(
    ({ name, type, occupancy, quantity, description, images }) =>
      description && (
        <div className={styles.room} key={name}>
          <h3 className="fp fw3">{name}</h3>
          <div className={cn(styles.info, 'fs')}>
            <h5 className="fw4">Type: {type}</h5>
            <h5 className="fw4">Occupancy: {occupancy}</h5>
            <h5 className="fw4"># of Rooms: {quantity}</h5>
          </div>
          <h5 className="fp fw4">{description}</h5>
          <div className={styles.images}>
            {images.map(({ src, alt }) => (
              <Image
                key={src}
                className="image shadow radius"
                src={src}
                alt={alt}
                width={300}
                height={200}
              />
            ))}
          </div>
        </div>
      )
  )
}
