import React from 'react'
import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'
import { blockTypeClassname } from '../../../utils/getClassname'

type tableItemProps ={slugifyFn: ((text: string) => string) | null, plainText: string}
function TableItem ({ slugifyFn, plainText }: tableItemProps) {
  if (!slugifyFn) return <React.Fragment>{plainText}</React.Fragment>

  return (
    <a href={`#${slugifyFn(plainText)}`}>
      {plainText}
    </a>
  )
}

function TableOfContents({ className, index, slugifyFn }: DropedProps) {
  if (!index) return null

  return (
    <ul className={className}>
      {index.map(({ id, plainText, type }) => (
        <li key={id} className={blockTypeClassname(type)}>
          <TableItem slugifyFn={slugifyFn} plainText={plainText}/>
        </li>
      ))}
    </ul>
  )
}

export default withContentValidation(TableOfContents)
