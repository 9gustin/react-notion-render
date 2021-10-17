import React from 'react'

import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'
import Text from '../../core/Text'

function Quote({ className, config }: DropedProps) {
  const {
    block: { content }
  } = config

  if (!content) return null
  return (
    <blockquote className={className}>
      {content.text.map((text, index) => (
        <Text key={index} {...text} />
      ))}
    </blockquote>
  )
}

export default withContentValidation(Quote)
