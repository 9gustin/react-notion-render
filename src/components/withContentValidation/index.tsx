import React from 'react'

import { ParsedBlock } from '../../types/Block'
import { blockEnum } from '../../types/BlockTypes'
import StyledText from '../StyledText'

export interface WithContentValidationProps extends ParsedBlock {
  withClassNames: boolean
}

export interface DropedProps extends ParsedBlock {
  className?: string
}

function withContentValidation<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithContentValidationProps> {
  return ({ withClassNames, ...props }: WithContentValidationProps) => {
    const typeContent =
      props.type === blockEnum.UNSUPPORTED
        ? undefined
        : props.block?.[props.type]?.text

    if (!typeContent && !props.items) {
      return null
    }

    return (
      <Component
        className={withClassNames ? `rnr-${props.type}` : ''}
        {...(props as P)}
      >
        {typeContent?.map((text, i) => (
          <StyledText key={i} {...text} />
        ))}
      </Component>
    )
  }
}

export default withContentValidation
