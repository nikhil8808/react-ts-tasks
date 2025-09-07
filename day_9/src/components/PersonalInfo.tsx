import React, { useState,useContext } from 'react'
import './css/personal_info.css'
import Input from './form_components/input/Input'
import {userContext} from "../context/userContext"
import type {UserContextType} from "../context/userContext"
import {useNavigate} from "react-router-dom"


type personalInfo = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  phone_number: string;
  gender: string;
}


const PersonalInfo = () => {
  const userCtx = useContext(userContext);
if (!userCtx?.state || !userCtx?.dispatch) {
  throw new Error("PersonalInfo must be used within a UserContextProvider");
  return
}
  const {state, dispatch } = userCtx;

  const [personalInfo, setPersonalInfo] = useState<personalInfo>({
    first_name: state?.personalInfo?.first_name,
    last_name: state?.personalInfo?.last_name,
    date_of_birth:state?.personalInfo?.date_of_birth,
    phone_number: state?.personalInfo?.phone_number,
    gender:state?.personalInfo?.gender

  })
  const [errors,setErrors]=useState<personalInfo>({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    gender: ""

  })

const navigate=useNavigate()


  const handleChange=(field:string,value:string)=>{
    if(value!="")
    {
      setPersonalInfo((prev:personalInfo)=>{
      return {...prev,[field]:value}
      })
      setErrors((prev:personalInfo)=>{

        return {...prev,[field]:``}
      })
     
    }

  }

  const assignErrors=(key:string,title:string)=>{
       setErrors((prev:personalInfo)=>{

        return {...prev,[key]:`${title} is required`}
      })

  }


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  let error_flag=false
  console.log(personalInfo,errors)

  if (personalInfo.first_name === "") {
    assignErrors("first_name", "FirstName");
    error_flag=true
    
  }
  if (personalInfo.last_name === "") {
    assignErrors("last_name", "LastName");
     error_flag=true
     
  }
  if (personalInfo.date_of_birth==="") {
    assignErrors("date_of_birth", "Date of Birth");
     error_flag=true
     
  }
  if (personalInfo.phone_number === "") {
    assignErrors("phone_number", "Phone Number");
     error_flag=true
     
  }
  if (personalInfo.gender === "") {
    assignErrors("gender", "Gender");
     error_flag=true
     
  }
  if(error_flag)
  {
    return 
  }

  setErrors({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    gender: ""

})
console.log(personalInfo)

dispatch({type:"UPDATE_PERSONAL_INFO",payload:personalInfo})
navigate('/account-details')



}









  return (
    <div className='personal_info_section'>
      <div className='personal_info_container'>
        <form action="" className='form_container' onSubmit={handleSubmit}>
          <Input
            type="text"
            id="first_name"
            name="first_name"
            placeholder='Enter Firstname'
            label="FirstName"
            handleChange={handleChange}
            error={errors?.first_name}
            value={personalInfo?.first_name}

          />
          <Input
            type="text"
            id="last_name"
            name="last_name"
            placeholder='Enter LastName'
            label="LastName"
             handleChange={handleChange}
                 error={errors?.last_name}
             value={personalInfo?.last_name}

          />
          <Input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            placeholder='Enter Date Of Birth'
            label="Date Of Birth"
             handleChange={handleChange}
                error={errors?.date_of_birth}
             value={personalInfo?.date_of_birth}

          />
          <Input
            type="text"
            id="phone_number"
            name="phone_number"
            placeholder='Enter Phone Number'
            label="Phone Number"
             handleChange={handleChange}
              error={errors?.phone_number}
              value={personalInfo?.phone_number}
          />
          <Input
            type="select"
            id="gender"
            name="gender"
            placeholder='Select Gender'
            label="Gender"
            options={[
              "male",
              "female"

            ]}
             handleChange={handleChange}
             error={errors?.gender}
                value={personalInfo?.gender}
          />
        
          <div>
             <button>Submit</button>
          </div>



        </form>


      </div>

    </div>
  )
}

export default PersonalInfo