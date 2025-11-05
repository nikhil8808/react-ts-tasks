import React,{useState} from 'react'
import {motion,Reorder} from 'framer-motion' 
import TodoCard from './TodoCard'

const TodoContainer = () => {
    const [todos,setTodos]=useState([
  {
    id: 1,
    title: "Learn React",
    description: "Go through hooks and context API basics."
  },
  {
    id: 2,
    title: "Build Todo App",
    description: "Use React, Framer Motion, and Bootstrap/Tailwind."
  },
  {
    id: 3,
    title: "Read about Spring Boot",
    description: "Understand controllers, services, and REST APIs."
  },
  {
    id: 4,
    title: "Practice DSA",
    description: "Solve at least 3 problems on arrays and strings."
  }
]
)
  return (
<Reorder.Group values={todos} onReorder={setTodos}>
  {todos.map((todo) => (
    <TodoCard key={todo.id} todo={todo} />
  ))}
</Reorder.Group>
  )
}

export default TodoContainer