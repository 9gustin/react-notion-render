import React from 'react'
import { ParsedBlock } from '../../types/Block'
import withContentValidation from '../withContentValidation'

function Heading1({ children }: ParsedBlock) {
  return <h1>{children}</h1>
}

export default withContentValidation(Heading1)
