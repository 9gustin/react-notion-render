import React from 'react'
import Heading1 from '../components/Heading1'
import Heading2 from '../components/Heading2'
import Heading3 from '../components/Heading3'
import List from '../components/List'
import Paragraph from '../components/Paragraph'
import Block, { ParsedBlock } from '../types/Block'
import { blockTypes } from '../types/BlockTypes'

export function parseBlocks(blocks: Block[]): ParsedBlock[] {
  return blocks.map((block) => ({
    id: block.id,
    type: block.type,
    render: parseBlock(block)
  }))
}

function parseBlock(block: Block): React.ReactNode {
  switch (block.type) {
    case blockTypes.HEADING1: {
      return <Heading1 />
    }
    case blockTypes.HEADING2: {
      return <Heading2 />
    }
    case blockTypes.HEADING3: {
      return <Heading3 />
    }
    case blockTypes.PARAGRAPH: {
      return <Paragraph />
    }
    case blockTypes.DOTS_LIST: {
      return <List />
    }
    case blockTypes.ENUM_LIST: {
      return <List />
    }
    case blockTypes.CHECK_LIST: {
      return <List />
    }
    case blockTypes.TOGGLE_LIST: {
      return <List />
    }
    default: {
      return ''
    }
  }
}
