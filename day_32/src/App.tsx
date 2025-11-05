import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [data,setData]=useState(null)

  const handleFetchData=async ()=>{
    try{
    const response=await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
    const result=await response.json()
    setData(result)

    }catch(e)
    {
      console.log(e)
    }
  }

  useEffect(()=>{

    const Interval=setInterval(()=>{

      handleFetchData()

    },5000)

    handleFetchData()

    return ()=>clearInterval(Interval)
 },[])
 

  return (
    <>
    <div>
      <h5>Price:</h5>
      <h5>{data?.price}</h5>
    </div>
    
    </>
  )
}

export default App
