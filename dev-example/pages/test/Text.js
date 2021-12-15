import React from 'react'
import { Render } from '@9gustin/react-notion-render'

import blocks from './Text.json'

export default () => {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', paddingTop: 80 }}>
      <Render blocks={blocks} useStyles />
    </div>
  )
}
