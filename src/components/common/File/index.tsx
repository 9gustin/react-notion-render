import React from 'react'
import withContentValidation, { DropedProps } from '../../../hoc/withContentValidation'
import Link from '../Link'

interface Props {
  className?: string
  media?: DropedProps['media']
}

function File({ media, className }: Props) {
  if (!media) return null

  const { src, name, extension } = media

  const cn = `block ${className ?? ''}`

  return (
    <Link url={src} className={cn}>
      {name}.{extension}
    </Link>
  )
}

export default withContentValidation(File)
