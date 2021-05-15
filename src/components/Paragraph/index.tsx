import React from 'react'

import withContentValidation, { DropedProps } from '../withContentValidation'

function Paragraph({ children, className }: DropedProps) {
  return <p className={className}>{children}</p>
}

export default withContentValidation(Paragraph)
