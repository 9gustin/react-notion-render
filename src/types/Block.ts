import { blockTypes } from './BlockTypes'
import Text from './Text'

type blockObject = 'block' | 'database' | 'page'

interface BlockTypeContent {
  text: Text[]
}

export default interface Block {
  id: string
  type: blockTypes
  object: blockObject
  createdTime: Date
  lastEditedTime: Date
  hasChildren: boolean
  [blockTypes.HEADING1]: BlockTypeContent
  [blockTypes.HEADING2]: BlockTypeContent
  [blockTypes.HEADING3]: BlockTypeContent
  [blockTypes.PARAGRAPH]: BlockTypeContent
  [blockTypes.DOTS_LIST]: BlockTypeContent
  [blockTypes.ENUM_LIST]: BlockTypeContent
  [blockTypes.CHECK_LIST]: BlockTypeContent
  [blockTypes.TOGGLE_LIST]: BlockTypeContent
  [blockTypes.UNSUPPORTED]: {}
}
