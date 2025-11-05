import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from '../context/ThemeContextProvider'

const useTheme = () => {
  const {theme,handleToggleTheme,getInitialTheme}=useContext(ThemeContext)
    



  return {
    theme,
    handleToggleTheme,
    getInitialTheme
  }
}

export default useTheme