import React from 'react'

function UserList(props) {
  return (
    <div>
        <h1 className='mb-5'>User List</h1>
        {
            props.adduser.map((user,index)=><div key={index}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
                
            )
        }
    </div>
  )
}

export default UserList