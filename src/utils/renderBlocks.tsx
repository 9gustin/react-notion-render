import React, { Fragment, useMemo } from 'react'
import Block from '../types/Block'
import getBlocksToRender from './getBlocksToRender'
import { parseBlocks } from './parseBlocks'

export default function renderBlocks(
  apiBlocks: Block[],
  withClassNames: boolean = false
): React.ReactNode {
  const blocks = useMemo(() => {
    if (!apiBlocks) return []

    const tempBlocks = getBlocksToRender(apiBlocks).map(
      ({ items, ...rest }) => ({
        ...rest,
        items: items?.map((item) => ({
          ...item,
          children: item[item.type].children
            ? getBlocksToRender(item[item.type].children)
            : null
        }))
      })
    )

    return parseBlocks(tempBlocks, withClassNames)
  }, [apiBlocks])

  return <Fragment>{blocks.map((block) => block.render)}</Fragment>
}
