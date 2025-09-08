import React,{useState,useContext} from 'react'
import Form from './form_components/form/Form'
import { userContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'


type profileDetails={
  username:string;
  location:string;
  bio:string
}

const ProfilePage = () => {

  const userCtx=useContext(userContext)
if(!userCtx?.state || !userCtx?.dispatch )
{
  throw new Error("User Data Not found")
}
const {state,dispatch}=userCtx

const [accountDetails,setAccountDetails]=useState<profileDetails>({
  username:state?.profile?.username,
  location:state?.profile?.location,
  bio:state?.profile?.bio
})
const [errors,setErrors]=useState<profileDetails>({
  username:"",
  location:"",
  bio:""
})



const navigate=useNavigate()




  const handleChange=(field:string,value:string)=>{
  
      setAccountDetails((prev:profileDetails)=>{
      return {...prev,[field]:value}
      })
      if(value!="")
      {
           setErrors((prev:profileDetails)=>{

        return {...prev,[field]:``}
      })

      }else{
         assignErrors(field,field)
      }
   
     
    

  }

  const assignErrors=(key:string,title:string)=>{
       setErrors((prev:profileDetails)=>{

        return {...prev,[key]:`${title} is required`}
      })

  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    let error_flag=false
    if(accountDetails?.username==="")
    {
      assignErrors('username',"username")
      error_flag=true
    }
      if(accountDetails?.location==="")
    {
      assignErrors('location',"Location")
       error_flag=true
    }
    if(accountDetails?.bio==="")
    {
      assignErrors('bio',"Bio")
       error_flag=true
    }
   
    if(error_flag)
    {
      return
    }

    dispatch({type:"UPDATE_PROFILE_DETAILS",payload:accountDetails})

navigate('/review-confirm')
    
  }

  const AccountDetailsInput={
    handleSubmit:handleSubmit,
    inputs:[
      {
        id: "username",
        name: "username",
        type: "username",
        placeholder: "Enter username",
        label: "username",
        handleChange: handleChange,
        error: errors?.username,
        value: accountDetails?.username
      },
         {
        id: "location",
        name: "location",
        type: "text",
        placeholder: "Enter Location",
        label: "Location",
        handleChange: handleChange,
        error: errors?.location,
        value: accountDetails?.location
      },
         {
        id: "bio",
        name: "bio",
        type: "textarea",
        placeholder: "Enter Bio",
        label: "Bio",
        handleChange: handleChange,
        error: errors?.bio,
        value: accountDetails?.bio
      },
    ]

  }






  return (
    <div className='form-container'>
      <Form
      handleSubmit={handleSubmit} 
      inputs={AccountDetailsInput?.inputs}
      prev="/account-details"


/>

    </div>
  )
}

export default ProfilePage