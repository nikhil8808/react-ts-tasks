import React,{useState,useEffect} from 'react'
import Todo from './Todo'


type todo= {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

const FormComponent = () => {
    const [input,setInput]=useState('')
    const [intervalState,setIntervalState]=useState<any>(null)
    const [todos,setTodos]=useState<todo | todo[] | undefined>(undefined)
    
    const getTodos=async (id:string)=>{
        try{
            const response=await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const result=await response.json()
           setTodos(result)

        }catch(e)
        {
            console.log(e)
        }
    }
   const handleGetTodos=(id:string="")=>{

     if(intervalState) clearTimeout(intervalState)
 
   const time= setTimeout(()=>{
        getTodos(id)
    },1000)
      setIntervalState(time)

   }
 

useEffect(()=>{
handleGetTodos()
},[])


  return (
    <div>
      <div>
        <div>
               <h1>DEBOUNCING</h1>
        </div>
 
          <input type="text"  onChange={(e)=>handleGetTodos(e?.target?.value)}/>
      </div>
        
        {Array.isArray(todos) && todos.length>0 && todos.map((todo:todo,index)=>{
          return <div key={index} style={{border:'1px solid ',padding:'2rem',borderRadius:'1rem',margin:'1rem'}}>
            <div>
              <h5>userId:</h5>
              <p>{todo?.id}</p>
            </div>
              <div>
              <h5>Title:</h5>
              <p>{todo?.title}</p>
            </div>
              <div>
              <h5>completed:</h5>
              <p>{todo?.completed?"Yes":"No"}</p>
            </div>
          </div>
        })}

        {typeof todos ==="object" && todos!=null && !Array.isArray(todos) && <Todo todo={todos} />}

        

    </div>
  )
}

export default FormComponent