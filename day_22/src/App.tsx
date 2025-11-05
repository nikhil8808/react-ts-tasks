import { useState,useRef,useImperativeHandle } from 'react'
import './App.css'
import ModalComponent from './components/Modal'


function App() {

const modalRef=useRef(null)





  return (
    <>
    <div>
       <ModalComponent  
        ref={modalRef}
       
       />
       <button onClick={()=>modalRef.current?.openModal()}>Open</button>
 
    </div>
    </>
  )
}

export default App
