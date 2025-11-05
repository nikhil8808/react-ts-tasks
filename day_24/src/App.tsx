import { useState } from 'react'
import useFetchData from './hooks/useFetchData'
import './App.css'
import List from './components/List'

interface Todo{
completed:boolean;
 id:number;
title:string
}
function App() {
  const [count, setCount] = useState(0)
  const {data,isLoading,error}=useFetchData<Todo>("https://jsonplaceholder.typicode.com/todos")



  return (
    <>
    <div>
        <button onClick={()=>setCount((prev)=>prev+1)}>Click Here</button>
      {count}
      {isLoading && <p>Loading....</p>}
      {
        !isLoading &&   <List 

        itemList={data}
      />
      }
   
    
    </div>
   
    </>
  )
}

export default App
