import React from 'react'
import { DropedProps } from '../../../hoc/withContentValidation'

export type Props = {
  className?: string
  media?: DropedProps['media']
  frameBorder?: string
  allow?: string
  allowFullScreen?: boolean
}

function Embed({
  media,
  className,
  frameBorder,
  allow,
  allowFullScreen
}: Props) {
  if (!media) return null

  const { src, alt } = media

  return (
    <iframe
      src={src}
      title={alt}
      className={`block ${className}`}
      frameBorder={frameBorder ?? '0'}
      allow={allow}
      allowFullScreen={allowFullScreen}
    />
  )
}

export default Embed
