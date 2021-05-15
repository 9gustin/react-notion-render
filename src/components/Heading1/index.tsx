import React from 'react'

import withContentValidation, { DropedProps } from '../withContentValidation'

function Heading1({ children, className }: DropedProps) {
  return <h1 className={className}>{children}</h1>
}

export default withContentValidation(Heading1)
