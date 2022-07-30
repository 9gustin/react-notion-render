import React from 'react'
import { WithContentValidationProps } from '.'
import IText from '../../types/Text'

import WrappedText, { Text } from '../../components/core/Text'

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
  const { block, mapPageUrlFn } = props
  const plainText = block.getPlainText()

  return {
    checked: Boolean(block.content?.checked),
    plainText: plainText,
    children: block.content?.text.map((text: IText, index: number) => {
      let TextComponent = Text
      if (block.supportCustomComponents() && !text.annotations.code) {
        TextComponent = WrappedText
      }
      return <TextComponent key={index} {...text} mapPageUrlFn={mapPageUrlFn} />
    }),
    language: block.content?.language,
    index: props.index,
    blockComponentsMapper: props.blockComponentsMapper
  }
}
