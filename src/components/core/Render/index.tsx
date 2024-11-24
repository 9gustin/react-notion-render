import React, { useMemo } from 'react'

import { BlockComponentsMapperType } from '../../../constants/BlockComponentsMapper/types'
import { NotionBlock } from '../../../types/NotionBlock'
import getBlocksToRender from '../../../utils/getBlocksToRender'
import { indexGenerator } from '../../../utils/indexGenerator'

export interface LinkAttributes {
  target?: string
  rel?: string
}

interface Props {
  blocks: NotionBlock[]
  useStyles?: boolean
  classNames?: boolean
  emptyBlocks?: boolean
  slugifyFn?: (text: string) => string
  mapPageUrlFn?: (input: any) => string
  simpleTitles?: boolean
  blockComponentsMapper?: BlockComponentsMapperType
  linkAttributes?: (url: string) => LinkAttributes
}

function Render({
  blocks,
  classNames,
  emptyBlocks,
  useStyles,
  slugifyFn,
  mapPageUrlFn,
  simpleTitles,
  blockComponentsMapper,
  linkAttributes
}: Props) {
  if (!blocks || !blocks.length) return null

  const render = useMemo(() => {
    const renderBlocks = getBlocksToRender(blocks)
    const index = indexGenerator(blocks)

    return renderBlocks.map((block) => {
      const Component = block.getComponent(blockComponentsMapper)

      return Component ? (
        <Component
          key={block.id}
          classNames={Boolean(classNames)}
          emptyBlocks={emptyBlocks}
          block={block}
          slugifyFn={slugifyFn}
          mapPageUrlFn={mapPageUrlFn}
          simpleTitles={simpleTitles}
          index={index}
          blockComponentsMapper={blockComponentsMapper}
          linkAttributes={linkAttributes}
        />
      ) : null
    })
  }, [blocks])

  return useStyles ? (
    <div className='rnr-container'>{render}</div>
  ) : (
    <React.Fragment>{render}</React.Fragment>
  )
}

export default Render
