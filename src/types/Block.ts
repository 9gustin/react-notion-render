import List from '../components/common/List'
import Paragraph from '../components/common/Paragraph'
import Title from '../components/common/Title'
import { blockEnum } from './BlockTypes'
import Text from './Text'

interface BlockTypeContent {
  text: Text[]
  checked?: boolean
  children?: Block[]
}

export default interface Block {
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

export interface BlockContent {
  text: Text[]
  checked?: boolean
}

export class ParsedBlock {
  id: string
  notionType: blockEnum
  items: ParsedBlock[] | null
  content: BlockContent | null

  constructor(initialValues: Block, isChild?: boolean) {
    const notionType = initialValues.type as blockEnum
    const content = initialValues[notionType]

    if (!notionType || !content) return

    this.id = initialValues.id
    this.notionType = notionType

    if (this.isList() && !isChild) {
      this.content = null
      this.items = [new ParsedBlock(initialValues, true)]
    } else {
      const { text, checked } = content

      this.items =
        content.children?.map((child: Block) => new ParsedBlock(child, true)) ??
        null
      this.content = { text, checked }
    }
  }

  getComponent() {
    switch (this.notionType) {
      case blockEnum.PARAGRAPH: {
        return Paragraph
      }
      case blockEnum.HEADING1:
      case blockEnum.HEADING2:
      case blockEnum.HEADING3: {
        return Title
      }
      case blockEnum.DOTS_LIST:
      case blockEnum.ENUM_LIST:
      case blockEnum.CHECK_LIST:
      case blockEnum.TOGGLE_LIST: {
        return List
      }
      default: {
        return null
      }
    }
  }

  getType() {
    switch (this.notionType) {
      case blockEnum.TOGGLE_LIST:
      case blockEnum.DOTS_LIST:
      case blockEnum.CHECK_LIST:
      case blockEnum.ENUM_LIST:
        return 'LIST'

      default:
        return 'ELEMENT'
    }
  }

  isList() {
    return this.getType() === 'LIST'
  }

  equalsType(type: blockEnum) {
    return this.notionType === type
  }

  addItem(block: Block) {
    if (!this.items) this.items = []

    this.items.push(new ParsedBlock(block, true))
  }
}
