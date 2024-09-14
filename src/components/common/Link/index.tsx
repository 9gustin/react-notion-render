import React from 'react'
import { LinkAttributes } from '../../core/Render'

export interface Props {
  url: string
  children: React.ReactNode
  className?: string
  linkAttributes?: (url: string) => LinkAttributes
}

function Link({ url, children, className, linkAttributes }: Props) {
  const defaultRedirectProps = url.startsWith('#')
    ? {}
    : {
        target: '_blank',
        rel: 'noreferrer'
      }

  const redirectProps = linkAttributes
    ? linkAttributes(url)
    : defaultRedirectProps

  return (
    <a href={url} className={className} {...redirectProps}>
      {children}
    </a>
  )
}

export default Link
