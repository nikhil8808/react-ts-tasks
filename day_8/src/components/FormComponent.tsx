import React, { useReducer } from 'react'


interface fromType {
  name: string,
  email: string,
  password: string,
  isValid:boolean


}
interface actionType {
  type: string,
  payload: any
}

const FormComponent = () => {

  const initialState = {
    name: "",
    email: "",
    password: "",
    isValid:false
  }

  const formReducer = (state: fromType, action: actionType) => {


    console.log(action)
    switch (action.type) {
      case "HANDLE_CHANGE":
        return { ...state, ...action.payload }

      case "VALIDATE":
        const isFormValid =
          state.name.trim().length > 0 &&
          state.email.includes("@") &&
          state.password.length >= 6;
        return { ...state, isValid: isFormValid };
      default:
        return state;






    }


  }

  const [state, dispatch] = useReducer(formReducer, initialState)




  return (
    <div>
      <form>
        <p>Form Valid:{state?.isValid?"YES":"NO"}</p>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e) => {
            dispatch({
              type: 'HANDLE_CHANGE', payload: {
                name: e?.target?.value
              }
            })
            dispatch({type:"VALIDATE",payload:{}})
          }} />
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input type="email" id="email"
            onChange={(e) => {
              dispatch({
                type: 'HANDLE_CHANGE', payload: {
                  email: e?.target?.value
                }
              })
              dispatch({type:"VALIDATE",payload:{}})
            }}

          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"
            onChange={(e) => {
              dispatch({
                type: 'HANDLE_CHANGE', payload: {
                  password: e?.target?.value
                }
              })
              dispatch({type:"VALIDATE",payload:{}})
            }}

          />
        </div>


      </form>
    </div>
  )
}

export default FormComponent