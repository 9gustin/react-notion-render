import React from 'react'

import { ParsedBlock } from '../../types/Block'
import { blockEnum } from '../../types/BlockTypes'
import StyledText from '../StyledText'

export interface WithContentValidationProps extends ParsedBlock {
  withClassNames: boolean
}

export interface DropedProps extends ParsedBlock {
  className?: string
  checked?: boolean
  innerChild?: React.ReactNode | null
  children?: React.ReactNode | null
}

function withContentValidation<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithContentValidationProps> {
  return ({ withClassNames, ...props }: WithContentValidationProps) => {
    const typeContent =
      props.type === blockEnum.UNSUPPORTED
        ? undefined
        : props.block?.[props.type]

    if (!typeContent && !props.items) {
      return null
    }

    return (
      <Component
        className={withClassNames ? `rnr-${props.type}` : ''}
        checked={typeContent?.checked}
        innerChild={props.block?.render}
        {...(props as P)}
      >
        {typeContent?.text.map((text, i) => (
          <StyledText key={i} {...text} />
        ))}
      </Component>
    )
  }
}

export default withContentValidation
