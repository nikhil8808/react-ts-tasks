import React from 'react'
import Input from '../input/Input'


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
    handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void
    inputs:input[]

}

const Form = ({handleSubmit,inputs}:formProps) => {

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
            
            />

        })}
        <div>
          <button type="submit"> Submit</button>
        </div>
      

    </form>
  )
}

export default Form