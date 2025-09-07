import React from 'react'
import { useReducer,useState,useRef } from 'react'
import type{ Todo } from '../types/todo_types'
import TodoItem from './TodoItem'

type Action={
  type:string,
  payload:Todo
}

const TodoList = () => {
   
  const titleRef=useRef(null)
  const descriptionRef=useRef(null)
  const [editTodo,setEditTodo]=useState<Todo>()
  


  const todoReducer=(state:Todo[],action:Action)=>{
     switch(action.type)
     { 
       case "Add":
         return [...state,action.payload]

      case "update":
        return state.map((todo:Todo)=>{
             if(todo?.id===action.payload.id)
             {
              return action.payload
              
            }
            return todo
        })
      case "remove":
        return state.filter((todo)=>todo.id!=action.payload.id)
        

     }

     return state

  }

  const [todoList, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo=(e:React.FormEvent)=>{
    e.preventDefault()
    const payLoad:Todo={
      id:Date.now(),
      title:titleRef.current?.value || "",
      description:descriptionRef.current?.value || "",
      status :"pending"
    }
    dispatch({type:"Add",payload:payLoad})
    if (titleRef.current) titleRef.current.value = "";
    if (descriptionRef.current) descriptionRef.current.value = "";
 }

 const handleUpdateTodoSTatus=(updatedTodo:Todo)=>{
   
 dispatch({type:"update",payload:updatedTodo})
 }

  const handleRemoveTodo=(todo:Todo)=>{
   
 dispatch({type:"remove",payload:todo})
 }

 const handleUpdateTodo=(e:React.FormEvent)=>{

    e.preventDefault()
    const payLoad:Todo={
      id:editTodo?.id,
      title:titleRef.current?.value || "",
      description:descriptionRef.current?.value || "",
      status :editTodo?.status
    }
    dispatch({type:"update",payload:payLoad})

    if (titleRef.current) titleRef.current.value = "";
    if (descriptionRef.current) descriptionRef.current.value = "";

 }

 const fillTodoData=(todo:Todo)=>{
  setEditTodo(todo)
  titleRef.current.value=todo?.title
  descriptionRef.current.value=todo.description

 }





  return (
    <div className='container'>
      <form action="" onSubmit={editTodo?handleUpdateTodo:handleAddTodo} className='todo-form'>
        <div className='input-container'>
          <h5 className='input-label'>Title</h5>
          <input ref={titleRef} id="title" placeholder="Title" />
        </div>
        <div className='input-container'>
          <h5 className='input-label'>Description</h5>
          <input ref={descriptionRef} id="description" placeholder="description" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div className='todo-list-container'>
         {todoList?.length>0 && todoList?.map((todo:Todo)=>{
          return < TodoItem 
          key={todo?.id}
          todo={todo}
          handleUpdateTodoSTatus={handleUpdateTodoSTatus}
          handleRemoveTodo={handleRemoveTodo}
          fillTodoData={fillTodoData}
          
          />
         })}

      </div>

    </div>
  )
}

export default TodoList