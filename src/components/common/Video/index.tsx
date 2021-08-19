import React from 'react'
import PLAYERS from './constants'

export interface Props {
  title: string
  src: string
  player?: string
}

function Video({ src, title, player }: Props) {
  if (player) {
    return PLAYERS[player]?.(src, title) || <h1>Error: {player} not found</h1>
  }
  return (
      <video controls>
          <source src={src}
            type="video/mp4" />
            {title}
      </video>
  )
}

export default Video
