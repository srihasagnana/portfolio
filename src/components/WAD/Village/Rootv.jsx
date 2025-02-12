import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
function Rootv() {
  return (
    <div>
        <Navigate to="register" replace/>
    <Outlet/></div>
  )
}

export default Rootv