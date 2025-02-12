import { Link } from "react-router-dom";
import image1 from './images/s-1.png';
import image2 from './images/s-2.png';
import image3 from './images/s-3.png';
import image4 from './images/s-4.png';
import image5 from './images/s-5.png';
import image6 from './images/s-6.png';
import './Project.css'

function Projects() {
  return (
    <div className="container mt-5 text-center">
      <h1><i className="fa-solid fa-bars-progress me-3"></i>Projects</h1>
      <a className="fs-3 text-secondary" href="https://codepen.io/SRI-HASA/pen/vYqepWy" target="_blank" rel="noopener noreferrer">
        Check out my CodePen project
      </a>
      <p className="fs-4 mt-5">"This project is a replica of the Udemy website, created using HTML, CSS, and Bootstrap. It is fully responsive, with designs optimized for both mobile and desktop views."</p>
      <div className="image-grid mt-5">
        <img src={image1} alt="Project Screenshot 1" />
        <img src={image2} alt="Project Screenshot 2" />
        <img src={image3} alt="Project Screenshot 3" />
        <img src={image4} alt="Project Screenshot 4" />
        <img src={image5} alt="Project Screenshot 5" />
        <img src={image6} alt="Project Screenshot 6" />
      </div>
    </div>
  );
}

export default Projects;
