# react-notion-render

> A library to render notion pages 

[![NPM](https://img.shields.io/npm/v/@9gustin/react-notion-render.svg)](https://www.npmjs.com/package/@9gustin/react-notion-render) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description
This package **not make calls to Notion API** . The purpose of this library is convert the Notion API response to HTML. The Notion's API return the content of page with an structure of blocks([example](https://github.com/9gustin/react-notion-render/blob/main/example-next/data/blocks.json)) and this library resolve that structure. <br />
**Now you can use [Custom components](#custom-components-are-here) to extend supported Notion blocks ;)**

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

## Live examples: 
[Blog](https://github.com/9gustin/notion-blog-nextjs/tree/9blog) <br />
[Single Page](https://github.com/sasigume/notion-to-next-single-page)

## Example 
Now we have a live example, you can check it :D  <br />
[Live example](https://react-notion-render.vercel.app/blog)
<br /><br />
And here i added an example with images: [Example](https://react-notion-render.vercel.app/405bee8d-66f0-4777-bc75-da3f962006c1)

## Custom components are here
Now Notion API only supports text blocks(like h1, h2, h3, paragraph, lists. [Ref](https://developers.notion.com/reference/block)). Custom components are here for you, it allows you to use other important blocks. <br />
For now the only custom block are images, but i want to extend this. If have an suggestion you can create an [issue](https://github.com/9gustin/react-notion-render/issues/new) and i will work on it ;)

**Important** <br />
The text to custom components sould be plain text, when you paste a link in Notion he convert to a link. You should convert it to plain text with the "Remove link" button. Like there:
![image](https://user-images.githubusercontent.com/38046239/122657679-46bd8300-d13c-11eb-9736-8c67e81a9ba7.png)


### Link
Now you can use links like Markdown, links now are supported by Notion API, but this add the possibility to made autorreference links, as an index.

**Example:** <br />
```
// TODO
```

### Image 
This it simple, allows you to use images. The sintax are the same like [Markdown images](https://www.digitalocean.com/community/tutorials/markdown-markdown-images). For it you have to include next text into your notion page as simple text <br />

**Example:** <br />
```
![My github profile pic](https://avatars.githubusercontent.com/u/38046239)
```

**Plus** <br />
Also you can add a link to image, like an image anchor. This link would be opened when the user click the image. Thats works adding an # with the link after the markdown image.
```
![My github profile pic](https://avatars.githubusercontent.com/u/38046239)#https://github.com/9gustin
```
So when the user click my image in the blog it will be redirected to my github profile. <br />

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
