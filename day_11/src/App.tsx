import { useState,useRef,useMemo ,useEffect} from 'react'

import './App.css'

function App() {

 const [num,setNum]=useState<number>(1)
 const [count,setCount]=useState<number>(0)


  const calculateFactorial=useMemo(()=>{
   
     let i=1;
     let fact=1;
     while(i<=num)
     {
      fact=fact*i
      i++
       
     }
     return fact
    
   
  },[num])

//     const calculateFactorial=()=>{
//      console.log("called")
//      let i=1;
//      let fact=1;
//      while(i<=num)
//      {
//       fact=fact*i
//       i++
       
//      }
//      return fact
    
   
//   }
//   useEffect(()=>{
// calculateFactorial()
//   },[num])


  return (
    <>
     <div>
       <div>
         <input type="text" placeholder='Enter Number' onChange={(e)=>setNum(parseInt(e?.target?.value))} />
         <h1 >{calculateFactorial}</h1>
       </div>
       <h1>{count}</h1>
       <button onClick={()=>setCount((prev)=>prev+1)}>Click Here</button>
     </div>
    </>
  )
}

export default App
