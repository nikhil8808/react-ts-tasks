import { useState } from 'react'
import './App.css'
import AccordianContainer from "./components/accordian/AccordianContainer"

type accordianItem={
  question:string;
  answer:string;
}

function App() {

  const faqData:accordianItem[] = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "How does useState work?",
    answer: "useState is a React hook that allows you to add state to a functional component."
  },
  {
    question: "What is an accordion?",
    answer: "An accordion is a UI component where sections expand or collapse to show or hide content."
  },
  {
    question: "Can multiple items be open at once?",
    answer: "Yes, depending on implementation. Some accordions allow only one open, while FAQs often allow multiple."
  }
];



  return (
    <>
    <div className='App'>
      <AccordianContainer 
      faqData={faqData}
      
      
      />

    </div>
    </>
  )
}

export default App
