import React, { useMemo } from 'react'
import { NotionBlock } from '../../../types/NotionBlock'
import getBlocksToRender from '../../../utils/getBlocksToRender'

interface Props {
  blocks: NotionBlock[]
  useStyles?: boolean
  classNames?: boolean
  emptyBlocks?: boolean
  slugifyFn?: (text: string) => string
}

function Render({ blocks, classNames, emptyBlocks, useStyles, slugifyFn }: Props) {
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
            slugifyFn={slugifyFn}
          />
        ) : null
      }),
    [blocks]
  )

  return useStyles ? (
    <div className='rnr-container'>{render}</div>
  ) : (
    <React.Fragment>{render}</React.Fragment>
  )
}

export default Render
