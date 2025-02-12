import { useLocation } from "react-router-dom";
import { logincontextsobj } from "../../Contexts/LoginContexts";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

function UserProfile() {
    const {currentuser,setCurrentuser}=useContext(logincontextsobj)
    const [usereditstatus,setUsereditstatus]=useState(false)
    const {register,handleSubmit,setValue}=useForm()

    function handleexit(){
      setUsereditstatus(true)
      setValue('username',currentuser.username)
      setValue('email',currentuser.email)
      setValue('dateofbirth',currentuser.dateofbirth)
    }

    function handlesave(saveobj){
      console.log(saveobj)
      fetch(`http://localhost:4000/users?${currentuser.id}`,{
        headers:{"Content-type":"application.json"},
        method:"PATCH",
        body:JSON.stringify('saveobj')
      })
      .then(res=>console.log(res))
      .then(edituser=>setCurrentuser(edituser))
      .catch(err=>console.log(err))
    }

  return (
    <div className="text-center">
      <h1 className="mt-4">User Profile</h1>

      {
        usereditstatus===false?(<div className="mt-5 w-50 mx-auto bg-secondary">
        <p>{currentuser.username}</p>
        <p>{currentuser.password}</p>
        <p>{currentuser.email}</p>
        <p>{currentuser.dateofbirth}</p>
        <button className="btn btn-primary mb-3" onClick={handleexit}>edit</button>
      </div>):
      (
        <form className="mx-auto w-50 mt-5" onSubmit={handleSubmit(handlesave)}>
          <input type="text" className="form-control mt-3" {...register('username')}></input>
          <input type="email" className="form-control mt-3" {...register('email')}></input>
          <input type="date" className="form-control mt-3" {...register('dateofbirth')}></input>
          <button className="btn btn-primary mt-4">save</button>
        </form>
      )
      }

      
      
    </div>
  )
}

export default UserProfile