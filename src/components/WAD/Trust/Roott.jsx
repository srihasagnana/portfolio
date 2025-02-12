import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
function Roott() {
  return (
    <div>
        <Navigate to="register" replace/>
    <Outlet/></div>
  )
}

export default Roott