import React from 'react'

import {render} from '@9gustin/react-notion-render'
import '@9gustin/react-notion-render/dist/index.css'

import mockedData from './mockedData.json'

const App = () => {
  return <div>{render(mockedData.results, true)}</div>
}

export default App
