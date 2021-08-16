import React from 'react'
import { indexGenerator } from '@9gustin/react-notion-render'

const MyTableOfContents = ({ blocks }) => {
  return (
    <>
      Table of contents:
      <ul>
        {
          indexGenerator(blocks).map(({ id, plainText, type }) => (
            <li key={id}>
              {plainText} - {type}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default MyTableOfContents
