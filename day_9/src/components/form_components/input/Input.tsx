import React from 'react'
import './input.css'

interface InputProps{
    id:string;
    name:string;
    label?:string;
    placeholder?:string;
    title?:string;
    type:string;
    options?:string[];
    handleChange:(field:string,value:string)=>void;
    error?:string;
    value:string;
    disabled:boolean

}

const Input = ({
    id,name,label,placeholder,title,type="text",value,
    options=[],
    handleChange,
    error,
    disabled=false
    
}:InputProps) => {

    console.log(value)
    
  return (
      <div className='input-container'>
          <label htmlFor={id}>
            {label}
            </label>
            {type!="select"?       <input
             type={type}
              id={id}
              name={name}
              placeholder={placeholder}
              onChange={(e)=>handleChange(name,e?.target?.value)}
              value={value}
              disabled={disabled}

          />:<select
             id={id}
              name={name}
                 onChange={(e)=>handleChange(name,e?.target?.value)}
                 
          >
            <option value="" disabled selected>Select {name}</option>
            {options?.length>0 && options?.map((option,index)=>{
                return <option 
                   selected={value===option}
                
                key={index} value={option}>
                    {option}
                </option>
            })}
            
            </select>}
            {error && <p className='error_text'>{error}</p>}
   
   
      </div>
  )

}

export default Input