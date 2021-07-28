import React from 'react'

import Title from '../components/common/Title'
import List from '../components/common/List'
import Paragraph from '../components/common/Paragraph'

import { ParsedBlock } from '../types/Block'
import { blockEnum } from '../types/BlockTypes'

type Component = typeof Title | typeof List | typeof Paragraph | null

export function parseBlock(
  block: ParsedBlock,
  withClassNames?: boolean
): React.ReactNode {
  let Component: Component = null

  switch (block.notionType) {
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
    <Component key={block.id} withClassNames={Boolean(withClassNames)} block={block} />
  ) : (
    <React.Fragment />
  )
}
