import React, { Fragment } from 'react'

import Text from '../../types/Text'

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

  return className ? (
    <span className={className}>{text.content}</span>
  ) : (
    <Fragment>{text.content}</Fragment>
  )
}

export default StyledText
