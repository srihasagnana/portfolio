import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


function Root() {
  return (
    <div>
        <Header />
        <div style={{minHeight:'100vh'}}>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Root