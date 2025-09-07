import React,{useRef} from 'react'
import type { Todo } from '../types/todo_types'
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

interface TodoItemProps{
  todo:Todo;
  handleUpdateTodoSTatus:(todo:Todo)=>void;
  handleRemoveTodo:(todo:Todo)=>void
  fillTodoData:(todo:Todo)=>void
}

const TodoItem = ({todo,handleUpdateTodoSTatus,handleRemoveTodo,fillTodoData}:TodoItemProps) => {

  const inputRef=useRef(null)
  
  const handleChange=()=>{

   const status:string=inputRef.current.checked?"completed":"pending"
  todo={...todo,status:status}

   handleUpdateTodoSTatus(todo)

  }



  return (
    <div className='todo-item-container'>
      <div className='todo-item-content'>
         <p>{todo?.title}</p>
      </div>
      <div className='todo-item-edit' >
        
         <FaPen  className='input-checkbox' onClick={()=>fillTodoData(todo)}/>
        <input ref={inputRef} type="checkbox" className='input-checkbox' onChange={handleChange}  />
        <MdDelete className='delete-icon' onClick={()=>handleRemoveTodo(todo)} />
      </div>
    </div>
  )
}

export default TodoItem