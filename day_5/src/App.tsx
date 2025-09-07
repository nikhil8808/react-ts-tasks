import { useState,useEffect,useRef, use } from 'react'

import './App.css'
import ModalContainer from './components/ModalContainer.tsx'

function App() {

  const [count, setCount] = useState(0)
 

 

  return (
    <>
    <div className='App'>
     <h1>{count}</h1>
      <ModalContainer setCount={setCount} />
   

    </div>
    </>
  )
}

export default App
