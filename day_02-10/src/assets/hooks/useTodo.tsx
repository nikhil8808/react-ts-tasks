import {useReducer,useEffect} from "react"

interface Todo{
    id:number;
    title:string;
    description:string;
    status:boolean
}
interface AddTodo{
    title:string;
    description:string;
    status:boolean
}
type RemoveTodo={
    id:number
}

type Todos=Todo[] | [];

type Action= {type:"ADD",PayLoad:AddTodo} | {type:"REMOVE",PayLoad:RemoveTodo} | {type:"UPDATE",PayLoad:Todo}


const todoReducer=(state:Todos,action:Action):Todos=>{

   switch(action?.type)
   {
     case "ADD":
        let id:number=Math.floor(Math.random()*1000+1000)
        let newTodo:Todo={
            id:id,
            ...action.PayLoad
        }
        console.log(newTodo,id)
        const newState=[...state,newTodo]
         return newState
      case "REMOVE":
         const updatedTodos= state?.filter((todo:Todo)=>{
            return todo.id!=action?.PayLoad?.id
         })

        return updatedTodos
      case "UPDATE":
        const alteredTodos= state?.map((todo:Todo)=>{
               if(todo?.id===action.PayLoad.id)
               {
                return action.PayLoad
               }
               return todo
        })
  
        return alteredTodos
        default :
        return state
   }

 

   
}
const initialState:Todos=[]

export const useTodo=()=>{

    const getInitialState=():Todos=>{
       
        if(localStorage.getItem("todos"))
        {
            let todoStr=localStorage.getItem("todos")
            if(todoStr!=null || todoStr!=undefined )
                 return JSON.parse(todoStr)
        }


        return []

    }

    const [state,dispatch]=useReducer(todoReducer,getInitialState())

    const addTodo=(newTodo:AddTodo)=>{

         dispatch({type:"ADD",PayLoad:newTodo})

    }
    const removeTodo=(todoId:RemoveTodo)=>{

         dispatch({type:"REMOVE",PayLoad:todoId})

    }
      const updateTodo=(updatedTodo:Todo)=>{

         dispatch({type:"UPDATE",PayLoad:updatedTodo})

    }

    

    return {state,addTodo,removeTodo,updateTodo}
}