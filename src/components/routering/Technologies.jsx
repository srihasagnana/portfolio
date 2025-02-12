import { Outlet } from 'react-router-dom';
import Java from './Java';
import Nodejs from './Nodejs';  
import Vue from './vue';
import { Link } from 'react-router-dom';


function Technologies() {
  return (
    <div className='text-center container'>
      <h1 className='mt-3 text-center'>Technologies</h1>
      
      <ul className="nav justify-content-center mt-4 fs-4">
        <li className="nav-item">
          <Link className="nav-link" to="java">Java</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="nodejs">NodeJS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Vue">Vue</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Technologies