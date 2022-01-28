import { ParsedBlock, SimpleBlock } from '../types/Block'
import { NotionBlock } from '../types/NotionBlock'

export function indexGenerator(blocks: NotionBlock[]): SimpleBlock[] {
  const parsedBlocks = blocks.map(block => new ParsedBlock(block))
  const titles = []

  for (let i = 0; i < parsedBlocks.length; i++) {
    if (parsedBlocks[i].isTitle()) {
      titles.push(parsedBlocks[i])
    } else if (parsedBlocks[i].isContainer() && parsedBlocks[i].items) {
      titles.push(...parsedBlocks[i].items!.filter(block => block.isTitle()))
    }
  }

  return titles.map((title) => ({
    id: title.id,
    type: title.notionType,
    text: title.content?.text,
    plainText: title.getPlainText()
  })) ?? []
}
