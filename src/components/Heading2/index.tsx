import React from 'react'
import { ParsedBlock } from '../../types/Block'
import withContentValidation from '../withContentValidation'

function Heading2({ children }: ParsedBlock) {
  return <h2>{children}</h2>
}

export default withContentValidation(Heading2)
