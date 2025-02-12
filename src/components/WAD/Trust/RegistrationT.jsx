
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function RegistrationT() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const navigate=useNavigate()

  function handleformsubmit(obj){
    console.log(obj)
    fetch("http://localhost:4000/users",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(obj)
  })
    .then(res=>{
      if(res.status===201){
          navigate("/login")
      }
      }
    )
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <h1 className='mt-3 text-center'>User Registeration</h1>
      {/* form */}
      <form className='mx-auto w-50' onSubmit={handleSubmit(handleformsubmit)}>
        <div className='mt-4'>
          <label htmlFor='username' className='mb-2' >Username</label>
          <input type='text' id='username' {...register("username")} className='form-control' ></input>
        </div>

        <div className='mt-4'>
          <label htmlFor='password' className='mb-2' >Password</label>
          <input type='password' id='password' {...register("password")} className='form-control' ></input>
        </div>

        <div className='mt-4'>
          <label htmlFor='email' className='mb-2' >Email</label>
          <input type='email' id='email' {...register("email")} className='form-control' ></input>
        </div>

        <div className='mt-4'>
          <label htmlFor='dob' className='mb-2' >Date Of Birth</label>
          <input type='date' id='dob' {...register("dateofbirth")} className='form-control' ></input>
        </div>

        <div className='text-center'>
          <button className='btn btn-success mt-4'>Register</button>
        </div>
        
      </form>
    </div>
  )
}

export default RegistrationT