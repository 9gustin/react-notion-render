import React from 'react'

import {render, Block} from '@9gustin/react-notion-render'
import '@9gustin/react-notion-render/dist/index.css'

import mockedData from './mockedData.json'

const App = () => {
  return <div>{render(mockedData.results as Block[], true)}</div>
}

export default App
