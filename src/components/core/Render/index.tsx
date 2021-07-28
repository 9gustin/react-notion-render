import React, { useMemo } from 'react'
import { NotionBlock } from '../../../types/NotionBlock'
import getBlocksToRender from '../../../utils/getBlocksToRender'

interface Props {
  blocks: NotionBlock[]
  defaultStyles?: boolean
  classNames?: boolean
  emptyBlocks?: boolean
}

function Render({
  blocks,
  classNames,
  emptyBlocks
}: Props) {
  if (!blocks || !blocks.length) return <div />

  const renderBlocks = getBlocksToRender(blocks)

  const render = useMemo(
    () =>
      renderBlocks.map((block) => {
        const Component = block.getComponent()

        return Component ? (
          <Component
            key={block.id}
            classNames={Boolean(classNames)}
            emptyBlocks={emptyBlocks}
            block={block}
          />
        ) : null
      }),
    [blocks]
  )

  return <React.Fragment>{render}</React.Fragment>
}

export default Render
