import { blockEnum } from '../../types/BlockTypes'
import { WithContentValidationProps } from '../../hoc/withContentValidation'

type BlockComponent = React.FC<WithContentValidationProps> | undefined

export type BlockComponentsMapperType = {
  [blockEnum.PARAGRAPH]?: BlockComponent
  [blockEnum.HEADING1]?: BlockComponent
  [blockEnum.HEADING2]?: BlockComponent
  [blockEnum.HEADING3]?: BlockComponent
  [blockEnum.DOTS_LIST]?: BlockComponent
  [blockEnum.ENUM_LIST]?: BlockComponent
  [blockEnum.CHECK_LIST]?: BlockComponent
  [blockEnum.TOGGLE_LIST]?: BlockComponent
  [blockEnum.VIDEO]?: BlockComponent
  [blockEnum.FILE]?: BlockComponent
  [blockEnum.PDF]?: BlockComponent
  [blockEnum.EMBED]?: BlockComponent
  [blockEnum.TITLE]?: BlockComponent
  [blockEnum.IMAGE]?: BlockComponent
  [blockEnum.CALLOUT]?: BlockComponent
  [blockEnum.QUOTE]?: BlockComponent
  [blockEnum.DIVIDER]?: BlockComponent
  [blockEnum.CODE]?: BlockComponent
  [blockEnum.TABLE_OF_CONTENTS]?: BlockComponent
  [blockEnum.TABLE]?: BlockComponent
  [blockEnum.TABLE_ROW]?: BlockComponent
  [blockEnum.SYNCED_BLOCK]?: BlockComponent
  [blockEnum.BOOKMARK]?: BlockComponent
  [blockEnum.COLUMN_LIST]?: BlockComponent
  [blockEnum.COLUMN]?: BlockComponent
}
