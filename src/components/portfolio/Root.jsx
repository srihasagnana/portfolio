
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";

function Root() {
  return (
    <div>
       
       

<div className="d-flex justify-content-between align-items-center p-3 bg-light">
       <i className="fa-solid fa-graduation-cap fs-1 ms-5"></i>
        <ul className="nav fs-3">
          <li className="nav-item d-flex align-items-center">
            <Link className="nav-link d-flex align-items-center gap-3" to="/">
                <i className="fa-solid fa-book-open-reader"></i>Home
            </Link>
            <Link className="ms-5 nav-link d-flex align-items-center gap-3" to="intro">
                <i className="fa-solid fa-shield-halved"></i>Intro
            </Link>
            <Link className="ms-5 nav-link d-flex align-items-center gap-3" to="projects">
            <i className="fa-solid fa-diagram-project"></i>Projects
            </Link>
            <Link className="ms-5 nav-link d-flex align-items-center gap-3" to="skills">
            <i className="fa-regular fa-lightbulb"></i>Skills
            </Link>
          </li>
        </ul>
</div>
        <Outlet />
    </div>
  )
}

export default Root