import React from 'react'
import withContentValidation, { DropedProps } from '../../../hoc/withContentValidation'
import { slugify } from '../../../utils/slugify'

function Code({ className, children, language }: DropedProps) {
  let cn = className

  if (language) {
    cn += ` language-${slugify(language)}`
  }

  return (
    <pre><code className={cn}>{children}</code></pre>
  )
}

export default withContentValidation(Code)
