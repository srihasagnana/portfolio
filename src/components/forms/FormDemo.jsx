import { useForm } from "react-hook-form";

function FormDemo() {
    const{register,handleSubmit,formState:{errors }}=useForm();

    function handleformsubmit(obj){
            console.log(obj)
    }
  return (
    <div className='text-center'>
        <h1>FormDemo</h1>
        <form className=' mx-auto w-50' onSubmit={handleSubmit(handleformsubmit)}>
            {/* username */}
            <div className='mt-5'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' {...register('username',{required:true,minLength:4})} className='form-control'></input>
                {
                    errors.username?.type==='required' && <p className="text-danger">username is required</p>
                }
                {
                    errors.username?.type==='minLength' && <p className="text-warning">minimum length is 4</p>
                }
            </div>
            {/* email */}
            <div className='mt-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' {...register('email')} className='form-control'></input>
            </div>

            {/* skills */}
            <div className="mt-3">
                <label htmlFor="skills">Select Your Skills</label>
                <div>
                    <input type="CHECKBOX" {...register('çss')} id='css' className="form-check-input"></input>
                    <label htmlFor="css" className="form-check-label">css</label>
                </div>

                <div>
                    <input type="checkbox" {...register('html')} className="form-check-input"></input>
                    <label htmlFor="html" className="form-check-label">html</label>
                </div>

                <div>
                    <input type="checkbox" className="form-check-input" {...register('react')}></input>
                    <label htmlFor="react" className="from-check-label">react</label>
                </div>
            </div>

            {/* select state */}
            <div className="mt-3">
                <label htmlFor="state">Select State</label>
                <select {...register('state')} className="form-control" id='state'>
                    <option value="telangana">Telangana</option>
                    <option value="ap">AP</option>
                    <option value="kerala">Kerala</option>
                </select>
            </div>
            
            
            {/* submit */}
            <button className='btn btn-warning mt-4'>submit</button>
        </form>
    </div>
  )
}

export default FormDemo