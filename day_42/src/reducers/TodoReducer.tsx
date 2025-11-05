import React,{useReducer} from 'react'
interface Todo{
  id:number;
  name:string;
  description:string;
  status:string
}
interface Action{
    type:string;
    payload:Todo
}

const TodoReducer = () => {

const todo_reducer=(state:Todo[],action:Action)=>{
     
     switch(action.type)
     {
        case 'ADD':
               return [...state,action.payload]
        case 'REMOVE':
             const newTodos=state?.filter((todo:Todo)=>action.payload.id!=todo.id)
             return newTodos
        case 'UPDATE':
              return state?.map((todo:Todo)=>{
                  if(todo.id===action.payload.id)
                  {
                    return action.payload
                  }
                  return todo
              })
              
        default:
             return state
     }

    }
const todos:Todo[]=[]
const [state, dispatch] = useReducer(todo_reducer, todos)


  return {
    state,dispatch
  }
}

export default TodoReducer