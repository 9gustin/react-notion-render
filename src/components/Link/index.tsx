import React from 'react'

export interface Props {
  url: string
  content: string
  className?: string
}

function Link({url, content, className}: Props) {
  return (
    <a href={url} target='_blank' rel='noreferrer' className={className}>
      {content}
    </a>
  )
}

export default Link
