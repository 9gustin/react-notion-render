import React from 'react'
import Heading1 from '../components/Heading1'
import Heading2 from '../components/Heading2'
import Heading3 from '../components/Heading3'
import List from '../components/List'
import Paragraph from '../components/Paragraph'
import { ParsedBlock } from '../types/Block'
import { blockEnum } from '../types/BlockTypes'

export function parseBlocks(blocks: ParsedBlock[]): ParsedBlock[] {
  return blocks.map((block) => ({
    ...block,
    render: parseBlock(block)
  }))
}

type Component =
  | typeof Heading1
  | typeof Heading2
  | typeof Heading3
  | typeof List
  | typeof Paragraph
  | null

function parseBlock(block: ParsedBlock): React.ReactNode {
  let Component: Component = null

  switch (block.type) {
    case blockEnum.HEADING1: {
      Component = Heading1
      break
    }
    case blockEnum.HEADING2: {
      Component = Heading2
      break
    }
    case blockEnum.HEADING3: {
      Component = Heading3
      break
    }
    case blockEnum.PARAGRAPH: {
      Component = Paragraph
      break
    }
    case blockEnum.DOTS_LIST:
    case blockEnum.ENUM_LIST:
    case blockEnum.CHECK_LIST:
    case blockEnum.TOGGLE_LIST: {
      Component = List
    }
  }

  return Component ? <Component key={block.id} {...block} /> : ''
}
