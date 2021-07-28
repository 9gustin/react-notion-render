import React from 'react'

export interface Props {
  src: string
  alt: string
  href?: string
}

function Image({ src, alt, href }: Props) {
  return (
    <a href={href || src} target='_blank' rel='noreferrer'>
      <img src={src} alt={alt} />
    </a>
  )
}

export default Image
