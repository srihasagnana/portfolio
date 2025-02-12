import React from 'react'

function TasksCount(props) {
  return (
    <div>
        <h3>TasksCount</h3>
        <p>{props.tasks.length}</p>
    </div>
  )
}

export default TasksCount