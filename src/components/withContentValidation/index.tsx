import React from 'react'

import Block from '../../types/Block'
import { blockTypes } from '../../types/BlockTypes'

function withContentValidation<P extends object>(
  Component: React.ComponentType<P>
): React.ReactNode {
  return (props: Block) => {
    if (
      props.type === blockTypes.UNSUPPORTED ||
      !props[props.type] ||
      props[props.type].text === []
    ) {
      return null
    }

    return <Component {...(props as P)} />
  }
}

export default withContentValidation
