import React, { useCallback } from 'react'
import withContentValidation, { DropedProps } from '../../../hoc/withContentValidation'
import Column from './Column'
import { ParsedBlock } from '../../../types/Block'

function ColumnList({ className, config, blockComponentsMapper }: DropedProps) {
    const { items } = config.block

    if (!items?.length) return null

    const renderColumn = useCallback((item: ParsedBlock) => {
      if (!item?.id) return null;
      
      return (
        <Column 
          key={item.id}
          {...config} 
          block={item}
          blockComponentsMapper={blockComponentsMapper}
        />
      )
    }, [config, blockComponentsMapper, className])

    return (
      <div className={className} data-columns={items.length}>
        {items.map(renderColumn)}
      </div>
    )
}
  
export default withContentValidation(ColumnList)


