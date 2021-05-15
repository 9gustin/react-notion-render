import React, { Fragment, useMemo } from 'react'
import Block from '../types/Block'
import getBlocksToRender from './getBlocksToRender'
import { parseBlocks } from './parseBlocks'

export default function renderBlocks(apiBlocks: Block[]): React.ReactNode {
  const blocks = useMemo(() => {
    return parseBlocks(getBlocksToRender(apiBlocks))
  }, [apiBlocks])

  return <Fragment>{blocks.map((block) => block.render)}</Fragment>
}
