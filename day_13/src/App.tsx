import { useState,useEffect,useRef } from 'react'

import './App.css'
type lap={
  hours:number;
  minutes:number;
  seconds:number;
}

function App() {
  const [hours,setHours]=useState(0)
  const [minutes,setMinutes]=useState(0)
  const [seconds,setSeconds]=useState(0)
  const [laps,setLaps]=useState<lap[]>([])


  const handleLapStore=()=>{
    setLaps((prev:lap[])=>{
      return [...prev,{hours,minutes,seconds}]
    })
  }



useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(prev => {
      if (prev >= 59) {
        setMinutes(m => {
          if (m >= 59) {
            setHours(h => (h >= 23 ? 0 : h + 1))
            return 0
          }
          return m + 1
        })
        return 0
      }
      return prev + 1
    })
  }, 1000)

  return () => clearInterval(interval)
}, [])


console.log(laps)

  return (
    <>
     <div>
      <h5>{hours.toString().padStart(2,'0')}</h5>:
      <h5>{minutes.toString().padStart(2,'0')}</h5>:
      <h5>{seconds.toString().padStart(2,'0')}</h5>
      <button onClick={handleLapStore}>Record Time</button>

   
     </div>
    </>
  )
}

export default App
