import React from 'react'

import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'

function DummyText({ children }: DropedProps) {
  return <React.Fragment>{children}</React.Fragment>
}

export default withContentValidation(DummyText)
