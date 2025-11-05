
import useLanguage from './hooks/useLanguage'

import './App.css'

export type LanguageCode='en'|'es'|'fr'|'de'|'zh';

export interface LanguageOption{
  code:LanguageCode;
  label:string;
}

function App() {
  const {data,language,toggleLanguage}=useLanguage()

  const languageOptions:LanguageOption[]=[
    {code:'en',label:'English'},
    {code:'es',label:'Spanish'},
    {code:'fr',label:'French'},
    {code:'de',label:'German'},
    {code:'zh',label:'Chinese'},
  ]


  return (
    <>
    <div className="App">
      {/* navbar */}
      <div>
        <div>
          <h2>{data?.language}</h2>
        </div>
        <select name="" id="" onChange={(e)=>toggleLanguage(e?.target?.value as LanguageCode)} value={language}>
          {languageOptions.map((option)=>(
            <option key={option.code} value={option.code} >{option.label}</option>
          ))}
          
        </select>
      </div>
      <div>
        <h1>{data?.greeting} Nikhil</h1>
        
      </div>


    </div>
   
    </>
  )
}

export default App
