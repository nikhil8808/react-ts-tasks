import { useState } from 'react'
import './App.css'
import useFetchData from './hooks/useFetchData'

type Todo={
  userId:number;
  title:string;

}

function App() {
  const [count, setCount] = useState(0)
  const {isLoading,data,error}=useFetchData<Todo>({url:"https://jsonplaceholder.typicode.com/todos"})

  console.log(isLoading,data,error)

  return (
    <>
      <h5>
        Data
      </h5>
    </>
  )
}

export default App
