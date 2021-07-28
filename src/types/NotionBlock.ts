import { blockEnum } from "./BlockTypes";
import Text from "./Text";

export interface Title {
  id: 'title';
  type: 'title';
  title: Text[];
}

interface BlockTypeContent {
  text: Text[]
  checked?: boolean
  children?: Block[]
}

export interface Block {
  id: string
  type: blockEnum | string
  object: 'block' | 'database' | 'page' | string
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
}

export type NotionBlock = Block | Title