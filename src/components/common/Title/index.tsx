import React, { useMemo } from 'react'

import { blockEnum } from '../../../types/BlockTypes'
import { slugify } from '../../../utils/slugify'

import withContentValidation, { DropedProps } from '../../../hoc/withContentValidation'

function Title({ children, className, plainText, config }: DropedProps) {
  const {notionType: type} = config.block

  const renderTitle = useMemo(() => {
    const props = {
      className,
      children,
      id: slugify(plainText || '')
    }

    if (type === blockEnum.HEADING2) {
      return <h2 {...props} />
    } else if (type === blockEnum.HEADING3) {
      return <h3 {...props} />
    }

    return <h1 {...props} />
  }, [className, children, plainText])

  return <a href={`#${slugify(plainText!)}`} className="title">{renderTitle}</a>
}

export default withContentValidation(Title)
