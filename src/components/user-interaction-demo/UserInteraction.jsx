import React from 'react'

function UserInteraction() {
    function handleClick(){
        console.log("interaction achieved")
    }

    function handleAnotherCLick(x){
        console.log("another click event",x)
    }
  return (
    <div className='text-center'>
        <h1>UserInteraction</h1>
        <button className=' btn btn-success p-1' onClick={handleClick}>click</button>
        <button className=' btn btn-warning p-1 m-3' onClick={()=>handleAnotherCLick(120)}>another click</button>
    </div>
  )
}

export default UserInteraction