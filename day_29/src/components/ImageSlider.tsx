import React,{useEffect,useRef,useState} from 'react'

const ImageSlider = () => {
  const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
];
const imageContainer=useRef(null)
const [count,setCount]=useState(1)

const handleScroll=(coun:number)=>{
  
  if( imageContainer.current!=null)
  {
     setCount(prev => {
  const newCount = prev + 1;
  const slideWidth = imageContainer?.current.firstChild.offsetWidth/4;

  if (newCount >= images.length) {
    imageContainer?.current.scrollTo({ left: 0, behavior: "smooth" });
    return 0;
  }

  imageContainer?.current.scrollTo({
    left: newCount * slideWidth,
    behavior: "smooth",
  });
  return newCount;
});

  }


}

useEffect(()=>{
    let imageInterval=null
    if(imageContainer!=null)
    { 
       imageInterval= setInterval(()=>handleScroll(count),5000)

    }
    if(imageInterval)
       return ()=>clearInterval(imageInterval)

},[])






  return (
<div style={{ overflowX: 'auto', display: 'flex' }} ref={imageContainer}>
  {images?.map((url: string, i: number) => (
    <div 
      key={i}
      style={{ width: '50vw', height: '300px', flexShrink: 0 }}
    >
      <img 
        src={url} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    </div>
  ))}
</div>

  )
}

export default ImageSlider