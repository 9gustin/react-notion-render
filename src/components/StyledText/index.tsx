import React, { Fragment, useMemo } from 'react'

import Text from '../../types/Text'
import withCustomComponent from '../withCustomComponent'

const DEFAULT_COLOR = 'default'

function StyledText({ text, annotations }: Text) {
  const className = `
    ${annotations.bold ? 'rnr-bold' : ''}
    ${annotations.code ? 'rnr-code' : ''}
    ${annotations.italic ? 'rnr-italic' : ''}
    ${annotations.strikethrough ? 'rnr-strikethrough' : ''}
    ${annotations.underline ? 'rnr-underline' : ''}
    ${annotations.color !== DEFAULT_COLOR ? `rnr-${annotations.color}` : ''}
  `.trim()

  const renderText = useMemo(
    () =>
      text.link ? (
        <a href={text.link.url} target='_blank' rel='noreferrer'>
          {text.content}
        </a>
      ) : (
        text.content
      ),
    []
  )

  return className ? (
    <span className={className}>{renderText}</span>
  ) : (
    <Fragment>{renderText}</Fragment>
  )
}

export default withCustomComponent(StyledText)
