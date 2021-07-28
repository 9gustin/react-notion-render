import React, { Fragment, useMemo } from 'react'
import { blockEnum } from '../../../../../types/BlockTypes'
import styles from '../../styles.module.css'

import withContentValidation, {
  DropedProps
} from '../../../../../hoc/withContentValidation'
import Checkbox from '../Checkbox'

function ListItem({
  children,
  items,
  className,
  notionType: type,
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
    } else if (type === blockEnum.TOGGLE_LIST && items) {
      return (
        <details>
          <summary className={styles['drop-button']}>{children}</summary>
          {items.map((block) => {
            const Component = block.getComponent()

            return Component ? (
              <Component
                key={block.id}
                withClassNames={Boolean(false)}
                block={block}
              />
            ) : null
          })}
        </details>
      )
    }
    return children
  }, [type, children, checked, innerChild])

  return <li className={className}>{renderChildren}</li>
}

export default withContentValidation(ListItem)
