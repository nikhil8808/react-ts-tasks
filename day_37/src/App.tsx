import { useState,useActionState } from 'react'
import './App.css'
interface formData{
  name:string
}
function App() {
async function handleSubmit(prevState:unknown, formData:unknown) {
  try {
    const name = formData.get("name");

    if (!name) {
      throw new Error("Name is required!");
    }

    // Imagine saving to database or calling API here
    return { success: true, message: "Submitted successfully!" };

  } catch (error) {
    return { success: false, message: error.message };
  }
}

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    success: false,
    message: "",
  });


 

  return (
    <>
    <form action={formAction}>
       <div>
         <input type="text" placeholder='Enter Name' />
       </div>
       <button type="submit">
        {isPending ?"Submitting...":"Submit"}
         Submit
        </button>
           {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </form>
    
    </>
  )
}

export default App
