import React from 'react'
type todo= {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
const Todo = ({todo}:{todo:todo}) => {
  return (
    <div style={{border:'1px solid ',padding:'2rem',borderRadius:'1rem',margin:'1rem'}}>
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
  )
}

export default Todo