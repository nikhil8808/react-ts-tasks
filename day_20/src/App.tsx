import { useEffect, useState } from 'react'
import './App.css'
import {fetchData} from "./hooks/fetchData"

type User={
  id:number;
  name:string;
}

function App() {
  const {storeData,retriveData}=fetchData<User>()
  
  useEffect(()=>{

    storeData("user",{id:1,name:"Nikhil"})
    console.log(retriveData("user"))

  },[])


  return (
    <>
 
    </>
  )
}

export default App
