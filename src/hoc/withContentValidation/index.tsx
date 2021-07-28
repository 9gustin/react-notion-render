import React from 'react'

import { ParsedBlock } from '../../types/Block'

import Text from '../../components/core/Text'

export interface WithContentValidationProps {
  withClassNames: boolean
  block: ParsedBlock
}

export interface DropedProps extends ParsedBlock {
  className?: string
  checked?: boolean
  children: React.ReactNode
  innerChild?: React.ReactNode | null
  plainText?: string
}

function withContentValidation<P extends object>(
  Component: React.ComponentType<P>
): React.FC<WithContentValidationProps> {
  return ({ withClassNames, block }: WithContentValidationProps) => {

    const plainText = block.content?.text.map((text: any) => text.plain_text).join(' ')

    return (
      <Component
        className={withClassNames ? `rnr-${block.notionType}` : ''}
        checked={block.content?.checked}
        plainText={plainText}
        {...(block as P)}
      >
        {block.content?.text.map((text: any, i: any) => (
          <Text key={i} {...text} />
        )) ?? null}
      </Component>
    )
  }
}

export default withContentValidation
