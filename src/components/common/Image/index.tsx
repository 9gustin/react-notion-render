import React from 'react'
import { DropedProps } from '../../../hoc/withContentValidation'

export interface Props {
  className?: string
  media?: DropedProps['media']
}

function Image({ className, media }: Props) {
  if (!media) return null
  const { src, alt, href } = media
  return (
    <a className={className} href={href} target='_blank' rel='noreferrer'>
      <img src={src || href} alt={alt} />
    </a>
  )
}

export default Image
