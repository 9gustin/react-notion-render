import React from 'react'

import withContentValidation, { DropedProps } from '../withContentValidation'

function Heading3({ children, className }: DropedProps) {
  return <h3 className={className}>{children}</h3>
}

export default withContentValidation(Heading3)
