import Image from 'next/image'
import styles from './section.module.css'
import cn from 'classnames'

export default function Section({ description, reverse, alt, src, width, height }) {
  return (
    <div className={cn(styles.main, { [styles.reverse]: reverse })}>
      <Image className="image shadow radius" alt={alt} src={src} width={width} height={height} />
      <p className="f-reset fs fw4">{description}</p>
    </div>
  )
}
