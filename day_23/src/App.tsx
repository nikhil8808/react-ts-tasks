import { useState,useRef } from 'react'
import './App.css'
import VideoComponent from './components/VideoComponent'
export interface VideoHandle {
  playVideo: () => void;
  pauseVideo: () => void;
}

function App() {

  const videoControlsRef=useRef<VideoHandle | null>(null)
  const [loop,setLoop]=useState(false)


  return (
    <>
   <div>
      <VideoComponent 
      ref={videoControlsRef}
     url={"https://www.youtube.com/watch?v=oIO1zjPyL9E"}
     loop={loop}
     autoPlay={true}
     controls

      />
      <div>
         <div style={{display:'flex',flexDirection:'column'}}>
          <label htmlFor="">Loop </label>
           <input type="checkbox"/>
         </div>
          <>
         <button onClick={()=>videoControlsRef?.current?.playVideo()}>Play</button>
         <button onClick={()=>videoControlsRef?.current?.pauseVideo()}>Pause</button>
         </>
       
      </div>
     
   </div>
    </>
  )
}

export default App
