import React, { useMemo } from 'react'

import styles from '../../../styles/index.module.css'
import { blockEnum } from '../../../types/BlockTypes'
import { idFromString } from '../../../utils/idFromString'

import withContentValidation, { DropedProps } from '../../../hoc/withContentValidation'

function Title({ children, className, plainText, notionType: type }: DropedProps) {
  const renderTitle = useMemo(() => {
    const props = {
      className,
      children,
      id: idFromString(plainText || '')
    }

    if (type === blockEnum.HEADING2) {
      return <h2 {...props} />
    } else if (type === blockEnum.HEADING3) {
      return <h3 {...props} />
    }

    return <h1 {...props} />
  }, [className, children, plainText])

  return <a href={`#${idFromString(plainText!)}`} className={styles.title}>{renderTitle}</a>
}

export default withContentValidation(Title)
