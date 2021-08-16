import React from 'react'

import { ParsedBlock } from '../../types/Block'
import Text from '../../types/Text'

import RenderText from '../../components/core/Text'
import EmptyBlock from '../../components/common/EmptyBlock'
import { slugify } from '../../utils/slugify'

export interface WithContentValidationProps {
  classNames?: boolean
  emptyBlocks?: boolean
  block: ParsedBlock
  slugifyFn?: (text: string) => string
}

export interface DropedProps {
  className?: string
  checked: boolean
  children: React.ReactNode
  plainText: string
  config: WithContentValidationProps
  slugifyFn: (text: string) => string
}

function withContentValidation(
  Component: React.ComponentType<DropedProps>
): React.FC<WithContentValidationProps> {
  return ({
    classNames,
    emptyBlocks,
    block,
    slugifyFn
  }: WithContentValidationProps) => {
    const plainText = block.getPlainText()
    const hasContent = plainText.trim() !== '' || block.items?.length

    if (!hasContent && !emptyBlocks) {
      return null
    }

    return hasContent
      ? (
      <Component
        className={classNames ? `rnr-${block.notionType}` : undefined}
        checked={Boolean(block.content?.checked)}
        plainText={plainText}
        slugifyFn={slugifyFn ?? slugify}
        config={{
          classNames,
          emptyBlocks,
          block
        }}
      >
        {block.content?.text.map((text: Text, index: number) => (
          <RenderText key={index} {...text} />
        ))}
      </Component>
        )
      : (
      <EmptyBlock />
        )
  }
}

export default withContentValidation
