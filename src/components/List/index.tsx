import React, { useCallback } from 'react'

import { blockEnum } from '../../types/BlockTypes'
import withContentValidation, { DropedProps } from '../withContentValidation'
import ListItem from './components/ListItem'

function List({ items, className, type }: DropedProps) {
  const renderList = useCallback(
    (children: React.ReactNode) => {
      if (type === blockEnum.ENUM_LIST)
        return <ol className={className}>{children}</ol>

      return <ul className={className}>{children}</ul>
    },
    [type]
  )

  return renderList(
    items?.map((item) => (
      <ListItem
        key={item.id}
        block={item}
        id={item.id}
        type={item.type as blockEnum}
        withClassNames={false}
      />
    ))
  )
}

export default withContentValidation(List)
