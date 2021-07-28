import DummyText from '../components/common/DummyText'
import List from '../components/common/List'
import Paragraph from '../components/common/Paragraph'
import Title from '../components/common/Title'
import { blockEnum } from './BlockTypes'
import { NotionBlock } from './NotionBlock'
import Text from './Text'

export class ParsedBlock {
  id: string
  notionType: blockEnum
  items: ParsedBlock[] | null
  content: null | {
    text: Text[]
    checked?: boolean
  }

  constructor(initialValues: NotionBlock, isChild?: boolean) {
    const notionType = initialValues.type as blockEnum
    const content = initialValues[notionType]

    if (!notionType || !content) return

    this.id = initialValues.id
    this.notionType = notionType

    if (initialValues.type === blockEnum.TITLE && 'title' in initialValues) {
      this.items = null
      this.content = { text: initialValues.title }
    } else if (this.isList() && !isChild) {
      this.content = null
      this.items = [new ParsedBlock(initialValues, true)]
    } else {
      const { text, checked } = content

      this.items =
        content.children?.map(
          (child: NotionBlock) => new ParsedBlock(child, true)
        ) ?? null
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
      case blockEnum.TITLE: {
        return DummyText
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

  addItem(block: NotionBlock) {
    if (!this.items) this.items = []

    this.items.push(new ParsedBlock(block, true))
  }
}
