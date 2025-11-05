import React,{useState} from "react"

export const fetchData=<T,>()=>{

    const storeData=(key:string,payload:T)=>{

        localStorage.setItem(key,JSON.stringify(payload))

    }

    const retriveData=(key:string):T | void=>{
       
        let data=localStorage.getItem(key)
        let parsed_data=null
        if(data!=null)
        {
               parsed_data=JSON.parse(data)

        }

        return parsed_data
      
     }

    return {storeData,retriveData}
  

}