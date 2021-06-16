import React from 'react'
import Link from 'next/link'
import { render } from '@9gustin/react-notion-render'

import notionResponse from '../data/blocks.json'

export default function mockedPage() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'yellow', padding: '15px' }}>
        This page is mockuped with data/blocks.json, also you can view{' '}
        <Link href='/blog'>/blog</Link>
      </h3>

      {render(notionResponse.results)}
    </div>
  )
}
