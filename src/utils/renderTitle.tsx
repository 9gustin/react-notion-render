import React, { Fragment } from 'react'

import Text from '../components/core/Text'
import Title from '../types/Title'

export default function renderTitle(title: Title): React.ReactNode {
  return (
    <Fragment>
      {title.title.map((text, i) => (
        <Text key={i} {...text} />
      ))}
    </Fragment>
  )
}
