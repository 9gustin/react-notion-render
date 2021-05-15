import React, { Fragment, useMemo } from 'react'
import Block from '../types/Block'
import { blockTypes } from '../types/BlockTypes'

export default function renderBlocks(apiBlocks: Block[]): React.ReactNode {
  const blocks = useMemo(
    () => apiBlocks.filter((block) => block.type !== blockTypes.UNSUPPORTED),
    [apiBlocks]
  )

  return <Fragment>{blocks.length}</Fragment>
}
