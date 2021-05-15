import React from 'react'

import { ParsedBlock } from '../../types/Block'

import withContentValidation from '../withContentValidation'

function Paragraph({ children }: ParsedBlock) {
  return <p>{children}</p>
}

export default withContentValidation(Paragraph)
