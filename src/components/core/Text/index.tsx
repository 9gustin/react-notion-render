/* eslint-disable camelcase */
import React, { Fragment } from 'react'

import Text from '../../../types/Text'
import { getClassname } from '../../../utils/getClassname'
import Link from '../../common/Link'
import withCustomComponent from '../../../hoc/withCustomComponent'

function Text({ text, annotations, type, href, plain_text }: Text) {
  const cn = getClassname(annotations)

  if (type === 'mention') {
    return (
      <a className={`rnr-mention ${cn}`} href={href ?? undefined}>
        {plain_text}
      </a>
    )
  } else if (!text) {
    return null
  }

  const renderText = text.link
    ? (
    <Link url={text.link.url} className={cn}>
      {text.content}
    </Link>
      )
    : (
        text.content
      )

  return cn
    ? (
    <span className={cn}>{renderText}</span>
      )
    : (
    <Fragment>{renderText}</Fragment>
      )
}

export default withCustomComponent(Text)
/* eslint-enable camelcase */
