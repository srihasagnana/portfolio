import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
function Main() {
  return (
    <div className='bg' style={{minHeight:"100vh"}}>
      <Link to="trust">trust</Link>
      <Link to="village">village</Link>
    </div>
  )
}

export default Main