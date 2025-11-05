import React,{createContext, type ReactNode} from 'react'
import { type LanguageCode } from '../App'


interface LanguageContextType{
  language:LanguageCode;
  toggleLanguage:(lang:LanguageCode)=>void;
}
export const LanguageContext=createContext<LanguageContextType>({
    language:'en',
    toggleLanguage:(lang:LanguageCode)=>{}
})

const LanguageContextProvider = ({children}:{children:ReactNode}) => {
    const [language,setLanguage]=React.useState<LanguageCode>('en')

    const toggleLanguage=(lang:LanguageCode)=>{
      setLanguage(lang)
    }

  return (
    <LanguageContext.Provider value={{language,toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider