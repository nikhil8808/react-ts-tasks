import { useState,useDeferredValue,useTransition, useEffect } from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState('')
  const [isPending, startTransition] = useTransition()
  const deferredInput = useDeferredValue(input)
  const [data,setData] = useState<any>(null)

  const handleChange = ()=>{

    // setInput(value)
    startTransition(()=>{
      fetch(`https://jsonplaceholder.typicode.com/todos/` + deferredInput)
      .then(response => response.json())
      .then(json => setData(json))
    })
  }

  useEffect(()=>{
    handleChange()
  
  },[deferredInput])




  return (
    <>
  <div>
    <div>
       <input type="text" onChange={(e)=>setInput(e?.target?.value)} />
       <div>
         <p>{`Current Input: ${input}`}</p> 
         <p>   {` | Deferred Input: ${deferredInput}`}</p>
        {data && !isPending && (<>
        {JSON.stringify(data)}
        </>)}
       </div>

    </div>

  </div>
    </>
  )
}

export default App
