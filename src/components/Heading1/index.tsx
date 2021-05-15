import React from 'react'
import withContentValidation from '../withContentValidation'

function Heading1() {
  return <h1>Title</h1>
}

export default withContentValidation(Heading1)
