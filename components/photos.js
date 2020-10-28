import Image from 'next/image'
import { images } from 'lib/rooms'
import styles from 'components/rooms/rooms.module.css'

export default function Photo() {
  return (
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
  )
}
