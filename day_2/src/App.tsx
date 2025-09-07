import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const inputRef=useRef<HTMLInputElement>(null);
  const [count,setCount]=useState(0);

  const handleChange=()=>{
    if(inputRef.current){
      setCount(inputRef.current.value.length);
    }
  }


  return (
    <>
     <div>
      <h4>You typed {count} letters </h4>
      <input
       ref={inputRef}
       type="text" 
       onChange={handleChange}
       />

     </div>
    </>
  )
}

export default App
