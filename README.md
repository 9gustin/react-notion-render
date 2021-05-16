# react-notion-render

> A library to render notion pages 

[![NPM](https://img.shields.io/npm/v/@9gustin/react-notion-render.svg)](https://www.npmjs.com/package/@9gustin/react-notion-render) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description
This package **not make calls to Notion API** . The purpose of this library is convert the Notion API response to HTML. The Notion's API return the content of page with an structure of blocks([example](https://github.com/9gustin/react-notion-render/blob/main/example/src/mockedData.json)) and this library resolve that structure.

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

## Notion API Reference
[Retrieve block children](https://developers.notion.com/reference/get-block-children) <br />
[Working with page content](https://developers.notion.com/docs/working-with-page-content)

## Notion API Integration example
I would use the package [@notionhq/client](https://www.npmjs.com/package/@notionhq/client) and take this example of [Notion Service](https://github.com/samuelkraft/notion-blog-nextjs/blob/master/lib/notion.js). This example take pages of an database an render the first of list.


```jsx
import React, { useState, useEffect } from 'react'

import { render } from '@9gustin/react-notion-render'
import '@9gustin/react-notion-render/dist/index.css'

import { getDatabase, getBlocks } from '../services/notion'

const MY_DATABASE = '54d0ff3097694ad08bd21932d598b93d';

const App = () => {
  const [blocks, setBlocks] = useState([]);
  
  useEffect(() => {
      getDatabase(MY_DATABASE)
      .then(database => getBlocks(database[0].id))
      .then(setBlocks)
  }, [])

  return <div>{render(blocks)}</div>
}

export default App

```

## Giving styles
To give styles yo may activate a second param of **render** method. That generate classes to all components and text styles.
```tsx
render(mockedData.results, true)
```
I tried not to add a lot styles to let free to devs, and i added classNames to components to you take that and give styles. I named classes starting to **rnr-** (rnr like 'React-Notion-Render') and the notion name of component / style. Then i go to list the name of classNames and their reference. This classes not has styles, for that should be easy to you give styles.

##### Components

| ClassName          | Notion Reference    | HTML Tag                                         |
| ------------------ | ------------------- | ------------------------------------------------ |
| rnr-heading_1 | Heading 1 | h1 |
| rnr-heading_2 | Heading 2 | h2 |
| rnr-heading_3 | Heading 3 | h3 |
| rnr-paragraph | Paragraph | p |
| rnr-to_do | To-do List | ul |
| rnr-bulleted_list_item | Bulleted List | ul |
| rnr-numbered_list_item | Numered List | ol |
| rnr-toggle | Toggle List | ul |

#### Text Styles
Now i not give any styles fot that classes <br />
| ClassName          | Notion Reference    |
| ------------------ | ------------------- | 
| rnr-bold | Bold |
| rnr-italic | Italicize |
| rnr-strikethrough | Strike Through |
| rnr-underline | Underline |

#### Text colors
Now i not give any styles fot that classes. <br />
For the colors, that classes are generated like other classes, 'rnr-NAME_COLOR', then NAME_COLOR are taked from notion dropdown into lower case. Like 'rnr-blue', 'rnr-red'. <br />
![image](https://user-images.githubusercontent.com/38046239/118379410-867ad300-b5b0-11eb-8068-b832c5c134c7.png)

## Upgrades / TO DO:
 - Improve exported types for typescript use
 - Support links on Text Component
 - Give default styles for text variants (underline, colors, bold, etc)
 - Add more list styles(numerated and toggle lists)
 - Improve default styles

If you see something more that I forget feel free to add that in this list or fork this repo ;)

## License

MIT © [9gustin](https://github.com/9gustin)
