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
I would use the package [@notionhq/client](https://www.npmjs.com/package/@notionhq/client) to get data fron the Notion API and take this example of [Notion Service](https://github.com/samuelkraft/notion-blog-nextjs/blob/master/lib/notion.js) also you can fetch the data from the api. This example take pages of an database an render the first of list. This example is an Page in Next.js.

```jsx
import { render } from '@9gustin/react-notion-render';
import '@9gustin/react-notion-render/dist/index.css'
import { getBlocks, getDatabase } from '../services/notion';

export default ({blocks}) => render(blocks);

const MY_DATABASE = '54d0ff3097694ad08bd21932d598b93d';

export const getStaticProps = async () => {
  const database = await getDatabase(MY_DATABASE);
  const blocks = await getBlocks(database[0].id);

  return {
    props: {
      blocks
    }
  };
};
```

## Notion API Reference
[Retrieve block children](https://developers.notion.com/reference/get-block-children) <br />
[Working with page content](https://developers.notion.com/docs/working-with-page-content)

## Example 
That i see in Notion: <br />
![image](https://user-images.githubusercontent.com/38046239/120085393-2571f580-c0ae-11eb-87c0-f2977db5ad5e.png)
<br /><br />
That is returned by Notion API: <br />
[mockedData](https://github.com/9gustin/react-notion-render/blob/main/example/src/mockedData.json) 
<br /><br />
And that's are the **render** result: <br />
![image](https://user-images.githubusercontent.com/38046239/120085382-11c68f00-c0ae-11eb-94da-42ff571507ce.png)


## Giving styles
To give styles yo may activate a second param of **render** method. That generate classes to all components and text styles.
```tsx
render(blocks, true)
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
| ClassName          | Notion Reference    |
| ------------------ | ------------------- | 
| rnr-bold | Bold |
| rnr-italic | Italicize |
| rnr-strikethrough | Strike Through |
| rnr-underline | Underline |

#### Text colors
| ClassName          | HEX |
| ------------------ | --- | 
| rnr-red | #ff2525 |
| rnr-gray | #979797 |
| rnr-brown | #816868 |
| rnr-orange | #FE9920 |
| rnr-yellow | #F1DB4B |
| rnr-green | #22ae65 |
| rnr-purple | #a842ec |
| rnr-pink | #FE5D9F |
| rnr-blue | #0eb7e4 |

## Upgrades:
If you find a bug, or want to suggest a feature you can create a [New Issue](https://github.com/9gustin/react-notion-render/issues/new) with that and i will analyze, feel free to create issues. Same if you want to contribute with something you can fork this repo and then make an PR with your feature ;)

## License

MIT © [9gustin](https://github.com/9gustin)
