import { useState, useTransition } from 'react'
import './App.css'
import useProducts from './hooks/useProducts'

function App() {
 const [input,setInput]=useState('')
  const {data,isLoading}=useProducts(input)
const [isPending, startTransition] = useTransition();


  return (
    <>
    <div>
      <div>
       <input type="text"  
       value={input}
       onChange={(e)=>startTransition(()=>setInput(e?.target?.value))}/>
      </div>
      <div>
        {isLoading && <div>
          <h5>Loading....</h5>
          </div>}
    {!isLoading && data?.map?.((product:any)=>{
      return <div>
         <span key={product.id}>{product.title}</span>
      </div>

    })} 
      </div>


    </div>
   
    </>
  )
}

export default App
