import React, { useState,useMemo } from "react";

const Child =React.memo(({ themeStyles }: { themeStyles: any })=> {

  return (
    <div style={{width:'100%',height:'100vh',...themeStyles}}>
      <p>Hello World</p>
    </div>
  );
})

export default function App() {
  const [dark, setDark] = useState(false);
  const [count,setCount]=useState(0)


  const themeStyles=useMemo(()=>{
      const theme = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return theme

  },[dark])

  return (
    <>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <button onClick={() => setCount((prev)=>prev+1)}>Toggle Counter</button>
      <h1>{count}</h1>
      <Child themeStyles={themeStyles} />
    </>
  );
}
