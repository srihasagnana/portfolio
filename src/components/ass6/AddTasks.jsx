import { useState } from "react"
import { useForm } from "react-hook-form"

function AddTasks(props) {
  const {register,handleSubmit,reset}=useForm()
  const [msg,setMsg]=useState("")

  
  function handleformsubmit(obj){
const duplicate=props.adduser.some((i)=>
    i.name===obj.name || i.email===obj.email)


    if(duplicate){
      setMsg("duplicate")
    }else{
      props.setAdduser([...props.adduser,obj])
      reset()
      setMsg("added successfully")
    }


  }


  return (
    <div>
      <h1 className="text-center">Add User</h1>
      <form className="mx-auto mt-5" onSubmit={handleSubmit(handleformsubmit)}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} className="form-control"></input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} className="form-control"></input>
        </div>

<div className="text-center">
  <button className="btn btn-primary mt-4">Add</button>
</div>
        
        
      </form>
      {
        msg && <p className="mt-5 text-center">{msg}</p>
      }
    </div>
  )
}

export default AddTasks