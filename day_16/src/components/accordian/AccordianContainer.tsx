import React from 'react'
import AccordianItem from './AccordianItem';

type accordianItem={
  question:string;
  answer:string;
}

interface AccordianContainerProps{
    faqData:accordianItem[]
}

const AccordianContainer = ({faqData}:AccordianContainerProps) => {
  return (
    <div className='accordian'>
        <div className='accordian-container'>
            {faqData?.map((question:accordianItem)=>{
                return <AccordianItem  
                 question={question?.question}
                 answer={question?.answer}
                />
            })}

        </div>

    </div>
  )
}

export default AccordianContainer