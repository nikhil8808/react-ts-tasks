import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LanguageContextProvider from './context/LanguageContextProvider.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageContextProvider>

     <App />
    </LanguageContextProvider>

  </StrictMode>,
)
