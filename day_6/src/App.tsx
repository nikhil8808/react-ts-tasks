import { useState, useContext } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import { ThemeContext } from "./context/userContext"
import type { ThemeContextType } from './types/context_types'




function App() {

  const { theme, handleToggleTheme } = useContext<ThemeContextType>(ThemeContext)



  return (
    <>
      <div className={`App ${theme}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3rem' }}>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
          </div>
          <div>
            <button onClick={handleToggleTheme}>Change Theme</button>
          </div>


        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />


        </Routes>

      </div>


    </>
  )
}

export default App
