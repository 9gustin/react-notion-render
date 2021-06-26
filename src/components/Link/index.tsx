import React from 'react'

export interface Props {
  url: string
  content: string
  className?: string
}

function Link({url, content, className}: Props) {
  const redirectProps = url.startsWith('#') ? {} : {
    target: '_blank', rel:'noreferrer' 
  }
  return (
    <a href={url} className={className} {...redirectProps}>
      {content}
    </a>
  )
}

export default Link
