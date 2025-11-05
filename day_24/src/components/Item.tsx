import React from 'react'

interface Todo{
completed:boolean;
 id:number;
title:string
}

const Item = ({item}:{item:Todo}) => {
  
    const {completed,id,title}=item


  return (
    <div style={{marginTop:'1rem'}}>
       <p>{id}</p>
       <p>{title}</p>
       <p>{completed}</p>
    </div>
  )
}

export default Item