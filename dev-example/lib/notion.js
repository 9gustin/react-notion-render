import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId
  })
  return response.results
}

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId
  })
  return response.results
}



export const getBlocksWithChildren = async (pageId) => {
  const response = await notion.blocks.children.list({
      block_id: pageId,
  })
  const blocks = response.results;

  const childBlocks = await Promise.all(
      blocks
        .filter((block) => block.has_children)
        .map(async (block) => {
          return {
            id: block.id,
            children: await getBlocksWithChildren(block.id)
          }
        })
  );

  const blocksWithChildren = blocks.map((block) => {
      // Add child blocks if the block should contain children but none exists
      if (block.has_children) {
        const blockType = block.type;
        if (blockType in block && !block[blockType].children) {
          block[blockType].children = childBlocks.find(
            (x) => x.id === block.id
          )?.children;
        }
      }
      return block
  });

  return blocksWithChildren;
}
