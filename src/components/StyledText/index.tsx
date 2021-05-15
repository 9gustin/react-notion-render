import React, { Fragment } from 'react'

import Text from '../../types/Text'

function StyledText({ text }: Text) {
  const className = `
    
  `.trim()

  return className ? (
    <span className={className}>{text.content}</span>
  ) : (
    <Fragment>{text.content}</Fragment>
  )
}

export default StyledText
