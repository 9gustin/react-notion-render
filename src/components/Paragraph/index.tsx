import React from 'react'
import withContentValidation from '../withContentValidation'

function Paragraph() {
  return <p>Paragraph</p>
}

export default withContentValidation(Paragraph)
