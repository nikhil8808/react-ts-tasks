
import './App.css'
import { useState } from 'react'


function App() {
  const [loading,setLoading]=useState(false)

  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setLoading(true)

      let response= new Promise((resolve,reject)=>{
             setTimeout(()=>{

               resolve("data")

              },1000)
      })
      let result=await response
      console.log(result)

 setLoading(false)
  }


  return (
    <form method="post" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" />
      <button type="submit" disabled={loading}>
       {loading?"Submitting...":"Submit"}
      </button>
    </form>
  );
}

export default App
