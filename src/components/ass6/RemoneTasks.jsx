import React, { useState } from 'react'

function RemoneTasks(props) {

    function handleremove(){
        const removeuser=[...props.adduser]
        removeuser.pop()
        props.setAdduser(removeuser)
    }
  return (
    <div className='text-center'>
        <h1>Remove User</h1>
        
        <button className='btn btn-danger mt-5' onClick={handleremove}>Remove</button>
    </div>
  )
}

export default RemoneTasks