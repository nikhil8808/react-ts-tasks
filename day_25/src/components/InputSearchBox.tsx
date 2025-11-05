import React,{useState} from 'react'

const InputSearchBox = ({handleChangeSearchQuery}:{handleChangeSearchQuery:(search_query:string)=>void}) => {
  

  


  return (
   <div style={{display:'flex',flexDirection:'column',gap:'1rem',position:'relative'}}>
            <label htmlFor="">Search</label>
            <input type="text" 
             style={{width:'70%',padding:"0.5rem"}} 
             placeholder="Category,name,price..."
             onChange={(e)=>handleChangeSearchQuery(e?.target?.value)}

             />
      </div>
  )
}

export default React.memo(InputSearchBox)