import React from 'react'

import { ParsedBlock } from '../../types/Block'
import { blockEnum } from '../../types/BlockTypes'
import StyledText from '../StyledText'

function withContentValidation<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & ParsedBlock> {
  return (props: ParsedBlock) => {
    const typeContent =
      props.type === blockEnum.UNSUPPORTED
        ? undefined
        : props.block?.[props.type]?.text

    if (!typeContent && !props.items) {
      return null
    }

    return (
      <Component {...(props as P)}>
        {typeContent?.map((text, i) => (
          <StyledText key={i} {...text} />
        ))}
      </Component>
    )
  }
}

export default withContentValidation
