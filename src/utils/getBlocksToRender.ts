import { ParsedBlock } from '../types/Block'
import { UNSUPPORTED_TYPE } from '../types/BlockTypes'
import { NotionBlock } from '../types/NotionBlock'

function areRelated(previous: ParsedBlock, current: ParsedBlock) {
  return previous.isList() && previous.equalsType(current.notionType)
}

/**
 * The objetive of this function its remove blocks that are not supported and
 * put together the items of the same list to render easily
 * @param blocks the entire list of blocks
 * @returns
 */
export default function getBlocksToRender(blocks: NotionBlock[]): ParsedBlock[] {
  const cleanBlocks = blocks.filter(
    ({ type }) => type !== UNSUPPORTED_TYPE
  )

  if (!cleanBlocks.length) return []

  const returnBlocks: ParsedBlock[] = []

  for (let i = 0; i < cleanBlocks.length; i++) {
    const previousBlock = returnBlocks[returnBlocks.length - 1]
    const block = new ParsedBlock(cleanBlocks[i])

    if (previousBlock && areRelated(previousBlock, block)) {
      previousBlock.addItem(cleanBlocks[i])
    } else {
      returnBlocks.push(block)
    }
  }

  return returnBlocks
}
