import { useState } from "react"
import { useForm } from "react-hook-form"

function AddTasks(props) {
    const {register,handleSubmit,reset}=useForm({})

    function handleformsubmit(obj){
        props.setTasks([...props.tasks,obj.newtask])
        reset()
    }
  return (
    <div>
        <h4>AddTasks</h4>
        <form className="mt-4" onSubmit={handleSubmit(handleformsubmit)}>
            <input type='text' className="form-control" placeholder="add text here.." id='add task' {...register('newtask')}></input>
            <button className="btn btn-warning mt-3">submit</button>
        </form>

        
    </div>
  )
}

export default AddTasks