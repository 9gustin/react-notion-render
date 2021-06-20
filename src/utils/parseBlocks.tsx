import React from 'react'
import Title from '../components/Title'
import List from '../components/List'
import Paragraph from '../components/Paragraph'
import { ParsedBlock } from '../types/Block'
import { blockEnum } from '../types/BlockTypes'

export function parseBlocks(
  blocks: ParsedBlock[],
  withClassNames: boolean
): ParsedBlock[] {
  const blocksWithChildrens = blocks.map((block) => ({
    ...block,
    items: block.items?.map((item) => ({
      ...item,
      render: item.children
        ? item.children.map((child) => parseBlock(child, withClassNames))
        : null
    }))
  }))

  return blocksWithChildrens.map((block) => ({
    ...block,
    render: parseBlock(block, withClassNames)
  }))
}

type Component = typeof Title | typeof List | typeof Paragraph | null

function parseBlock(
  block: ParsedBlock,
  withClassNames: boolean
): React.ReactNode {
  let Component: Component = null

  switch (block.type) {
    case blockEnum.PARAGRAPH: {
      Component = Paragraph
      break
    }
    case blockEnum.HEADING1:
    case blockEnum.HEADING2:
    case blockEnum.HEADING3: {
      Component = Title
      break
    }
    case blockEnum.DOTS_LIST:
    case blockEnum.ENUM_LIST:
    case blockEnum.CHECK_LIST:
    case blockEnum.TOGGLE_LIST: {
      Component = List
    }
  }

  return Component ? (
    <Component key={block.id} withClassNames={withClassNames} {...block} />
  ) : (
    ''
  )
}
