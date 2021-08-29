import React from 'react'
import { DropedProps } from '../../../hoc/withContentValidation'
import { getPlayer } from './constants'

export type Props = {
  className?: string
  media?: DropedProps['media']
}

function Video({ media, className }: Props) {
  if (!media) return null

  const { src, alt } = media

  const player = getPlayer(src, alt, className)

  return (
    player ?? (
      <video className={className} controls>
        <source src={src} type='video/mp4' />
        {alt}
      </video>
    )
  )
}

export default Video
