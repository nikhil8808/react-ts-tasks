import { useState, useTransition } from 'react'
import './App.css'
import TodoReducer from './reducers/TodoReducer';

interface Todo {
  id: number;
  name: string;
  description: string;
  status: string
}
function App() {
  const [mode, setMode] = useState('create')
  const { state, dispatch } = TodoReducer()
  const [isPending, startTransition] = useTransition();
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    name: '',
    description: '',
    status: ''
  })


  const addTodo = () => {
    const id = new Date().getTime()

    startTransition(() => dispatch({
      type: "ADD",
      payload: { ...todo, id: id }
    }))
    setTodo({
      id: 0,
      name: '',
      description: '',
      status: ''
    })


  }

  const handleEditTodo = () => {

    startTransition(() => dispatch({
      type: "UPDATE",
      payload: todo
    }))
    setTodo({
      id: 0,
      name: '',
      description: '',
      status: ''
    })
    setMode("create")

  }

  const removeTodo = (todo: Todo) => {
    startTransition(() => dispatch({
      type: "REMOVE",
      payload: todo
    }))

  }



  return (
    <>
      <div>
        <div>
          <h5>Todo List</h5>
        </div>
        <div>
          <input type="text"
            value={todo?.name}
            onChange={(e) => setTodo((prev) => ({ ...prev, name: e?.target?.value }))} />
          <button onClick={mode === "create" ? addTodo : handleEditTodo}>{mode === "create" ? (isPending ? "Creating" : "Add") : (isPending ? "Updating" : "Update")}</button>
        </div>
        <div>
          {
            state?.length > 0 && state?.map((item: Todo) => {
              return <div className='todo-item'>
                <p>{item?.name}</p>
                <div>
                  <button onClick={() => {
                    setTodo(item)
                    setMode('update')

                  }}>Edit</button>
                  <button onClick={() => removeTodo(item)}>Delete</button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
