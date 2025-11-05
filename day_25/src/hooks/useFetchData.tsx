import React,{useState,useEffect} from 'react'
import items from "../data.json"

interface useFetchDataProps{
  searchQuery:string
}
const useFetchData =<T, >({searchQuery}:useFetchDataProps) => {


  
    const [data,setData]=useState<T[] | []>([])
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const [error,setError]=useState<string>("")


    const getData=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
          
              if(searchQuery!="")
              {
                    const filtered_list=items?.data?.filter((item)=>{
                return item?.category?.toLocaleLowerCase()==searchQuery.toLocaleLowerCase() || item?.name.toLocaleLowerCase()==searchQuery.toLocaleLowerCase()
              })
              console.log(filtered_list)
              resolve(filtered_list)
                
              }else{
                resolve(items?.data)
              }
             
            },1500)

        })
    }

    const handleFetchData=async ()=>{
        try{
            setIsLoading(true)
         let result=(await getData()) as T[]
         setData(result)
        

       }catch(e:any)
        {
            console.log(e)
            setError(e?.message)
        }finally{
            setIsLoading(false)
        }

    }

    useEffect(()=>{

        handleFetchData()

    },[searchQuery])





  return {
    data,
    isLoading,
    error
  }
}

export default useFetchData