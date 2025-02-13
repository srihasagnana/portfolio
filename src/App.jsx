

// portfolio
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/portfolio/Home'
import Skills from './components/portfolio/Skills';
import Intro from './components/portfolio/Intro';
import Education from './components/portfolio/Education';
import Contact from './components/portfolio/Contact';
import Projects from './components/portfolio/Projects';
import Certificates from './components/portfolio/Certificates';
import Achievements from './components/portfolio/Achievements';
import Root from './components/portfolio/Root';




function App(){

  


  


// PORTFOLIO
  const router=createBrowserRouter([
    {
      path:"",
      element:<Root />,
      children:[
        {
          path:'/',
          element:<Home />,
          children:[
            {
              path:'contact',
              element:<Contact />
            }, 
          ]
        },
    
        {
              path:'intro',
              element:<Intro />,
              children:[
              {
                path:'education',
                element:<Education />
              },
              {
                path:'achievements',
                element:<Achievements />
              },
              {
              path:'certificates',
              element:<Certificates />
            }
              ]
            },
            {
              path:'projects',
              element:<Projects />
            },
            {
              path:'skills',
              element:<Skills />
            },
      ]
    }
    
      ]
    

)

  




  return(
    <div>
      

        
{/* PORTFOLIO */}
        <RouterProvider router={router} />



    </div>
  
  )
}

export default App;