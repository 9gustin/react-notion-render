import { ParsedBlock, SimpleBlock } from '../types/Block'
import { NotionBlock } from '../types/NotionBlock'

export function indexGenerator(blocks: NotionBlock[]): SimpleBlock[] {
  const parsedBlocks = blocks.map(block => new ParsedBlock(block))

  const titles = parsedBlocks.filter(block => block.isTitle())

  return titles.map((title) => ({
    id: title.id,
    type: title.notionType,
    text: title.content?.text,
    plainText: title.getPlainText()
  })) ?? []
}
