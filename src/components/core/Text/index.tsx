import React, { Fragment } from 'react'

import Text from '../../../types/Text'
import { getClassname } from '../../../utils/getClassname'
import Link from '../../common/Link'
import withCustomComponent from '../../../hoc/withCustomComponent'

function Text({ text, annotations }: Text) {
  const cn = getClassname(annotations)

  const renderText = text.link ? (
    <Link url={text.link.url} children={text.content} className={cn} />
  ) : (
    text.content
  )

  return cn ? (
    <span className={cn}>{renderText}</span>
  ) : (
    <Fragment>{renderText}</Fragment>
  )
}

export default withCustomComponent(Text)
