// TODO: Numeric, dots, checks, toggle
import React from 'react'
import { ParsedBlock } from '../../types/Block'
import { blockEnum } from '../../types/BlockTypes'
import withContentValidation from '../withContentValidation'
import ListItem from './components/ListItem'

function List({ items }: ParsedBlock) {
  return (
    <ul>
      {items?.map((item) => (
        <ListItem
          key={item.id}
          block={item}
          id={item.id}
          type={item.type as blockEnum}
        />
      ))}
    </ul>
  )
}

export default withContentValidation(List)
