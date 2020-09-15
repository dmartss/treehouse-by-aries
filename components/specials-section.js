import Button from 'components/button'
import { REZTRIP_URL } from 'lib/constants'
import Image from './image'
import cn from 'classnames'
import styles from './specials-section.module.css'

export default function SpecialsSection({
  description,
  reverse,
  special,
  alt,
  src,
  width,
  height
}) {
  return (
    <div className={cn(styles['main'], { [styles.reverse]: reverse })}>
      <Image className="no-drag" shadow alt={alt} src={src} width={width} height={height} />
      <div className={styles['content']}>
        <h2 className="fp fw4">{special}</h2>
        <p className="f-reset fs fw4">{description}</p>
        <Button invert href={REZTRIP_URL}>
          Book
        </Button>
      </div>
    </div>
  )
}
