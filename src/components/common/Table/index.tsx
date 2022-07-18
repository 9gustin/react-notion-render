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
  id: string
}
function TableRow({ cells, className, id }: tableRowProps) {
  return (
    <tr className={className}>
      {cells.map((cellTexts, i) => (
        <td key={`td-${id}-${i}`}>
          {cellTexts.map((text, textI) => <Text {...text} key={`text-${id}-${textI}`} />)}
        </td>
      ))}
    </tr>
  )
}

function Table({ className, config }: DropedProps) {
  const { content, items } = config.block
  const rows = items?.filter(({ content }) => content?.cells)

  if (!rows) return null

  const cn = `${className} ${content?.hasColumnHeader ? 'has-column-header' : ''
    } ${content?.hasRowHeader ? 'has-row-header' : ''}`.trim()

  return (
    <table className={cn}>
      <tbody>
        {rows.map(({ notionType, content, id }) => (
          <TableRow className={blockTypeClassname(notionType)} cells={content!.cells!} key={id} id={id} />
        ))}
      </tbody>
    </table>
  )
}

export default withContentValidation(Table)
