import { Link, Outlet } from "react-router-dom";

function Intro() {
  return (
    <div className="container d-flex justify-content-center mt-5 w-50" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <p className="fs-5">
          I am a second-year Computer Science Engineering student with a strong foundation in programming languages like C, Java, Python, and R. My expertise includes data structures, algorithms, database management systems, and frontend development. I am passionate about problem-solving and actively participate in competitive programming to enhance my algorithmic thinking. My goal is to leverage my skills in real-world projects and contribute to impactful technology solutions.
        </p>
        <ul className="nav fs-3">
          <li className="nav-item d-flex align-items-center">
            <Link className="nav-link d-flex align-items-center gap-3" to="education">
                <i className="fa-solid fa-book-open-reader"></i>Education
            </Link>
            <Link className="ms-5 nav-link d-flex align-items-center gap-3" to="achievements">
                <i className="fa-solid fa-shield-halved"></i>Achievements
            </Link>
            <Link className="ms-5 nav-link d-flex align-items-center gap-3" to="certificates">
            <i className="fa-solid fa-certificate"></i>Certificates
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default Intro;
