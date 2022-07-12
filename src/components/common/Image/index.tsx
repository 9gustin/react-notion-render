import React from 'react'
import { DropedProps } from '../../../hoc/withContentValidation'

export interface Props {
  className?: string
  media?: DropedProps['media']
}

function Image({ className, media }: Props) {
  if (!media) return null
  const { src, alt, href } = media

  const img = <img className={className} src={src} alt={alt} />

  return href
    ? (
    <a href={href} target='_blank' rel='noreferrer'>
      {img}
    </a>
      )
    : (
        img
      )
}

export default Image
