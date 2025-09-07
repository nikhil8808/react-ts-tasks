import { useState,useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TbRuler2 } from 'react-icons/tb'
import { FaCheckCircle } from "react-icons/fa";


function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')
  const [count, setCount] = useState(0)
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const [typing, setTyping] = useState(false);
  const [save, setSave] = useState(false);

  const handleChange=()=>{
       setTyping(true)
       setSave(false)
       if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

   
 debounceTimeout.current=  setTimeout(()=>{
        setInputValue(inputRef?.current?.value || '')
        setTyping(false)
        setSave(true)
        console.log('Input value updated:', inputRef?.current?.value)
      },5000)


    
 
}




  return (
    <>
    <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1rem'}}>
      <h1>{inputValue}{typing && ".........."}</h1>{save && <p style={{display:'flex',alignItems:'center',gap:'0.2rem'}}><FaCheckCircle style={{color:'green',fontSize:'1rem'}} /> Saved</p> }
    </div>
     <div>
      <input 
      ref={inputRef} 
      type="text"
      style={{border:'1px solid black', padding:'10px', borderRadius:'5px'}}
      placeholder='Type something'
      onChange={(e) => handleChange(e.target.value)}
      
      />
     </div>
    </>
  )
}

export default App
