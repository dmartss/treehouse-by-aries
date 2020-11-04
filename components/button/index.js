import Link from 'next/link'
import cn from 'classnames'
import { memo } from 'react'
import styles from './button.module.css'

function Button({ children, invert, subscribe, outline, href, as, className, ...props }) {
  const rootClassName = cn(
    styles.root,
    'fw4 no-drag',
    {
      [styles.outline]: outline,
      [styles.invert]: invert,
      [styles.subscribe]: subscribe
    },
    className
  )

  if (href) {
    const isExternal = href && href.startsWith('http')
    const a = (
      <a className={rootClassName} href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )

    return isExternal ? (
      a
    ) : (
      <Link href={href} passHref>
        {a}
      </Link>
    )
  }

  return (
    <button type="button" className={rootClassName} {...props}>
      <span>{children}</span>
    </button>
  )
}

Button.displayName = 'Button'
export default memo(Button)
