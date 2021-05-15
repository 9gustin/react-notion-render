import React from 'react'

import { ParsedBlock } from '../../types/Block'

import withContentValidation from '../withContentValidation'

function Heading3({ children }: ParsedBlock) {
  return <h3>{children}</h3>
}

export default withContentValidation(Heading3)
