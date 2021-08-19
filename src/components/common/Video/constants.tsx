import React from 'react'

const PLAYERS = {
  youtube: (url: string, title: string) => {
    const videoCode = url.split('/')[3]
    return (
        <iframe
        src={`https://www.youtube.com/embed/${videoCode}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    )
  },
  googleDrive: (url: string, title: string) => {
    const videoUrl = url.split('/')
    videoUrl.pop()
    return (
        <iframe title={title} src={`${videoUrl.join('/')}/preview`} allow="autoplay" />
    )
  }
}

export default PLAYERS
