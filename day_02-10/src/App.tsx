import { useState,useEffect } from 'react'
import './App.css'
import { useTodo } from './assets/hooks/useTodo'

interface FormData {
  id?: number |null;
  title: string;
  description: string;
  status: boolean;
}
interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

function App() {
  const { state: todos, addTodo, removeTodo, updateTodo } = useTodo()
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    status: false

  })

  const handleTodoSubmit = (e:any) => {
    e.preventDefault()

    if (formData?.id!=null) {
      const newTodo: Todo = {
        id: formData?.id,
        title: formData?.title,
        description: formData?.description,
        status: formData?.status
      }
      updateTodo(newTodo)
    }else{
       addTodo(formData)
    }

    setFormData({
    id:null,
    title: "",
    description: "",
    status: false

  })



  }



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
    if(e?.target?.name !=="status")
    {
         setFormData((prev) => ({
  
      ...prev, [e?.target?.name]: e?.target?.value
    }))

    }else{
         setFormData((prev) => ({
  
      ...prev, [e?.target?.name]: e?.target?.checked
    }))
    }
 

  }
      useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  return (
    <>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Title</label>
            <input type="text"
              name="title"
              onChange={handleChange}
              value={formData?.title}

            />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <input type="text" name="description"
              onChange={handleChange}
               value={formData?.description}
            />
          </div>
          <div>
            <label htmlFor="">Status</label>
            <input type="checkbox" name="status"
              onChange={handleChange}
              checked={formData?.status}
              
            />
          </div>
         <div>
          <button onClick={handleTodoSubmit}>
            {formData?.id==null ?"Submit":"Update"}
        </button>
         </div>

        </form>
        <div>
          {todos?.map((todo:Todo)=>{
            return <div 
            key={todo?.id}
            >
              <p>{todo?.title}</p>
              <p>{todo?.description}</p>
              <p>{todo?.status?"Completed":"Pending"}</p>
              <div>
                 <button onClick={()=>{
                  setFormData(todo)
                 }}>Edit</button>
                  <button 
                  onClick={()=>{
                    removeTodo({id:todo?.id})
                  }}
                  >Delete
                  </button>
              </div>
            </div>
          })}
        </div>

      </div>

    </>
  )
}

export default App
