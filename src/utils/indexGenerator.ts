import { ParsedBlock } from '../types/Block'
import { NotionBlock } from '../types/NotionBlock'

export function indexGenerator(blocks: NotionBlock[]) {
  const parsedBlocks = blocks.map(block => new ParsedBlock(block))

  const titles = parsedBlocks.filter(block => block.isTitle())

  return titles.map((title) => ({
    id: title.id,
    title.notionType,
    text: content?.text,
    plainText: content?.text
  }))
}
