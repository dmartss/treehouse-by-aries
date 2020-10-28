import cn from 'classnames'
import styles from './section.module.css'

export default function SectionHeader({ id, title, description }) {
  return (
    <div className={cn(styles['section-header'], 'tc')} id={id}>
      <h2 className="fp fw3">{title}</h2>
      {description && <p className="f-reset fs fw4">{description}</p>}
    </div>
  )
}
