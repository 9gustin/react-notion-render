import React, { Fragment, useMemo } from 'react'
import Block from '../types/Block'
import { blockTypes } from '../types/BlockTypes'
import { parseBlocks } from './parseBlocks'

export default function renderBlocks(apiBlocks: Block[]): React.ReactNode {
  const blocks = useMemo(() => {
    return parseBlocks(
      apiBlocks.filter((block) => block.type !== blockTypes.UNSUPPORTED)
    )
  }, [apiBlocks])

  return <Fragment>{blocks.map((block) => block.render)}</Fragment>
}
