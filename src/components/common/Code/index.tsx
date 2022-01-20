import React from 'react'
import withContentValidation, { DropedProps } from '../../../hoc/withContentValidation'
import { slugify } from '../../../utils/slugify'

function Code({ className, plainText, language }: DropedProps) {
  let cn = className

  if (language) {
    cn += ` language-${slugify(language)}`
  }

  return (
    <pre><code className={cn}>{plainText}</code></pre>
  )
}

export default withContentValidation(Code)
