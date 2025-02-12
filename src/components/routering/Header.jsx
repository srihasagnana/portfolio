import { Link } from "react-router-dom";
import { logincontextsobj } from "../../Contexts/LoginContexts";
import { useContext } from "react";

function Header() {
  const {loginstatus,handlelogout}=useContext(logincontextsobj)
  return (
    <div className='p-3 bg-warning '>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">Register</Link>
        </li>

        {
            loginstatus===false?(<li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>):(<li className="nav-item">
          <Link className="nav-link" to="login" onClick={handlelogout}>Logout</Link>
        </li>)
        }

        
        
        <li className="nav-item">
          <Link className ="nav-link" to="technologies">Technologies</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header