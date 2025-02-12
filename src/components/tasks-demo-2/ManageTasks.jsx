import React from 'react'
import AddTasks from './AddTasks'
import TasksCount from './TasksCount'
import TasksList from './TasksList';
import { useState } from 'react';

function ManageTasks() {
    const [tasks,setTasks]=useState([])
  return (
    <div className='text-center'>
        <h1>ManageTasks</h1>
        <div className='d-flex justify-content-around mt-4'>
            <AddTasks tasks={tasks} setTasks={setTasks}/>
            <TasksList tasks={tasks}/>
            <TasksCount tasks={tasks}/>
        </div>
    </div>
  )
}

export default ManageTasks