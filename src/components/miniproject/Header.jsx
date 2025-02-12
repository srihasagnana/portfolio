import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="d-flex me-3 mt-3 fs-4 justify-content-end">
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="">Add Users</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="users">Users</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="removedusers">Removed Users</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header