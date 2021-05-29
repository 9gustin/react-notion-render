import React from 'react'

import styles from '../../styles.module.css'

interface Props {
  checked?: boolean
}

function Checkbox({ checked }: Props) {
  return (
    <input
      type='checkbox'
      checked={checked}
      className={styles.check}
      readOnly
    />
  )
}

export default Checkbox
