import { BlockTypeContent } from '../types/Block'

export default function renderContent(content?: BlockTypeContent): string {
  return content ? content.text[0].plain_text : ''
}
