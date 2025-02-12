import React, { useEffect } from 'react';
import { useState } from 'react';

function EffectDemo() {
    let [counter,setCounter]=useState(0)

    useEffect(()=>{
        console.log("use effect executed")
    },[])

    function handlecounter(){
        setCounter(counter+1)
    }
  return (
    <div className='text-center'>
        <h1>Side Efforts</h1>
        <h3>counter:{counter}</h3>
        <button className='btn btn-warning' onClick={handlecounter}>change counter</button>
    </div>
  )
}

export default EffectDemo