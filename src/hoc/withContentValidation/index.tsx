import React, { PropsWithChildren } from 'react'

import { ParsedBlock, SimpleBlock } from '../../types/Block'

import EmptyBlock from '../../components/common/EmptyBlock'
import { LinkAttributes } from '../../components/core/Render'
import { BlockComponentsMapperType } from '../../constants/BlockComponentsMapper/types'
import { blockTypeClassname } from '../../utils/getClassname'
import { slugify } from '../../utils/slugify'
import { getDefaultProps, getMediaProps } from './constants'

export interface WithContentValidationProps {
  classNames?: boolean
  emptyBlocks?: boolean
  block: ParsedBlock
  slugifyFn?: (text: string) => string
  mapPageUrlFn?: (input: any) => string
  simpleTitles?: boolean
  index?: SimpleBlock[]
  blockComponentsMapper?: BlockComponentsMapperType
  linkAttributes?: (url: string) => LinkAttributes
}

export type DropedProps = PropsWithChildren<{
  className?: string
  checked: boolean
  plainText: string
  config: WithContentValidationProps
  slugifyFn: ((text: string) => string) | null
  language?: string
  media?: {
    alt: string
    src: string
    href?: string
    name?: string
    extension?: string
    player?: string
  }
  index?: SimpleBlock[]
  blockComponentsMapper?: BlockComponentsMapperType
}>

function withContentValidation(
  Component: React.ComponentType<DropedProps>
): React.FC<WithContentValidationProps> {
  return ({
    emptyBlocks,
    slugifyFn,
    classNames,
    simpleTitles,
    ...props
  }: WithContentValidationProps) => {
    const hasContent = props.block.hasContent()
    if (!hasContent && !emptyBlocks) {
      return null
    }

    let returnedProps: DropedProps = {
      checked: false,
      children: null,
      plainText: '',
      slugifyFn: simpleTitles ? null : slugifyFn ?? slugify,
      className: classNames
        ? blockTypeClassname(props.block.notionType)
        : undefined,
      config: {
        classNames: classNames,
        block: props.block,
        blockComponentsMapper: props.blockComponentsMapper,
        emptyBlocks,
        linkAttributes: props.linkAttributes
      }
    }

    if (props.block.isMedia()) {
      returnedProps.media = getMediaProps(props)
    } else {
      returnedProps = {
        ...returnedProps,
        ...getDefaultProps(props)
      }
    }

    return hasContent ? <Component {...returnedProps} /> : <EmptyBlock />
  }
}

export default withContentValidation
