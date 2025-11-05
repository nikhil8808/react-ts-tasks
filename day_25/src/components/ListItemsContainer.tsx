import React,{useCallback, useState} from 'react'
import useFetchData from '../hooks/useFetchData'
import ListItems from './ListItems'

export interface Item{
 id: number; name: string; category:string; price:number 
}

const ListItemsContainer = () => {
  const [searchQuery,setSearchQuery]=useState('')
  const {data,isLoading,error}=useFetchData<Item>({searchQuery})

   const handleChangeSearchQuery=useCallback((search_string:string)=>{
    setSearchQuery(search_string)
   },[])


 
  return (
    <div>
      <ListItems 
       data={data} 
       isLoading={isLoading}
       error={error}
       handleChangeSearchQuery={handleChangeSearchQuery}

      />
    </div>
  )
}

export default ListItemsContainer