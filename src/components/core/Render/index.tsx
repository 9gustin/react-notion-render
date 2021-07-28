import React, { useMemo } from 'react'
import Block from '../../../types/Block'
import getBlocksToRender from '../../../utils/getBlocksToRender'

interface Props {
  blocks: Block[]
  defaultStyles?: boolean
  classNames?: boolean
  emptyBlocks?: boolean
}

function Render({
  blocks,
  classNames
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
            withClassNames={Boolean(classNames)}
            block={block}
          />
        ) : null
      }),
    [blocks]
  )

  return <React.Fragment>{render}</React.Fragment>
}

export default Render
