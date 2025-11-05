import React ,{useState,useEffect} from "react"

interface useFetchDataProps{
    url:string
}

const useFetchData=<T,>({url}:useFetchDataProps)=>{

  const [data,setData]=useState<T|null>(null)
  const [isLoading,setIsLoading]=useState<boolean>(false)
  const [error,setError]=useState<string>("")

  const fetchData=async()=>{
    try{
      setIsLoading(true)
        let res=await fetch(url)
        let result=await res.json()
        setData(result)

    }catch(e:any)
    {
        console.log(e)
        setError(e?.message)
    }finally{
            setIsLoading(false)
    }

  }

  useEffect( ()=>{
      fetchData()
  },[url])

  return {
    data,
    isLoading,
    error
  }

}

export default useFetchData