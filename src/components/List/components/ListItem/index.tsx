import React from 'react'

import withContentValidation, {
  DropedProps
} from '../../../withContentValidation'

function ListItem({ children, className }: DropedProps) {
  return <li className={className}>{children}</li>
}

export default withContentValidation(ListItem)
