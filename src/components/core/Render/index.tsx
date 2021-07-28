import React from 'react'
import Block from '../../../types/Block'
import getBlocksToRender from '../../../utils/getBlocksToRender'
import { parseBlock } from '../../../utils/parseBlocks'

interface Props {
  blocks: Block[]
  defaultStyles: boolean
  classNames: boolean
  emptyBlocks: boolean
}

function Render({ blocks }: Props) {
  if (!blocks.length) return <div />

  const renderBlocks = getBlocksToRender(blocks)
  console.log(renderBlocks);
  return (
    <React.Fragment>
      {renderBlocks.map((block) => parseBlock(block))}
    </React.Fragment>
  )
}

export default Render
