import Link from 'next/link'
import cn from 'classnames'
import { memo } from 'react'
import styles from './button.module.css'

export default memo(function Button({ children, invert, outline, href, as, className, ...props }) {
  const cachedClassNames = cn(className, styles.btn, 'fw4 no-drag', {
    [styles.outline]: outline,
    [styles.invert]: invert
  })

  if (href) {
    const isExternal = href && href.startsWith('http')
    const a = (
      <a
        className={cachedClassNames}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
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
    <button type="button" className={cachedClassNames} {...props}>
      <span>{children}</span>
    </button>
  )
})
