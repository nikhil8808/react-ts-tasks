import React from 'react'
import { useContext,useState } from 'react'
import { userContext } from '../context/userContext'
import Input from './form_components/input/Input'
import './css/review_confirm.css'
import InfoSection from './form_components/info/InfoSection'
import { useNavigate,Link } from 'react-router-dom'



type input = {
  id: string;
  name: string;
  label: string;
  value: string;
  handleChange: () => void;
  disabled: boolean;
  type: string;

}

const ReviewConfirm = () => {

  const userCtx = useContext(userContext)
  if (!userCtx?.state || !userCtx?.dispatch) {
    throw new Error("User Context Not Found")
  }
  const { state,dispatch } = userCtx
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()

  const personalInfoSection = [
    {
      id: "first_name",
      name: "first_name",
      label: "FirstName",
      value: state?.personalInfo?.first_name,
      handleChange: () => { },
      disabled: true,
      type: "text"
    },
    {
      id: "last_name",
      name: "last_name",
      label: "LastName",
      value: state?.personalInfo?.last_name,
      handleChange: () => { },
      disabled: true,
      type: "text"
    },
    {
      id: "last_name",
      name: "last_name",
      label: "LastName",
      value: state?.personalInfo?.last_name,
      handleChange: () => { },
      disabled: true,
      type: "text"
    },
    {
      id: "date_of_birth",
      name: "date_of_birth",
      label: "Date Of Birth",
      value: state?.personalInfo?.date_of_birth,
      handleChange: () => { },
      disabled: true,
      type: "text"
    },
    {
      id: "phone_number",
      name: "phone_number",
      label: "Phone Number",
      value: state?.personalInfo?.phone_number,
      handleChange: () => { },
      disabled: true,
      type: "text"
    },
    {
      id: "gender",
      name: "gender",
      label: "Gender",
      value: state?.personalInfo?.gender,
      handleChange: () => { },
      disabled: true,
      type: "text"
    }
  ]

  const accountInfoSection = [
    {
      id: "email",
      name: "email",
      label: "Email",
      value: state?.account?.email,
      handleChange: () => { },
      disabled: true,
      type: "email"
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      value: state?.account?.password,
      handleChange: () => { },
      disabled: true,
      type: "password"
    },

    {
      id: "confirmPassword",
      name: "confirmPassword",
      label: "Confirm Password",
      value: state?.account?.confirmPassword,
      handleChange: () => { },
      disabled: true,
      type: "password"
    }
  ]

  const profileInfoSection=[
    {
      id: "username",
      name: "username",
      label: "Username",
      value: state?.profile?.username,
      handleChange: () => { },
      disabled: true,
      type: "text"
     },
      {
      id: "location",
      name: "location",
      label: "Location",
      value: state?.profile?.location,
      handleChange: () => { },
      disabled: true,
      type: "text"
     },
       {
      id: "bio",
      name: "bio",
      label: "Bio",
      value: state?.profile?.bio,
      handleChange: () => { },
      disabled: true,
      type: "text"
     }
  ]


  const data = [
    {
      heading: "Personal Infromation",
      section_data: personalInfoSection
    },
    {
      heading: "Account Infromation",
      section_data: accountInfoSection
    },
      {
      heading: "Profile Infromation",
      section_data: profileInfoSection
    },
  ]
 
  const submitData=()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
     dispatch({type:'RESET_FORM',payload:{}})
     alert("Record Created Successfully")
     navigate('/')
    },3000)


  }




  return (
    <div className='review-confirm-container'>
      <div className="main">
        {data?.map((item: any, index) => {
          return <InfoSection
            key={index}
            heading={item?.heading}
            section_data={item?.section_data}
          />
        })}
     <div style={{display:'flex',justifyContent:'space-between',marginTop:'1rem',marginBottom:'1rem'}}>
       <Link  to="/profile">Go Back</Link>
        <button onClick={submitData}>
          {loading?"Processing...":"Submit"}
        </button>
         
      </div>

      </div>
  

    </div>
  )
}

export default ReviewConfirm