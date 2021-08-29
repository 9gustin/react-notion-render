import React from 'react'
import Embed from '../Embed'

const MATCHERS = [
  {
    name: 'youtube',
    REGEXP:
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/,
    getUrl: (src: string) => {
      const GET_ID =
        /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
      const id = src.match(GET_ID)?.[1]
      return `https://www.youtube.com/embed/${id}`
    }
  },
  {
    name: 'googleDrive',
    REGEXP: /drive.google.com/,
    getUrl: (src: string) => {
      const videoUrl = src.split('/')
      videoUrl.pop()
      return `${videoUrl.join('/')}/preview`
    }
  }
]

export function getPlayer(src: string, alt: string, className?: string) {
  const match = MATCHERS.find((option) => option.REGEXP.test(src))

  if (!match) return null

  return PLAYERS[match.name](
    match.getUrl ? match.getUrl(src) : src,
    alt,
    className
  )
}

const PLAYERS = {
  youtube: (url: string, title: string, className?: string) => (
    <Embed
      media={{ alt: title, src: url }}
      className={className}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  ),
  googleDrive: (url: string, title: string, className?: string) => (
    <Embed
      media={{ alt: title, src: url }}
      className={className}
      allow='autoplay'
    />
  )
}

export default PLAYERS
