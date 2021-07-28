import React from 'react'

import { ParsedBlock } from '../../types/Block'
import Text from '../../types/Text'

import RenderText from '../../components/core/Text'

export interface WithContentValidationProps {
  classNames?: boolean
  emptyBlocks?: boolean
  block: ParsedBlock
}

export interface DropedProps {
  className?: string
  checked: boolean
  children: React.ReactNode
  plainText: string
  config: WithContentValidationProps
}

function withContentValidation(
  Component: React.ComponentType<DropedProps>
): React.FC<WithContentValidationProps> {
  return ({ classNames, emptyBlocks, block }: WithContentValidationProps) => {
    const plainText = block.content?.text
      .map((text: any) => text.plain_text)
      .join(' ') ?? ''

    const defaultContent = emptyBlocks ? '' : null

    return (
      <Component
        className={classNames ? `rnr-${block.notionType}` : undefined}
        checked={Boolean(block.content?.checked)}
        plainText={plainText}
        config={{classNames, emptyBlocks, block }}
      >
        {block.content?.text.map((text: Text, index: number) => (
          <RenderText key={index} {...text} />
        )) ?? defaultContent}
      </Component>
    )
  }
}

export default withContentValidation
