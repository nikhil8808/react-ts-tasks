import React,{useState,useEffect} from 'react'




const useFetchPosts =<T,>(url:string) => {

  const [data,setData]=useState<T | T[]>([])
  const [isLoading,setIsLoading]=useState(false)
  const [error,setError]=useState("")

  const fetchData=async ()=>{
    try{
         setIsLoading(true)
         const response=await fetch(url)
         const result=await response.json()
         if(result)
         {
            setData(result)
         }



    }catch(e:any)
    {
        console.log(e)
        setError(e?.message)
    }finally{
        setIsLoading(false)
    }

  }

  useEffect(()=>{

   fetchData()

  },[url])






  return {
    data,isLoading,error
  }
}

export default useFetchPosts