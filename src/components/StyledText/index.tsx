import React, { Fragment, useMemo } from 'react'

import Text from '../../types/Text'
import { getClassname } from '../../utils/getClassname'
import Link from '../Link'
import withCustomComponent from '../withCustomComponent'

function StyledText({ text, annotations }: Text) {
  const cn = getClassname(annotations)
  
  const renderText = useMemo(
    () =>
      text.link ? (
        <Link url={text.link.url} content={text.content} className={cn}/>
      ) : (
        text.content
      ),
    []
  )

  return cn ? (
    <span className={cn}>{renderText}</span>
  ) : (
    <Fragment>{renderText}</Fragment>
  )
}

export default withCustomComponent(StyledText)
