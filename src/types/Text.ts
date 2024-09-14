import { LinkAttributes } from '../components/core/Render'

type textTypes = 'text' | 'mention' | string

type Link = {
  url: string
}

export default interface Text {
  type: textTypes
  text?: {
    content: string
    link: Link | null
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  // eslint-disable-next-line camelcase
  plain_text: string
  href?: string
  mention?: {
    type: string
  }
  mapPageUrlFn?: (input: any) => string
  linkAttributes?: (url: string) => LinkAttributes
}
