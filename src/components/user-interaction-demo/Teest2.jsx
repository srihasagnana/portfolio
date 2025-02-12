import React, { useState } from 'react'

function Teest2(props) {
    let [username,setUsername]=useState('srihasa')

    function handleusername(){
        setUsername('gnana srihasa')
    }

  return (
    <div className='bg-secondary mt-3 p-3'>
        <h3>Child</h3>
        <p>counter received is {props.counter}</p>
        <button className='btn btn-success' onClick={props.handleincreament}>change</button>

        <p className='display-4'>username is {username}</p>
        <button className='btn btn-dark' onClick={handleusername}>user change</button>
    </div>
  )
}

export default Teest2