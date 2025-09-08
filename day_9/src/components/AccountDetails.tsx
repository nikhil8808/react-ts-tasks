import React,{useState,useContext} from 'react'
import Form from './form_components/form/Form'
import { userContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'


type accountDetails={
  email:string,
  password:string,
  confirmPassword:string
}

const AccountDetails = () => {

  const userCtx=useContext(userContext)
if(!userCtx?.state || !userCtx?.dispatch )
{
  throw new Error("User Data Not found")
}
const {state,dispatch}=userCtx

console.log(state)

const [accountDetails,setAccountDetails]=useState<accountDetails>({
  email:state?.account?.email,
  password:state?.account?.password,
  confirmPassword:state?.account?.confirmPassword
})
const [errors,setErrors]=useState<accountDetails>({
  email:"",
  password:"",
  confirmPassword:""
})



const navigate=useNavigate()




  const handleChange=(field:string,value:string)=>{
  
      setAccountDetails((prev:accountDetails)=>{
      return {...prev,[field]:value}
      })
      if(value!="")
      {
           setErrors((prev:accountDetails)=>{

        return {...prev,[field]:``}
      })

      }else{
         assignErrors(field,field)
      }
   
     
    

  }

  const assignErrors=(key:string,title:string)=>{
       setErrors((prev:accountDetails)=>{

        return {...prev,[key]:`${title} is required`}
      })

  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    let error_flag=false
    if(accountDetails?.email==="")
    {
      assignErrors('email',"Email")
      error_flag=true
    }
      if(accountDetails?.password==="")
    {
      assignErrors('password',"Password")
       error_flag=true
    }
    if(accountDetails?.confirmPassword==="")
    {
      assignErrors('confirmPassword',"Confirm Password")
       error_flag=true
    }
     if(accountDetails?.confirmPassword!==accountDetails?.password)
    {
      assignErrors('password',"Password Not Matching")
       error_flag=true
    }
    if(error_flag)
    {
      return
    }

    dispatch({type:"UPDATE_ACCOUNT_DETAILS",payload:accountDetails})

navigate('/profile')
    
  }

  const AccountDetailsInput={
    handleSubmit:handleSubmit,
    inputs:[
      {
        id: "email",
        name: "email",
        type: "email",
        placeholder: "Enter Email",
        label: "Email",
        handleChange: handleChange,
        error: errors?.email,
        value: accountDetails?.email
      },
         {
        id: "password",
        name: "password",
        type: "password",
        placeholder: "Enter Password",
        label: "Password",
        handleChange: handleChange,
        error: errors?.password,
        value: accountDetails?.password
      },
         {
        id: "confirmPassword",
        name: "confirmPassword",
        type: "password",
        placeholder: "Enter Password",
        label: "Confirm Password",
        handleChange: handleChange,
        error: errors?.confirmPassword,
        value: accountDetails?.confirmPassword
      },
    ]

  }






  return (
    <div className='form-container'>
      <Form
      handleSubmit={handleSubmit} 
      inputs={AccountDetailsInput?.inputs}
      prev="/"


/>

    </div>
  )
}

export default AccountDetails