import React from 'react'

function TasksList(props) {
  return (
    <div>
        <h3>TasksList</h3>
        {
            props.tasks.map((p,index)=><p key={index}>{p}</p>)
        }
    </div>
  )
}

export default TasksList