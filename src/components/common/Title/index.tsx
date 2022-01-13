import React, { useMemo } from 'react'

import { blockEnum } from '../../../types/BlockTypes'

import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'

function Title({
  children,
  className,
  plainText,
  config,
  slugifyFn
}: DropedProps) {
  const { notionType: type } = config.block

  const renderTitle = useMemo(() => {
    const props = {
      className,
      children,
      ...(slugifyFn ? { id: slugifyFn(plainText || '') } : {})
    }

    if (type === blockEnum.HEADING2) {
      return <h2 {...props} />
    } else if (type === blockEnum.HEADING3) {
      return <h3 {...props} />
    }

    return <h1 {...props} />
  }, [className, children, plainText])

  return slugifyFn
    ? (
    <a href={`#${slugifyFn(plainText)}`} className='title'>
      {renderTitle}
    </a>
      )
    : renderTitle
}

export default withContentValidation(Title)
