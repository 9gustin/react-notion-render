import React, { Fragment, useMemo } from 'react'
import { blockEnum } from '../../../../types/BlockTypes'

import withContentValidation, {
  DropedProps
} from '../../../withContentValidation'
import Checkbox from '../Checkbox'

function ListItem({ children, className, type, checked }: DropedProps) {
  console.log(children, className, type, checked)
  const renderChildren = useMemo(() => {
    if (type === blockEnum.CHECK_LIST) {
      return (
        <Fragment>
          <Checkbox checked={checked} />
          {children}
        </Fragment>
      )
    }
    return children
  }, [type, children, checked])

  return <li className={className}>{renderChildren}</li>
}

export default withContentValidation(ListItem)
