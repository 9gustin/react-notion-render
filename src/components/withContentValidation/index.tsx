import React from 'react'

import Block from '../../types/Block'
import { blockEnum } from '../../types/BlockTypes'

function withContentValidation<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & Block> {
  return (props: Block) => {
    if (
      props.type === blockEnum.UNSUPPORTED ||
      !props[props.type]?.text.length
    ) {
      return null
    }

    return <Component {...(props as P)} />
  }
}

export default withContentValidation
