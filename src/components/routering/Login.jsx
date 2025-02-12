import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { logincontextsobj } from '../../Contexts/LoginContexts';

function Login() {

  const {handleformloginsubmit,currentuser,loginstatus,loginerror}=useContext(logincontextsobj)

  const {register,handleSubmit,formState:{errors}}=useForm()
  const navigate=useNavigate();
  const [loginerr,setLoginerr]=useState(null)

  useEffect(()=>{
    if(loginstatus===true){
      navigate(`/userprofile/${currentuser.username}`)
    }
  },[loginstatus,currentuser])

  return (
    <div className='container'>
      <h1 className='text-center mt-4'>User Login</h1>

      {
        loginerr!==null&&<p className="text-danger text-center">{loginerr.message}</p>
      }

      <form className='mx-auto w-50' onSubmit={handleSubmit(handleformloginsubmit)}>
          <div>
            <label className='mt-3' htmlFor='username'>Username</label>
            <input type='text' id='username' {...register('username')} className='form-control mt-2'></input>
          </div>

          <div>
            <label className='mt-3' htmlFor='password'>Password</label>
            <input type='password' id='password' {...register('password')} className='form-control mt-2'></input>
          </div>

          <div className='text-center mt-4'>
            <button className='btn btn-secondary'>Login</button>
          </div>
      </form>
    </div>
  )
}

export default Login