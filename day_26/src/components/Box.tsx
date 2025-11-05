import React, { useLayoutEffect,useRef,useState } from 'react'

const Box = () => {

const boxWidth=useRef(null)
const [dimensions,setDimensions]=useState<{width:number,height:number}>({
    width:(boxWidth?.current?.getBoundingClientRect())?.width,
    height:(boxWidth?.current?.getBoundingClientRect())?.height
})

useLayoutEffect(() => {
  const handleResize = () => {
    const rect = boxWidth?.current?.getBoundingClientRect();
    console.log(rect);
    setDimensions({width:Math.round(rect.width),height:Math.round(rect?.height)})
  };

  window.addEventListener("resize", handleResize);
  handleResize()

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);



  return (
    <div>
        <div ref={boxWidth} style={{width:'50%',height:'20rem',border:'2px solid',borderRadius:'5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h5>{dimensions?.width} x {dimensions?.height}</h5>
        </div>
    </div>
  )
}

export default Box