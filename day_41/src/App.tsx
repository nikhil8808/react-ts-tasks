import { useState,useOptimistic } from 'react'
import './App.css'

function App() {
  const [cart,setCart]=useState<String []>([])
  const [item,setItem]=useState('')
const [optimisticState, addOptimisticUpdate] = useOptimistic(cart, (state, newItem:string) => {
  return [...state, newItem]
})

const handleAddToCart = async () => {
    if (!item.trim()) return
    addOptimisticUpdate(item)

    try {
      // Fake server call
      await new Promise((resolve,reject) => setTimeout(reject, 1000))
      setCart((prev) => [...prev, item])
    } catch (err) {
      console.error("Failed to add item:", err)
      // You could handle rollback here
    } finally {
      setItem("")
    }
  }

  return (
    <>
   <div>
    <div>
       <input type="text" 
       name="" 
       id="" 
       value={item}
       onChange={(e)=>setItem(e?.target?.value)} />
       <button onClick={handleAddToCart}>Submit</button>
    </div>
    <div>
      {optimisticState?.length>0 && optimisticState?.map((value : String )=>{
          return <div>
            {value}
          </div>
      })}
    </div>

   </div>
    </>
  )
}

export default App
