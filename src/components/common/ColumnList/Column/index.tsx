import React, { useCallback } from 'react'
import withContentValidation, { DropedProps } from '../../../../hoc/withContentValidation'
import { ParsedBlock } from '../../../../types/Block'

function Column({ className, config, blockComponentsMapper }: DropedProps) {
    const { items } = config.block

    if (!items) return null
    
    const renderItem = useCallback((block: ParsedBlock) => {
      if (!block?.id) return null;
      
      const Component = block.getComponent(blockComponentsMapper)
      if (!Component) return null;
      
      return (
        <Component 
          key={block.id}
          {...config} 
          block={block}
          blockComponentsMapper={blockComponentsMapper}
        />
      )
    }, [config, blockComponentsMapper, className])
    
    return (
      <div  className={className}>
        {items.map(renderItem)}
      </div>
    )
}
  
export default withContentValidation(Column)

