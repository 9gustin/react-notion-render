import React from 'react'
import Link from 'next/link'
import { Render } from '@9gustin/react-notion-render'
// import "../../dist/index.css" // <-- this is the css file from the package

import notionResponse from '../data/mockVideos.json'
import title from '../data/title.json'
import columnListResponse from '../data/columnListBlocks.json'

export default function mockedPage() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'yellow', padding: '15px' }}>
        This page is mockuped with data/blocks.json, also you can view{' '}
        <Link href='/blog'>/blog</Link>
      </h3>
      <Render blocks={[title.properties.Name]} />
      <article>
        <Render blocks={columnListResponse.results} classNames />
        <Render blocks={notionResponse.results} classNames />
      </article>
    </div>
  )
}
