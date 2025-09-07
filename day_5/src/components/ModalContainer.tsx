import React,{useState,useEffect,useRef} from 'react'

interface ModalContainerProps {
    setCount:React.Dispatch<React.SetStateAction<number>>;
}

const ModalContainer = ({setCount}:ModalContainerProps) => {
      const [showModal, setShowModal] = useState(false)
const modalRef = useRef<HTMLDivElement | null>(null);
  
  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

// useEffect(() => {
//   console.log(modalOutsideRef)
// }, [modalOutsideRef])
const handleClickOutside = (e:MouseEvent) => {
  if(modalRef.current && e.target === modalRef.current){
    console.log('clicked outside')
    setShowModal(false)
  }
}

useEffect(() => {

  if (modalRef.current) {
       modalRef.current.addEventListener('click',handleClickOutside);
       //want to count how many times event listener is added
       setCount((prevCount:number):number => prevCount + 1);
  }

  return () => {
    if (modalRef.current) {
      modalRef.current.removeEventListener('click',handleClickOutside);
       setCount((prevCount:number):number => prevCount -1);
    }
  }


},[])
  return (
     <div className='modal-container' ref={modalRef}>
        <button  onClick={handleToggleModal}>Toggle Modal</button>
        {showModal && <div className='modal'>This is a Modal</div>}
      </div>
  )
}

export default ModalContainer