import React,{createContext, type ReactNode,useState,useEffect,useLayoutEffect} from 'react'

interface ThemeType{
    theme:string,
    handleToggleTheme:(theme:string)=>void,
     getInitialTheme:()=>void
}
export const ThemeContext=createContext<ThemeType>({
    theme:'light',
    handleToggleTheme:()=>{

    },
        getInitialTheme:()=>{

    }

})
const ThemeContextProvider = ({children}:{children:ReactNode}) => {

    const [theme,setTheme]=useState('light')

    const getInitialTheme=()=>{

        if(localStorage.getItem('theme')!="" && localStorage.getItem('theme')!=undefined)
        {
            const initialTheme=localStorage.getItem('theme')
            handleToggleTheme(initialTheme)
        }

    }

 

    const handleToggleTheme=(newTheme:string)=>{

        if(newTheme!="")
        {
            setTheme(newTheme)
            localStorage.setItem('theme',newTheme)
        }
       

    }


  return (
   <ThemeContext.Provider value={{theme,handleToggleTheme,getInitialTheme}} >
     {children}
   </ThemeContext.Provider>
  )
}

export default ThemeContextProvider