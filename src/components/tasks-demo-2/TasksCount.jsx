import React from 'react'

function TasksCount(props) {
  return (
    <div>
        <h4>TasksCount</h4>
        <p>{props.tasks.length}</p>
    </div>
  )
}

export default TasksCount