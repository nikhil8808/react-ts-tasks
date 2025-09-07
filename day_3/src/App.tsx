import { useState,useEffect, use, } from 'react'
import './App.css'

function App() {
 const [seconds, setSeconds] = useState(0);
 const [minutes, setMinutes] = useState(0);
 const [hours, setHours] = useState(0);
 const [isActive, setIsActive] = useState(false);
 const [timeLogs, setTimeLogs] = useState<{
  hours: number;
  minutes: number;
  seconds: number;
 }[]>([]);

 const handleTimer=()=>{
  setSeconds((prevSeconds) => {
    if (prevSeconds === 59) {
      setMinutes((prevMinutes) => {
        if (prevMinutes === 59) {
          setHours((prevHours) => prevHours + 1);
          return 0;
        }
        return prevMinutes + 1;
      });
      return 0;
    }
    return prevSeconds + 1;
  });

 }

 const resetTimer=()=>{
  setSeconds(0);
  setMinutes(0);
  setHours(0);
  setIsActive(false);
  setTimeLogs((prevLogs) => [
    ...prevLogs,
    { hours, minutes, seconds },
  ]);

 }

useEffect(() => {
  let interval=0;
 
  if (isActive) {
    interval = setInterval(() => {
      handleTimer();
    }, 1000);
    
  }else{
    resetTimer()
   }

  

  return () => {
    if (interval) clearInterval(interval);
  };

}, [isActive]);






  return (
    <>
    <div>
       <h1>Timer</h1>
       <div style={{display:'flex', gap:'10px',alignItems:'center', justifyContent:'center'}}>
         <h1>{String(hours).padStart(2, '0')}</h1>
          <h1>:</h1>
          <h1>{String(minutes).padStart(2, '0')}</h1>
          <h1>:</h1>
          <h1>{String(seconds).padStart(2, '0')}</h1>
       </div>
       <div style={{display:'flex', gap:'10px',alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
         <button onClick={()=>setIsActive(true)}>Start</button>
           <button onClick={()=>setIsActive(false)}>Stop</button>
       </div>
       <div>
        <h2>Time Logs:</h2>
        {timeLogs.length === 0 ? (
          <p>No time logs available.</p>
        ) : (
          <ul>
            {timeLogs.map((log, index) => (
              <li key={index}>
                {String(log.hours).padStart(2, '0')}:
                {String(log.minutes).padStart(2, '0')}:
                {String(log.seconds).padStart(2, '0')}
              </li>
            ))}
          </ul>
        )}
       </div>
     
    </div>
    </>
  )
}

export default App
