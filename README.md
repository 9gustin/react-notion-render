# react-notion-render

> A library to render notion pages 

[![NPM](https://img.shields.io/npm/v/@9gustin/react-notion-render.svg)](https://www.npmjs.com/package/@9gustin/react-notion-render) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description
This package not make calls to Notion API. The purpose of this library is convert the Notion API response to HTML. The Notion's API return the content of page with an structure of blocks([example](https://github.com/9gustin/react-notion-render/blob/main/example/src/mockedData.json)) and this library resolve that structure.

## Notion API Reference
[Retrieve block children](https://developers.notion.com/reference/get-block-children) <br />
[Working with page content](https://developers.notion.com/docs/working-with-page-content)

## Install

```bash
npm i @9gustin/react-notion-render
```

## Usage

```tsx
import React from 'react'

import { render } from '@9gustin/react-notion-render'
import '@9gustin/react-notion-render/dist/index.css'

import mockedData from './mockedData.json'

const App = () => {
  return <div>{render(mockedData.results)}</div>
}

export default App

```

## Example 
Source: <br />
[mockedData](https://github.com/9gustin/react-notion-render/blob/main/example/src/mockedData.json) <br /><br />
Result: <br />
![image](https://user-images.githubusercontent.com/38046239/118378677-c3909680-b5ab-11eb-8d80-2ad2afcc663c.png)

## Giving styles
I tried not to add a lot styles to let free to devs, and i added classNames to components to you take that and give styles. I named classes starting to * rnr- * (rnr like 'React-Notion-Render') and the notion name of component / style. Then i go to list the name of classNames and their reference. This classes not has styles, for that should be easy to you give styles.

## Upgrades / TO DO:
 - Give default styles for text variants (underline, colors, bold, etc)
 - Add more list styles(numerated and toggle lists)
 - Improve default styles

If you see something more that I forget feel free to add that in this list or fork this repo ;)

## License

MIT © [9gustin](https://github.com/9gustin)
