import { useState,useLayoutEffect } from 'react'
import './App.css'

function App() {
 const [theme,setTheme]=useState('light')


 const getInitialState=()=>{
    const stored_theme:string | null=localStorage.getItem("theme")
    if(stored_theme)
    {
       setTheme(stored_theme)
    }

 }

 const handleToggleTheme=()=>{

  if(theme!=="")
  {
   
    setTheme((prev:string)=>{
      if(prev==="light")
      {
        localStorage.setItem('theme',"dark")
        return "dark"
      }else{
         localStorage.setItem('theme',"light")
         return "light"
      }

    })
    
  }

}

useLayoutEffect(()=>{
getInitialState()
},[])


  return (
    <>
      <div className={`app ${theme}`} >
        <button onClick={handleToggleTheme}>
           Toggle Theme
        </button>
        <div>
          <h1>Hello</h1>
        </div>

      </div>
    </>
  )
}

export default App
