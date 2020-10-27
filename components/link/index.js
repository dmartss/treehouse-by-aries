import { memo } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import canPrefetch from 'lib/can-prefetch'
import cn from 'classnames'

import styles from './link.module.css'

const Link = ({ external, href, passHref, children, className, ...props }) => {
  const { route } = useRouter()

  const c = cn(className, styles.reset, {
    [styles.selected]: href !== '/' && route.startsWith(href)
  })

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={c} {...props}>
        {children}
      </a>
    )
  }

  return (
    <>
      <NextLink href={href} prefetch={canPrefetch(href) ? undefined : false} passHref={passHref}>
        {passHref ? (
          children
        ) : (
          <a className={c} {...props}>
            {children}
          </a>
        )}
      </NextLink>
    </>
  )
}

Link.displayName = 'Link'
export default memo(Link)
