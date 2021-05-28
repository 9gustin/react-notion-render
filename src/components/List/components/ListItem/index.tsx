import React, { Fragment, useMemo } from 'react'
import { blockEnum } from '../../../../types/BlockTypes'

import withContentValidation, {
  DropedProps
} from '../../../withContentValidation'
import Checkbox from '../Checkbox'

function ListItem({
  children,
  className,
  type,
  checked,
  innerChild
}: DropedProps) {
  const renderChildren = useMemo(() => {
    if (type === blockEnum.CHECK_LIST) {
      return (
        <Fragment>
          <Checkbox checked={checked} />
          {children}
        </Fragment>
      )
    } else if (type === blockEnum.TOGGLE_LIST && innerChild) {
      return (
        <details>
          <summary>{children}</summary>
          {innerChild}
        </details>
      )
    }
    return children
  }, [type, children, checked])

  return <li className={className}>{renderChildren}</li>
}

export default withContentValidation(ListItem)
