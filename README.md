<div align="center">
<h1>React Notion Render</h1>

<p>A library to render notion pages </p>
</div>
<hr />

[![NPM](https://img.shields.io/npm/v/@9gustin/react-notion-render.svg)](https://www.npmjs.com/package/@9gustin/react-notion-render) 
![npm](https://img.shields.io/npm/dw/@9gustin/react-notion-render)
![PR](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Stars](https://img.shields.io/github/stars/9gustin/react-notion-render.svg?style=social)

## Table of contents
 - [Description](#description)
 - [Installation](#installation)
 - [Examples](#examples)
   - [Basic example](#basic-example)
   - [Blog with Notion as CMS](#blog-with-notion-as-cms)
   - [Notion page to single page](#notion-page-to-single-page)
 - [Usage](#usage)
   - [Override built-in components (new)](#override-built-in-components-new)
   - [Giving Styles](#giving-styles)
   - [...moreProps](#moreprops)
   - [Custom Components](#custom-components)
   - [Display a custom table of contents](#display-a-custom-table-of-contents)
 - [Guides](#guides)
   - [How to use code blocks](https://github.com/9gustin/react-notion-render/wiki/About-code-blocks-and-how-to-colorize-it-%F0%9F%8E%A8)
 - [Supported blocks](#supported-blocks)
 - [Contributions](#contributions)

## Description

When we want to [retrieve the content of a Notion page](https://developers.notion.com/docs/working-with-page-content), using the Notion API we will obtain a complex block structure(like [this example](https://github.com/9gustin/react-notion-render/blob/main/dev-example/data/blocks.json)). This package solves that structure and takes care of rendering that response.

## Installation

```bash
npm i @9gustin/react-notion-render
```

## Examples

### Basic example
I would use the package [@notionhq/client](https://www.npmjs.com/package/@notionhq/client) to get data from the Notion API and take this example of [Notion Service](https://github.com/samuelkraft/notion-blog-nextjs/blob/master/lib/notion.js) also you can fetch the data from the api. This example take pages of an database an render the first of list. This example is an Page in Next.js.

```jsx
import { Render } from '@9gustin/react-notion-render'
import { getBlocks, getDatabase } from '../services/notion'

export default ({blocks}) => <Render blocks={blocks} />

export const getStaticProps = async () => {
  const DATABASE_ID = '54d0ff3097694ad08bd21932d598b93d'
  const database = await getDatabase(DATABASE_ID)
  const blocks = await getBlocks(database[0].id)

  return {
    props: {
      blocks
    }
  }
}
```

### Blog with Notion as CMS

I've maded a template to blog page, that use this package and allows you have a blog using notion as CMS. <br />

📎 Repo: [@9gustin/notion-blog-nextjs](https://github.com/9gustin/notion-blog-nextjs)  <br />
📚 Notion Database: [notion/notion-blog-nextjs](https://9gustin.notion.site/a30378a9a7a74a398a17b733136a70d4?v=db951035b8c44968ae226f2c2d358529)  <br />
✨Web: [blog-template](https://blog-template.9gustin.com)  <br />

**Note**: My personal blog now it's using this template. Url: [9gustin.com](https://9gustin.com)

### Notion page to single page
This example it's not maded by me, but i show you what package can do. This is a single page which use this package to render content <br />
📎 Repo: [sasigume/notion-to-next-single-page](https://github.com/sasigume/notion-to-next-single-page)

## Usage

### Override built-in components (new)
You can override the package components, for example, if you want to use your own Code component or to replace native <img> for NextImage. For this you have the prop `blockComponentsMapper`.

This works to use your own styles, a library of components (like Chackra UI, ANT Design) or better components than natives.

For example, if you want to use a custom H1:
```JSX
const MyHeading = ({plainText}) => {
  return <h1 className="my-h1-class">H1! {plainText}</h1>
}
```

And in the render you pass the prop `blockComponentsMapper` like:
```JSX
<Render blocks={blocks} blockComponentsMapper={{
  heading_1: withContentValidation(MyHeading)
}} />
```

### How works? 
**blockComponentsMapper** <br />
It prop receives an json of type BlockComponentsMapperType, the keys represents the notion type:
https://github.com/9gustin/react-notion-render/blob/154e094e9477b5dada03358e2cecf695c06bb4d3/src/constants/BlockComponentsMapper/types.ts
<br />

And here the notion types enum(you can import it):
https://github.com/9gustin/react-notion-render/blob/feature/customBlockMapper/src/types/BlockTypes.ts

**withContentValidation** <br />
I recommend that you import withContentValidation HOC from the package and wrap component on it, this HOC parse props and make it more clean, here the font-code:
https://github.com/9gustin/react-notion-render/blob/154e094e9477b5dada03358e2cecf695c06bb4d3/src/hoc/withContentValidation/index.tsx

<br />

I must work on a more clear documentation about this prop, but for now you can explore it.

### Mapping page url

In Notion, page IDs are used to link between Notion pages. For example, if you link to a Notion page titled "Test" at `notion.so/test-1a2b3c4d`, the underlying markup will look like this:

```HTML
<div>Link to page
  <a href="/1a2b3c4d" ...>
    <span>Test</span>
  </a>
</div>
```

When building a website from Notion content, you may use a different logic for creating paths to access those Notion pages. For example, the page above may now be available at `/test` path. To rewrite `/1a2b3c4d` to `/test`, you can define your own function for mapping url and pass it to prop `mapPageUrlFn` of the Render component.

### Giving styles
If you followed the [basic example](#basic-example), you may notice that the page are rendered without styles, only pure text. To solve that we can use the Render props, like the following cases.

#### Using default styles
This package give you default styles, colors, text styles(blod, italic) and some little things, if you want use have to add two things:

First import the stylesheet
```jsx
import '@9gustin/react-notion-render/dist/index.css'
```
And then add to the Render the prop **useStyles**, like that:
```jsx
<Render blocks={blocks} useStyles />
```

And it's all, now the page looks some better, i tried to not manipulate that styles so much to preserve generic styles.

#### Using your own styles
If you want to add styles by your own, you can use the prop **classNames**, this props gives classes to the elements, it make more easier to identify them. For example to paragraphs give the class "rnr-paragraph", and you can add this class in your CSS and give styles.

```jsx
<Render blocks={blocks} classNames />
```
This is independient to the prop **useStyles**, you can combinate them or use separated.

**Components Reference**  <br />

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
| rnr-image | Image | a |
| rnr-video | Video | external: **iframe**, notion uploaded video: **video** |
| rnr-file | File | a |
| rnr-embed | Embed | iframe |
| rnr-pdf | PDF | iframe |
| rnr-callout | Callout | div |
| rnr-quote | Quote | blockquote |
| rnr-divider | Divider | hr |
| rnr-code | Code | pre > code |
| rnr-table_of_contents | Table of contents | ul |
| rnr-table | Table | table |
| rnr-table_row | Table row | tr |


**Text Styles**  <br />
| ClassName          | Notion Reference    |
| ------------------ | ------------------- | 
| rnr-bold | Bold |
| rnr-italic | Italicize |
| rnr-strikethrough | Strike Through |
| rnr-underline | Underline |
| rnr-inline-code | Code |

**Text colors**  <br />
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

### ...moreProps
The Render component has two more props that you can use.

#### Custom title url
With this package you can pin the titles in the url to share it. For example, if you have a title like **My Title** and you click it, the url looks like **url.com#my-title**. The function that parse the text it's [here](https://github.com/9gustin/react-notion-render/blob/main/src/utils/slugify.ts), you can check it. But if you want some diferent conversion you can pass a custom slugify function. In case that you want to separate characthers by _ instead of - yo can pass the **slugifyFn** prop:
```jsx
<Render blocks={blocks} slugifyFn={text => text.replace(/[^a-zA-Z0-9]/g,'_')} />
```
Or whatever you want, slugifyFn should receive and return a string. <br />
If you dont want this functionality you can disable it with the prop **simpleTitles**:
```jsx
<Render blocks={blocks} simpleTitles />
```

#### Preserve empty blocks
Now by default the Render component discard the empty blocks that you put in your notion page. If you want to preserve you can pass the prop **emptyBlocks** and it be rendered.
```jsx
<Render blocks={blocks} emptyBlocks />
```

The empty blocks contain the class "**rnr-empty-block**", this class has default styles (with **useStyles**) but you can apply your own styles.

### Custom components
Now Notion API only supports text blocks, like h1, h2, h3, paragraph, lists([Notion Doc.](https://developers.notion.com/reference/block)). Custom components are here for you, it allows you to use other important blocks. <br />

**Important** <br />
The text to custom components sould be plain text, when you paste a link in Notion he convert to a link. You should convert it to plain text with the "Remove link" button. Like there:
![image](https://user-images.githubusercontent.com/38046239/122657679-46bd8300-d13c-11eb-9736-8c67e81a9ba7.png)


#### Link
Now you can use links like Markdown, links are supported by Notion API, but this add the possibility to made autorreference links, as an index.

**Example:** <br />
```
Index:
[1. Declarative](#declarative)
[2. Component Based](#component-based)
[3. About React](#about-react)
```
The link be maded with the slugifyFn, you can [check the default](https://github.com/9gustin/react-notion-render/blob/main/src/utils/slugify.ts), or [pass a custom](#custom-title-url).

### Image 
⚠️ **Now we support native notion images**, if you add a image in your notion page this package would render it ;). This option would not be deprecated, just a suggestion. <br />

This it simple, allows you to use images(includes GIF's). The syntax are the same like [Markdown images](https://www.digitalocean.com/community/tutorials/markdown-markdown-images). For it you have to include next text into your notion page as simple text <br />

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

### Video
⚠️ **Now we support native notion videos**, if you add a video in your notion page this package would render it ;). This option would not be deprecated, just a suggestion <br />
You can embed Videos. You have 3 ways to embed a video.

- Local
- Youtube
- Google Drive (with a public share url)

**Structure:** <br />
```
-[title, or alternative text](url)
```

**Example:** <br />
```
-[my youtube video](https://youtu.be/aA7si7AmPkY)
```


### Display a custom table of contents

Now we exporting the **indexGenerator** function, with that you can show a table of contents of your page content. This function receive a list of blocks and return only the title blocks. The structure of the result it's like:

![image](https://user-images.githubusercontent.com/38046239/129499362-28448241-3bf9-47b7-8629-d40d7e90a447.png)

you can use it like that:
```jsx
import { indexGenerator, rnrSlugify } from '@9gustin/react-notion-render'

const TableOfContents = ({blocks}) => {
  return (
    <>
      Table of contents:
      <ul>
        {
          indexGenerator(blocks).map(({ id, plainText, type }) => (
            <li key={id}>
              <a href={`#${rnrSlugify(plainText)}`}>
                {plainText} - {type}
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default TableOfContents

```
if you want to add links use **rnrSlugify** or your [custom slugify function](#custom-title-url) to generate the href.

## Guides

### How to use code blocks
Checkout in this repo wiki:
https://github.com/9gustin/react-notion-render/wiki/About-code-blocks-and-how-to-colorize-it-%F0%9F%8E%A8

## Supported blocks
Most common block types are supported. We happily accept pull requests to add support for the missing blocks.

| Block | Supported |
|---------|-------------|
| Text	| ✅ |
| Heading	| ✅ |
| Image	| ✅ |
| Image Caption	| ✅ |
| Bulleted List	| ✅ |
| Numbered List	| ✅ |
| Quote	| ✅ |	
| Callout	| ✅ |	
| iframe	| ✅ |
| Video	| ✅ |
| File	| ✅ |
| Divider	| ✅ |
| Link	| ✅ |	
| Code | ✅ |
| Toggle List	| ✅ |	
| Page Links	| ✅ |	
| Checkbox	| ✅ (read-only) |
| Table Of Contents	| ✅ |
| Table | ✅ |
| Synced blocks | ✅ |
| Web Bookmark |	❌ |	

## Contributions:
If you find a bug, or want to suggest a feature you can create a [New Issue](https://github.com/9gustin/react-notion-render/issues/new) and will be analized. **Contributions of any kind welcome!**

### Running the dev example
In the repo we have a dev example, with this you can test what you are developing.

Clone repo and install package dependencies

```BASH
git clone https://github.com/9gustin/react-notion-render.git
cd react-notion-render
npm install
```

Run dev example to test added features. The example are in next.js, so have to install this dependency into dev-example folder.
<br />
**IMPORTANT:** Install dependencies of dev-example with `npm install`, not with `yarn`. This is because the dev-example uses parent node_modules (with file:../node_modules) and if install it with yarn it has problems with sub dependencies.

```BASH
cd dev-example
npm install
```

Add .env file with your notion token and run the example. <br/>
Inside of dev-example folder you find a .env.example file with the structure of .env file. Steps:
1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) and generate a new integration, copy the `Internal Integration Token` and paste it into the .env file wit the key `NOTION_TOKEN`.
2. Go to your notion, create a database that you want to use as example. Enter in it and copy the database id from url. `https://www.notion.so/YOUR_PROFILE/DATABASE_ID?v=RANDOM`
3. Share the database with the integration.

More detail in [developers.notion.com/docs/getting-started](https://developers.notion.com/docs/getting-started)

Starting the dev example <br />
To run the dev example we must be in the root of the project, in the package.json we have the `dev` command, that starts package compiler and dev example together.
```BASH
cd .. //if we be inside of /dev-example
npm run dev
```

And voila. The app are running in port 3001 because a config in my pc, if you have problems with this you can change it in package.json, `dev-example` command

### Running another example

In case you want to use another example to test what you are developing, please do the following:

1. In the `package.json` file of your example project, which can be located anywhere in your machine, link to the local version of `react-notion-render`:

```
"dependencies": {
  "@9gustin/react-notion-render": "path/to-package"
}
```

This path can either be relative or absolute path.

2. Run `npm install` to install all the required packages for the example project, including the locally compiled version of `react-notion-render`.

3. Open a new terminal window and navigate to the `react-notion-render`. Run `npm start` to watch for changes you make to `react-notion-render` and build it on the go.

4. Go back to the terminal window with your example project and run `npm run dev` to test new changes of `react-notion-render` in the example.

### Project structure

| Directory | Description
| ---------- | ----------- |
`dev-example` | App maded with next.js, this app have the output of `src` as a package. You can test what are you developing here.
`src` | the package `@9gustin/react-notion-render`
`src/components` | React components
`src/components/common` | here are the "simple components", like all notion components and generic components(Link for example).
`src/components/core` | here are the logic components, the core of the package
`src/components/core/Render` | Render are the package exported component, the entry point of the package. It receives a list of blocks and render it.
`src/components/core/Text` | The text in notion are complex, this component contemplate text variants, like bold, italic. Also contemplate links.
`src/hoc` | Higher order components / in there we apply some logic rules.
`src/hoc/withContentValidation` | This HOC it's a filter before to pass the `Notion block` to the common components. almost every components are wrapped by this, and this objetive it's simplify props that the component would receive, applying package rules.
`src/hoc/withCustomComponent` | The package supports [custom components](#custom-components). This HOC make it possible. before to render text validate if the text are a custom component and render it.
`src/styles` | package styles. We just use plain css, the objective it's not apply much style, just the necessary. We use :global() to avoid compile problems with the className
`src/types` | Types of the package
`src/utils` | Common functions
`src/index.tsx` | All that the package exports outside


## License

MIT © [9gustin](https://github.com/9gustin)
