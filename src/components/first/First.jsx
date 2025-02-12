import React from 'react'

function First() {
    //stste
    let a=10;
    let username='siri';
    let person={
        age:'40',
        pid:200,
    }

    let skills=['css','js','react']
  return (
    <div>
        <h1>First</h1>
        <p>value of a is:{a}</p>
        <p>username is:{username}</p>
        <p>{person.age}</p>
        {
            skills.map(s=><p>{s}</p>)
        }
    </div>
  )
}

export default First