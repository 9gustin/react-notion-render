/* eslint-disable camelcase */
import React, { Fragment, ReactElement } from 'react'

import IText from '../../../types/Text'
import { getClassname } from '../../../utils/getClassname'
import Link from '../../common/Link'
import withCustomComponent from '../../../hoc/withCustomComponent'

export function Text(props: IText) {
  const { text, annotations, type, href, plain_text, mapPageUrlFn } = props
  const className = getClassname(annotations)

  if (type === 'mention') {
    return (
      <a className={`rnr-mention ${className}`} href={href}>
        {plain_text}
      </a>
    )
  }

  if (!text) return null

  let element: ReactElement = <Fragment>{text.content}</Fragment>

  if (className) element = <span className={className}>{text.content}</span>

  if (annotations.bold) {
    element = <strong className={className}>{text.content}</strong>
  } else if (annotations.code) {
    element = <code className={className}>{text.content}</code>
  } else if (annotations.italic) {
    element = <em className={className}>{text.content}</em>
  } else if (annotations.strikethrough) {
    element = <s className={className}>{text.content}</s>
  } else if (annotations.underline) {
    element = <u className={className}>{text.content}</u>
  }

  if (text.link) {
    let { link: { url } } = text
    if (url[0] === "/" && mapPageUrlFn) {
      url = mapPageUrlFn(url.slice(1))
    }
    element = <Link url={url} className={className}>{element}</Link>
  }

  return element
}

export default withCustomComponent(Text)
/* eslint-enable camelcase */
