import React from 'react'
import withContentValidation, { DropedProps } from '../withContentValidation'

function Heading2({ children, className }: DropedProps) {
  return <h2 className={className}>{children}</h2>
}

export default withContentValidation(Heading2)
