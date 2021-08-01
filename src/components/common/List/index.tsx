import React, { useCallback } from 'react'

import { blockEnum } from '../../../types/BlockTypes'
import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'

import ListItem from './components/ListItem'

import styles from './styles.module.css'

function List({ className, config }: DropedProps) {
  const { notionType: type, items } = config.block

  const cn = `${
    type === blockEnum.CHECK_LIST || type === blockEnum.TOGGLE_LIST
      ? styles['remove-style']
      : ''
  } ${className}`

  const renderList = useCallback(
    (children: React.ReactNode) => {
      if (type === blockEnum.ENUM_LIST) { return <ol className={cn}>{children}</ol> }

      return <ul className={cn}>{children}</ul>
    },
    [type]
  )

  return renderList(
    items?.map((item) => (
      <ListItem {...config} key={item.id} block={item} />
    ))
  )
}

export default withContentValidation(List)
