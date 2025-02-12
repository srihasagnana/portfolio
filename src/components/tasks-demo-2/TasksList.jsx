import React from 'react'

function TasksList(props) {
  return (
    <div>
        <h4>TasksList</h4>
        {
            props.tasks.map((task,index) => <p key={index}>{task}</p>)
        }
    </div>
  )
}

export default TasksList