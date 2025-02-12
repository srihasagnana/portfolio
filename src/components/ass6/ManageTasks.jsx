import React, { useState } from 'react'
import AddTasks from './AddTasks'
import UserList from './UserList'
import RemoneTasks from './RemoneTasks'
import UserCount from './UserCount'

function ManageTasks() {
    const [adduser,setAdduser]=useState([])

  return (
    <div>
        <div className='d-flex justify-content-around mt-5'>
            <AddTasks adduser={adduser} setAdduser={setAdduser}/>
            <UserList adduser={adduser}/>
            <RemoneTasks adduser={adduser} setAdduser={setAdduser}/>
            <UserCount adduser={adduser}/>
        </div>
    </div>
  )
}

export default ManageTasks