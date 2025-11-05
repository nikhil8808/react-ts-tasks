import React ,{useState,useEffect} from 'react'


const useFetchData =<T,>(url:string) => {

    const [data,setData]=useState<T [] | null>(null)
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const [error,setError]=useState<string>("")


    const fetchData=async ()=>{
        try{
             setIsLoading(true)
            let response=await fetch(url)
            let result=(await response.json()) as T[]
            if(Array.isArray(result) && result?.length>0)
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
    data,
    isLoading,
    error
  }
}

export default useFetchData