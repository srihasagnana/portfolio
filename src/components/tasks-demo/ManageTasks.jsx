import React from 'react'
import AddTasks from './AddTasks'
import TasksCount from './TasksCount'
import TasksList from './TasksList';
import { useState } from 'react';

function ManageTasks() {

    let [tasks,setTasks]=useState([])
    
        function handletasks(){
            let numbertasks=Math.random();
            setTasks([...tasks,numbertasks]) 
        }

        console.log(tasks)
  return (
    <div className='text-center'>
            <h1>Manage Tasks</h1>
            <div className='d-flex justify-content-around mt-5'>
                <AddTasks handletasks={handletasks}/>
                <TasksCount tasks={tasks}/>
                <TasksList tasks={tasks}/>
            </div>
        
    </div>
  )
}

export default ManageTasks