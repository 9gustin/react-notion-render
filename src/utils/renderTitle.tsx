import React, { Fragment } from 'react'

import StyledText from '../components/StyledText'
import Title from '../types/Title'

export default function renderTitle(title: Title): React.ReactNode {
  return (
    <Fragment>
      {title.title.map((text, i) => (
        <StyledText key={i} {...text} />
      ))}
    </Fragment>
  )
}
