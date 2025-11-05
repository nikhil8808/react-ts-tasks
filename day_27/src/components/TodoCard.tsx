import React from 'react'
import { Reorder } from 'framer-motion'

interface TodoCardProps{
    title:string;
    description:string;
    id:number
}
const TodoCard = ({todo}:{todo:TodoCardProps}) => {
    const {id,title,description}=todo
  return (
     <Reorder.Item
  
      value={todo}
   

      className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2 border border-gray-200 hover:shadow-lg transition"
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-3">
        <button className="px-3 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
          Done
        </button>
        <button
         
          className="px-3 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </Reorder.Item>
  )
}

export default TodoCard