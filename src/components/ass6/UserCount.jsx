import React from 'react'

function UserCount(props) {
  return (
    <div>
        <h1>User Count</h1>
        <p className='mt-5'>{props.adduser.length}</p>
    </div>
  )
}

export default UserCount