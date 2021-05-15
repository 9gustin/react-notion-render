import { blockEnum } from './BlockTypes'
import Text from './Text'

type blockObject = 'block' | 'database' | 'page'

type id = string

interface BlockTypeContent {
  text: Text[]
}

export default interface Block {
  id: id
  type: blockEnum | string
  object: blockObject | string
  // eslint-disable-next-line camelcase
  created_time: Date | string
  // eslint-disable-next-line camelcase
  last_edited_time: Date | string
  // eslint-disable-next-line camelcase
  has_children: boolean
  [blockEnum.HEADING1]?: BlockTypeContent
  [blockEnum.HEADING2]?: BlockTypeContent
  [blockEnum.HEADING3]?: BlockTypeContent
  [blockEnum.PARAGRAPH]?: BlockTypeContent
  [blockEnum.DOTS_LIST]?: BlockTypeContent
  [blockEnum.ENUM_LIST]?: BlockTypeContent
  [blockEnum.CHECK_LIST]?: BlockTypeContent
  [blockEnum.TOGGLE_LIST]?: BlockTypeContent
  [blockEnum.UNSUPPORTED]?: {}
}

export interface ParsedBlock {
  id: id
  type: blockEnum
  render: React.ReactNode
}
