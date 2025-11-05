import { useEffect, useState,useLayoutEffect } from 'react'
import './App.css'
import useTheme from './hooks/useTheme'

function App() {
 
  const {theme,handleToggleTheme,getInitialTheme}=useTheme()
  const themeList=[
    'light',
    'dark',
    'orange',
    'blue',
    'green',
    'purple'
  ]
  const handleThemeSelect=(e:React.ChangeEvent<HTMLSelectElement>)=>{
  
    const theme=e?.target.value
    if(theme!="")
    {
      handleToggleTheme(theme)

    }

  }

  useEffect(()=>{
 document.body.className=theme
  },[theme])

  useLayoutEffect(()=>{
    getInitialTheme()
  },[])




  return (
    <>
    <div >
    <h5>Current Theme :{theme}</h5>
    <select name="" id="" onChange={handleThemeSelect} value={theme}>
       {themeList?.map((item:string,index)=>{
          return <option key={index} value={item}  >
            {item}
          </option>
       })}
    </select>
   
      

    </div>
    </>
  )
}

export default App
