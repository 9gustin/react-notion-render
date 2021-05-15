import React from 'react'

import { ParsedBlock } from '../../types/Block'
import { blockEnum } from '../../types/BlockTypes'

function withContentValidation<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & ParsedBlock> {
  return (props: ParsedBlock) => {
    if (
      props.type === blockEnum.UNSUPPORTED ||
      (!props.items && !props.block?.[props.type]?.text.length)
    ) {
      return null
    }

    return <Component {...(props as P)} />
  }
}

export default withContentValidation
