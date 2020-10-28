import Image from 'next/image'
import styles from 'components/rooms/rooms.module.css'

export default function Photo({ images }) {
  return (
    <div className={styles.images}>
      {images.map((image, i) => (
        <Image
          key={i}
          className="image shadow radius"
          src={`/showcase-thumbnails/${image}`}
          alt={image}
          width={300}
          height={200}
        />
      ))}
    </div>
  )
}
