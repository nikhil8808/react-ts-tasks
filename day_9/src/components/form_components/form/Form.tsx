import React from 'react'
import Input from '../input/Input'
import { useNavigate,Link } from 'react-router-dom';


type input={
    id:string;
    name:string;
    value:string;
    handleChange:(field:string,value:string)=>void;
    title?:string;
    label:string;
    error:string;
    type:string;
    placeholder:string;


}
interface formProps{
    handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void;
    inputs:input[];
    prev:string;

}

const Form = ({handleSubmit,inputs,prev}:formProps) => {
  console.log(prev)

  const navigate=useNavigate()

  return (
    <form action="" onSubmit={handleSubmit}>
        {inputs?.length>0 && inputs?.map((input:input,index)=>{
            return <Input 
               key={index} 
               id={input?.id}
               name={input?.name}
               value={input?.value}
               title={input?.title}
               label={input?.label}
               error={input?.error}
               type={input?.type}
               handleChange={input?.handleChange}
               placeholder={input?.placeholder}
               disabled={false}
            
            />

        })}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Link to={prev}>Go Back</Link>
          <button type="submit"> Submit</button>
        </div>
      

    </form>
  )
}

export default Form