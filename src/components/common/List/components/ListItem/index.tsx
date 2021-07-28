import React, { Fragment, useMemo } from 'react'

import { blockEnum } from '../../../../../types/BlockTypes'
import withContentValidation, {
  DropedProps
} from '../../../../../hoc/withContentValidation'

import styles from '../../styles.module.css'

import Checkbox from '../Checkbox'

function ListItem({ children, config, className, checked }: DropedProps) {
  const { notionType: type, items } = config.block

  const renderChildren = useMemo(() => {
    if (type === blockEnum.CHECK_LIST) {
      return (
        <Fragment>
          <Checkbox checked={checked} />
          {children}
        </Fragment>
      )
    } else if (type === blockEnum.TOGGLE_LIST && items) {
      return (
        <details>
          <summary className={styles['drop-button']}>{children}</summary>
          {items.map((block) => {
            const Component = block.getComponent()

            return Component ? (
              <Component {...config} key={block.id} block={block} />
            ) : null
          })}
        </details>
      )
    }
    return children
  }, [type, children, checked])

  return <li className={className}>{renderChildren}</li>
}

export default withContentValidation(ListItem)
