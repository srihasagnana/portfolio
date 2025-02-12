import React from 'react';
import { useState } from 'react';

function StateChangeDemo() {
    let [a,setA]=useState(10);
    let [username,setUsername]=useState('srihasa')
    let [person,setPerson]=useState({id:100,name:"siri",age:19})
    let [skills,setSkills]=useState(['css','react','html'])

    function handleInvrement(){
        setA(a+1);
    }

    function handledecreament(){
        setA(a-1)
    }

    function handleUsername(){
        setUsername('gnana srihasa')
    }


    function handleperson(){
        setPerson({...person,id:200,name:"srihasa"})
    }

    function handleskills(){
        setSkills([...skills,"angular"])
    }

    function handledeleteskills(){
        const del=[...skills]
        del.pop()
        setSkills(del)
    }
  return (
    <div className='text-center'>
        <h1>StateChangeDemo</h1>
        <p>the value of a is {a}</p>
        <button className='m-3 btn btn-dark 'onClick={handleInvrement}>increament</button>
        <button className='btn btn-danger'onClick={handledecreament}>decreament</button>

        <h4>the username is {username}</h4>
        <button className='btn btn-primary' onClick={handleUsername}>change username</button>

        <h3>the person details are {person.id}</h3>
        <h3>the person details are {person.name}</h3>
        <h3>the person details are {person.age}</h3>
        <button className='btn btn-secondary' onClick={handleperson}>person details</button>

        <p>skills are</p>
        {
            skills.map(s=><p key={s}>{s}</p>)
        }
         <button className='btn btn-warning' onClick={handleskills}>array state</button>
        <button className='btn btn-dark' onClick={handledeleteskills}>array delete state</button> 
    </div>
  )
}

export default StateChangeDemo