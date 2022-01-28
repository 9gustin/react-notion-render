/* eslint-disable camelcase */
import { blockEnum } from './BlockTypes'
import Text from './Text'

interface Title {
  id: 'title';
  type: 'title';
  title: Text[];
}

interface BlockTypeContent {
  text: Text[]
  checked?: boolean
  children?: Block[]
}

interface Block {
  id: string
  type: blockEnum | string
  object: 'block' | 'database' | 'page' | string
  created_time: Date | string
  last_edited_time: Date | string
  has_children: boolean
  [blockEnum.HEADING1]?: BlockTypeContent
  [blockEnum.HEADING2]?: BlockTypeContent
  [blockEnum.HEADING3]?: BlockTypeContent
  [blockEnum.PARAGRAPH]?: BlockTypeContent
  [blockEnum.DOTS_LIST]?: BlockTypeContent
  [blockEnum.ENUM_LIST]?: BlockTypeContent
  [blockEnum.CHECK_LIST]?: BlockTypeContent
  [blockEnum.TOGGLE_LIST]?: BlockTypeContent
  [blockEnum.TABLE]?: BlockTypeContent & {
    has_column_header: boolean
    has_row_header: boolean
    table_width: number
  }
  [blockEnum.TABLE_ROW]?: BlockTypeContent & {
    cells: Text[];
  }
}

export type NotionBlock = Block | Title
