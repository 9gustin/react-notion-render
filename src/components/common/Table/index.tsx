import React from 'react'

import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'
import IText from '../../../types/Text'
import { blockTypeClassname } from '../../../utils/getClassname'

import Text from '../../core/Text'

type tableRowProps = {
  cells: IText[][]
  className?: string
}
function TableRow({ cells, className }: tableRowProps) {
  return (
    <tr className={className}>
      {cells.map((cellTexts) => (
        <td>
          {cellTexts.map((text) => <Text {...text} />)}
        </td>
      ))}
    </tr>
  )
}

function Table({ className, config }: DropedProps) {
  const { content, items } = config.block
  const rows = items?.filter(({ content }) => content?.cells)

  if (!rows) return null

  const cn = `${className} ${
    content?.hasColumnHeader ? 'has-column-header' : ''
  } ${content?.hasRowHeader ? 'has-row-header' : ''}`.trim()

  return (
    <table className={cn}>
      {rows.map(({ notionType, content }) => (
        <TableRow className={blockTypeClassname(notionType)} cells={content!.cells!} />
      ))}
    </table>
  )
}

export default withContentValidation(Table)
