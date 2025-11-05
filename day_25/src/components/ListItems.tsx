import React,{} from 'react'
import Item from "./Item"
import InputSearchBox from './InputSearchBox'



const ListItems =<T,>({data,isLoading,error,handleChangeSearchQuery}:{data:T[]| [],isLoading:boolean,error:string,handleChangeSearchQuery:(search_string:string)=>void}) => {




  return (
    <div>
        {/* input search box */}
        <div style={{position:'fixed',top:0,left:0,padding:'1rem',background:'white',width:'100%',}}>
           <InputSearchBox 
           handleChangeSearchQuery={handleChangeSearchQuery}
           />
        </div>
        {/* list container */}
        {isLoading && <p>Loading...</p>}
        {!isLoading && !error && 
        <div style={{padding:'7rem'}}>
            <div style={{width:'100%',minHeight:'100vh',overflow:'auto',display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
                   {data?.length>0 && data?.map((item:T)=>{
                return <Item 
                         item={item}
                       />
            })}

            </div>
         


        </div>}

    </div>
  )
}

export default React.memo(ListItems)