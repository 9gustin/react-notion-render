// TODO: Numeric, dots, checks, toggle
import React from 'react'

import { blockEnum } from '../../types/BlockTypes'
import withContentValidation, { DropedProps } from '../withContentValidation'
import ListItem from './components/ListItem'

function List({ items, className }: DropedProps) {
  return (
    <ul className={className}>
      {items?.map((item) => (
        <ListItem
          key={item.id}
          block={item}
          id={item.id}
          type={item.type as blockEnum}
          withClassNames={false}
        />
      ))}
    </ul>
  )
}

export default withContentValidation(List)
