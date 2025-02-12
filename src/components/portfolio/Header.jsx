import { Link, Outlet } from "react-router-dom";
import Contact from "./Contact";

function Header() {
  return (
    <div className="d-flex me-5 fs-4">
        
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="intro">Intro</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="skills">Skills</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="projects">Projects</Link>
            </li>
        </ul>
        
        
    </div>
  )
}

export default Header