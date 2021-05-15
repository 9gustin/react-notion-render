import Block, { ParsedBlock } from '../types/Block'
import { blockEnum } from '../types/BlockTypes'

function isList(type?: blockEnum | string) {
  return (
    type === blockEnum.TOGGLE_LIST ||
    type === blockEnum.DOTS_LIST ||
    type === blockEnum.CHECK_LIST ||
    type === blockEnum.ENUM_LIST
  )
}

/**
 * The objetive of this function its remove blocks that are not supported and
 * put together the items of the same list to render easily
 * @param blocks the entire list of blocks
 * @returns
 */
export default function getBlocksToRender(blocks: Block[]): ParsedBlock[] {
  const cleanBlocks = blocks.filter(
    (block) => block.type !== blockEnum.UNSUPPORTED
  )

  if (!cleanBlocks.length) return []

  const returnBlocks: ParsedBlock[] = []

  for (let i = 0; i < cleanBlocks.length; i++) {
    if (isList(cleanBlocks[i].type)) {
      if (
        returnBlocks[returnBlocks.length - 1]?.items?.length &&
        returnBlocks[returnBlocks.length - 1].type === cleanBlocks[i].type
      ) {
        // eslint-disable-next-line no-unused-expressions
        returnBlocks[returnBlocks.length - 1].items?.push(cleanBlocks[i])
      } else {
        returnBlocks.push({
          id: cleanBlocks[i].id,
          type: cleanBlocks[i].type as blockEnum,
          items: [cleanBlocks[i]]
        })
      }
    } else {
      returnBlocks.push({
        id: cleanBlocks[i].id,
        type: cleanBlocks[i].type as blockEnum,
        block: cleanBlocks[i]
      })
    }
  }

  return returnBlocks
}
