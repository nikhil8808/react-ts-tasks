import { useState, useLayoutEffect } from 'react'
import './App.css'
import Page from './components/Page'

function App() {
  const [showBtn, setShowBtn] = useState(false)

  const handleScroll = () => {

    if (window.scrollY > 700) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  useLayoutEffect(() => {

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])


  return (
    <>
      <div>
        <Page page_no={1} />
        <Page page_no={2} />
        <Page page_no={3} />
        <Page page_no={4} />
        <Page page_no={5} />
        <Page page_no={6} />
        {showBtn && (
          <div style={{ position: 'fixed', bottom: '3rem', right: '3rem' }}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Back to Top
            </button>


          </div>

        )}


      </div>
    </>
  )
}

export default App
