import React from 'react'

import { ParsedBlock } from '../../types/Block'

import EmptyBlock from '../../components/common/EmptyBlock'
import { getDefaultProps, getMediaProps } from './constants'
import { slugify } from '../../utils/slugify'

export interface WithContentValidationProps {
  classNames?: boolean
  emptyBlocks?: boolean
  block: ParsedBlock
  slugifyFn?: (text: string) => string
  simpleTitles?: boolean
}

export interface DropedProps {
  className?: string
  checked: boolean
  children: React.ReactNode
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
}

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
    let returnedProps: DropedProps = {
      checked: false,
      children: null,
      plainText: '',
      slugifyFn: simpleTitles ? null : (slugifyFn ?? slugify),
      className: classNames ? `rnr-${props.block.notionType}` : undefined,
      config: {
        classNames: classNames,
        block: props.block,
        emptyBlocks
      }
    }

    if (props.block.isMedia()) {
      returnedProps.media = getMediaProps(props)
    } else {
      returnedProps = { ...returnedProps, ...getDefaultProps(props) }
    }

    const hasContent =
      returnedProps.plainText.trim() !== '' ||
      returnedProps.config.block.items?.length ||
      returnedProps.media

    if (!hasContent && !emptyBlocks) {
      return null
    }

    return hasContent ? <Component {...returnedProps} /> : <EmptyBlock />
  }
}

export default withContentValidation
