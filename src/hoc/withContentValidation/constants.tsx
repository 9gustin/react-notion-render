import React from 'react'
import { WithContentValidationProps } from '.'
import Text from '../../types/Text'

import RenderText from '../../components/core/Text'

export function getMediaProps (props: WithContentValidationProps) {
  const { block } = props
  const url = block.getUrl()

  if (!url) return undefined

  const urlParts = url.match(/\/?([^/.]*)\.?([^/]*)$/)

  const name = urlParts?.[1] ?? ''
  const extension = urlParts?.[2].split('?')[0] ?? ''

  return {
    name,
    extension,
    alt: block.getPlainText(),
    src: url
  }
}

export function getDefaultProps (props: WithContentValidationProps) {
  const { block } = props
  const plainText = block.getPlainText()

  return {
    checked: Boolean(block.content?.checked),
    plainText: plainText,
    children: block.content?.text.map((text: Text, index: number) => (
      <RenderText key={index} {...text} />
    )),
    language: block.content?.language
  }
}
