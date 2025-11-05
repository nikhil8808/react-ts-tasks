import React,{forwardRef,useImperativeHandle,useRef} from 'react'
import video_url from "../assets/sample-5s.mp4"

interface componentProps{
    url:string;
    loop:boolean;
    autoPlay:boolean;
    controls:boolean;
}
export interface VideoHandle {
  playVideo: () => void;
  pauseVideo: () => void;
}

const VideoComponent =forwardRef<VideoHandle, componentProps>((props,ref) => {
 
    const {url,loop,autoPlay,controls}=props
    const videoRef=useRef<HTMLVideoElement>(null)
    console.log(videoRef)

    useImperativeHandle(ref,()=>(
    {
      playVideo:()=>videoRef?.current?.play(),
      pauseVideo:()=>videoRef?.current?.pause()
     
    }
    ))

  return (
    <div style={{width:'40rem',height:'20rem'}}>


    <video 
    style={{width:'100%',height:'100%',objectFit:'cover'}}
    ref={videoRef}
     src={video_url}
     loop={loop}
     autoPlay={autoPlay}
     controls={controls}

    />
        </div>
  )
})

export default VideoComponent