import React, { useState } from 'react';


function AddTasks(props) {
    
  return (
    <div>
        <h3>AddTasks</h3>
        <button className='btn btn-warning' onClick={props.handletasks}>add task</button>
    </div>
  )
}

export default AddTasks