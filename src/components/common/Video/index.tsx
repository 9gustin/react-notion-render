import React from 'react'
import { DropedProps } from '../../../hoc/withContentValidation'
import { getPlayer } from './constants'

export type Props = {
  media?: DropedProps['media']
}

function Video({ media }: Props) {
  if (!media) return null

  const { src, alt } = media

  const player = getPlayer(src, alt)

  return (
    player ?? (
      <video controls>
        <source src={src} type='video/mp4' />
        {alt}
      </video>
    )
  )
}

export default Video
