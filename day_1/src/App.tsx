import React, { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <div className="App">
        <h1>Counter</h1>
        <p>{count}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>

      </div>
    </>
  )
}

export default App
