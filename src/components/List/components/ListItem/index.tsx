import React from 'react'
import { ParsedBlock } from '../../../../types/Block'
import withContentValidation from '../../../withContentValidation'

function ListItem({ children }: ParsedBlock) {
  return <li>{children}</li>
}

export default withContentValidation(ListItem)
