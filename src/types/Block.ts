/* eslint-disable camelcase */
import Text from './Text'
import { blockEnum } from './BlockTypes'
import { NotionBlock } from './NotionBlock'
import { BlockComponentsMapperType } from '../constants/BlockComponentsMapper/types'
import { BlockComponentsMapper } from '../constants/BlockComponentsMapper'

export class ParsedBlock {
  id: string
  notionType: blockEnum
  items: ParsedBlock[] | null
  content: null | {
    text: Text[]
    checked?: boolean
    caption?: Text[]
    type?: 'external' | 'file'
    external?: {
      url: string
    }
    file?: {
      url: string
    }
    url?: string
    icon?: {
      type: 'emoji'
      emoji: string
    }
    language?: string
    hasColumnHeader?: boolean
    hasRowHeader?: boolean
    cells?: (Text[])[]
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
      const {
        rich_text,
        text,
        checked,
        caption,
        type,
        external,
        file,
        url,
        icon,
        language,
        has_column_header,
        has_row_header,
        cells
      } = content

      this.items =
        content.children?.map(
          (child: NotionBlock) => new ParsedBlock(child, true)
        ) ?? null
      this.content = {
        text: rich_text ?? text ?? [],
        checked,
        caption,
        type,
        external,
        file,
        url,
        icon,
        language,
        hasColumnHeader: has_column_header,
        hasRowHeader: has_row_header,
        cells
      }
    }
  }

  getComponent(customMapper?: BlockComponentsMapperType) {
    const mapper = { ...BlockComponentsMapper, ...customMapper }

    return mapper[this.notionType]
  }

  getUrl() {
    if (!this.content) return null

    let url = null

    if (this.isEmbed()) {
      url = this.content.url
    } else if (this.isMedia() && this.content?.type) {
      url = this.content[this.content.type]?.url
    }
    return url || null
  }

  getType() {
    switch (this.notionType) {
      case blockEnum.TOGGLE_LIST:
      case blockEnum.DOTS_LIST:
      case blockEnum.CHECK_LIST:
      case blockEnum.ENUM_LIST:
        return 'LIST'
      case blockEnum.HEADING1:
      case blockEnum.HEADING2:
      case blockEnum.HEADING3:
        return 'TITLE'
      case blockEnum.FILE:
      case blockEnum.VIDEO:
      case blockEnum.IMAGE:
      case blockEnum.PDF:
      case blockEnum.EMBED:
        return 'MEDIA'
      case blockEnum.SYNCED_BLOCK:
        return 'CONTAINER'
      case blockEnum.TABLE:
      case blockEnum.TABLE_OF_CONTENTS:
        return 'TABLE'
      case blockEnum.CODE:
        return 'CODE'
      default:
        return 'ELEMENT'
    }
  }

  getPlainText() {
    const textComponent = this.isMedia()
      ? this.content?.caption
      : this.content?.text

    return textComponent?.map((text: Text) => text.plain_text).join(' ') ?? ''
  }

  isList() {
    return this.getType() === 'LIST'
  }

  isCode() {
    return this.getType() === 'CODE'
  }

  isTitle() {
    return this.getType() === 'TITLE'
  }

  isMedia() {
    return this.getType() === 'MEDIA'
  }

  isEmbed() {
    return this.getType() === 'MEDIA' && this.notionType === blockEnum.EMBED
  }

  isContainer() {
    return this.getType() === 'CONTAINER'
  }

  isTable() {
    return this.getType() === 'TABLE'
  }

  equalsType(type: blockEnum) {
    return this.notionType === type
  }

  addItem(block: NotionBlock) {
    if (!this.items) this.items = []

    this.items.push(new ParsedBlock(block, true))
  }

  hasContent() {
    return (
      this.getUrl() ||
      this.getPlainText().trim() !== '' ||
      this.items?.length ||
      this.isTable()
    )
  }

  supportCustomComponents () {
    return !this.isCode()
  }
}

export type SimpleBlock = {
  id: string
  type: blockEnum
  text: Text[] | undefined
  plainText: string
  subItems?: SimpleBlock[]
}
