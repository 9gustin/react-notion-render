import { blockEnum } from '../../types/BlockTypes'

import List from '../../components/common/List'
import Code from '../../components/common/Code'
import File from '../../components/common/File'
import Title from '../../components/common/Title'
import Quote from '../../components/common/Quote'
import Table from '../../components/common/Table'
import Callout from '../../components/common/Callout'
import Divider from '../../components/common/Divider'
import DummyText from '../../components/common/DummyText'
import Paragraph from '../../components/common/Paragraph'
import Image from '../../components/common/Image/wrappedImage'
import Video from '../../components/common/Video/wrappedVideo'
import Embed from '../../components/common/Embed/wrappedEmbed'
import TableOfContents from '../../components/common/TableOfContents'
import ColumnList from '../../components/common/ColumnList'
import Column from '../../components/common/ColumnList/Column'

import { BlockComponentsMapperType } from './types'

export const BlockComponentsMapper: BlockComponentsMapperType = {
  [blockEnum.PARAGRAPH]: Paragraph,
  [blockEnum.HEADING1]: Title,
  [blockEnum.HEADING2]: Title,
  [blockEnum.HEADING3]: Title,
  [blockEnum.DOTS_LIST]: List,
  [blockEnum.ENUM_LIST]: List,
  [blockEnum.CHECK_LIST]: List,
  [blockEnum.TOGGLE_LIST]: List,
  [blockEnum.VIDEO]: Video,
  [blockEnum.FILE]: File,
  [blockEnum.PDF]: Embed,
  [blockEnum.EMBED]: Embed,
  [blockEnum.TITLE]: DummyText,
  [blockEnum.IMAGE]: Image,
  [blockEnum.CALLOUT]: Callout,
  [blockEnum.QUOTE]: Quote,
  [blockEnum.DIVIDER]: Divider,
  [blockEnum.CODE]: Code,
  [blockEnum.TABLE_OF_CONTENTS]: TableOfContents,
  [blockEnum.TABLE]: Table,
  [blockEnum.TABLE_ROW]: undefined,
  [blockEnum.SYNCED_BLOCK]: undefined,
  [blockEnum.BOOKMARK]: undefined,
  [blockEnum.COLUMN_LIST]: ColumnList,
  [blockEnum.COLUMN]: Column
}
