// TODO: Numeric, dots, checks, toggle
import React from 'react'
import withContentValidation from '../withContentValidation'

function List() {
  return (
    <ul>
      <li>list item</li>
      <li>list item2</li>
    </ul>
  )
}

export default withContentValidation(List)
