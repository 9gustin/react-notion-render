import React from 'react'

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

export function getPlayer(src: string, alt: string) {
  const match = MATCHERS.find((option) => option.REGEXP.test(src))

  if (!match) return null

  return PLAYERS[match.name](match.getUrl ? match.getUrl(src) : src, alt)
}

const PLAYERS = {
  youtube: (url: string, title: string) => (
    <iframe
      src={url}
      title={title}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  ),
  googleDrive: (url: string, title: string) => (
    <iframe title={title} src={url} allow='autoplay' />
  )
}

export default PLAYERS
