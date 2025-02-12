import { Outlet } from "react-router-dom";
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <div>
        
        {/* <Header /> */}
      </div>
      <div className="d-flex container justify-content-around">
        <h1 style={{minHeight:'70vh',padding:'90px'}}>Hello, I'm <br></br> <span className="text-primary">Gnana Srihasa</span></h1>
        <img src="https://img.freepik.com/premium-photo/cute-cartoon-character-portrait-facing-forward-with-smile-blush_931778-15332.jpg" className="rounded-circle float-end mt-5 me-5 " style={{width:'400px',height:'400px',objectFit:'cover'}}></img>
      </div>
      
      <div style={{minHeight:'1vh'}}>
            <Outlet />
        </div>
        <Contact />
    </div>
  );
}

export default Home;
