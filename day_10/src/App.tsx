import { useState,useEffect } from 'react'

import './App.css'

function App() {

  const [loaderWidth,setLoaderWidth]=useState(0)

 useEffect(()=>{
  document.addEventListener('scroll',(e)=>{
     const scrollTop = window.scrollY; // distance from top
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

   setLoaderWidth(Math.round((scrollTop / (fullHeight - windowHeight)) * 100))
  
  })

 },[])

console.log(loaderWidth)
  return (
    <>
     <div className='App'>
      <div className='loader' style={{width:loaderWidth+'%'}}>

      </div>
       <div className="page">
        <h5>Page 1</h5>
       </div>
          <div className="page">
               <h5>Page 2</h5>
          </div>
             <div className="page">
               <h5>Page 3</h5>
             </div>
                <div className="page">
                   <h5>Page 4</h5>
                </div>
     </div>
    </>
  )
}

export default App
