import React from 'react'

import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'
import Text from '../../core/Text'

function Callout({ className, config }: DropedProps) {
  const {
    block: { content }
  } = config

  if (!content) return null

  return (
    <div className={className}>
      {content.icon?.emoji}
      <span>
        {content.text.map((text, index) => (
          <Text key={index} {...text} />
        ))}
      </span>
    </div>
  )
}

export default withContentValidation(Callout)
