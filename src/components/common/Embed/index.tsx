import React from 'react'
import { DropedProps } from '../../../hoc/withContentValidation'

export type Props = {
  className?: string
  media?: DropedProps['media']
  frameBorder?: string
  allow?: string
  allowFullScreen?: boolean
}

function Embed({ media, className, ...iframeProps }: Props) {
  if (!media) return null

  const { src, alt } = media

  return (
    <iframe
      src={src}
      title={alt}
      className={className}
      frameBorder="0"
      {...iframeProps}
    />
  )
}

export default Embed
