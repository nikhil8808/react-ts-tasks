import React,{useState} from 'react'

interface AccordianItemProps{
  question:string;
  answer:string;
}

const AccordianItem = ({question,answer}:AccordianItemProps) => {

  const [show,setShow]=useState(false)


  return (
    <div className='accordian-item'>
        <div className='accordian-item-button' onClick={()=>setShow((prev)=>!prev)}>
           <h5> {question}</h5>
        </div>
        {show && (<div className='accordian-item-description'>
            <p>{answer}</p>
        </div>)}


    </div>
  )
}

export default AccordianItem