import React from 'react'

export interface Props {
  url: string
  children: string
  className?: string
}

function Link({ url, children, className }: Props) {
  const redirectProps = url.startsWith('#')
    ? {}
    : {
        target: '_blank', rel: 'noreferrer'
      }
  return (
    <a href={url} className={className} {...redirectProps}>
      {children}
    </a>
  )
}

export default Link
