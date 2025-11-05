import React from 'react'
import Item from './Item';

interface Todo{
completed:boolean;
 id:number;
title:string
}

const List = React.memo(({itemList}:{itemList:Todo[]}) => {

  return (
    <div>
        {itemList?.map((item:Todo,index)=>{
            return <Item 
            
            key={index}
            item={item} />
        })}

    </div>
  )
})

export default List