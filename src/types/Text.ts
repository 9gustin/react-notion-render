type textTypes = 'text'

export default interface Text {
  type: textTypes
  text: {
    content: string
    link: string | null
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plainText: string
  href: string | null
}
