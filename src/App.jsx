// import First from "./components/first/First";
// import A from './components/first/A';
// import Product from './components/first/Products';
// import UserInteraction from "./components/user-interaction-demo/UserInteraction";
// import StateChangeDemo from "./components/user-interaction-demo/StateChangeDemo";
// import EffectDemo from "./components/side-efforts/EffectDemo";
// import Posts from './components/side-efforts/Posts'
// import Test1 from "./components/user-interaction-demo/Test1";
// import ManageTasks from "./components/tasks-demo/ManageTasks";
// import FormDemo from "./components/forms/FormDemo";
// import ManageTasks from "./components/tasks-demo-2/ManageTasks";


// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import Root from "./components/routering/Root";
// import Home from "./components/routering/Home";
// import Register from "./components/routering/Register";
// import Login from "./components/routering/Login";
// import Technologies from "./components/routering/Technologies";
// import UserProfile from "./components/routering/UserProfile";
// import Java from "./components/routering/Java";
// import Nodejs from "./components/routering/Nodejs";
// import Vue from "./components/routering/vue";
// import RouterError from "./components/RouterError";

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



// import ManageTasks from './components/ass6/ManageTasks';
// import AddTasks from './components/ass6/AddTasks';
// import UserList from './components/ass6/UserList';


// import { createBrowserRouter } from "react-router-dom";
// import AddUser from "./components/miniproject/AddUser";
// import RemovedUsers from "./components/miniproject/RemovedUsers";
// import Users from "./components/miniproject/Users";
// import { RouterProvider } from "react-router-dom";


function App(){

  // MINI PROJECT
  // const router=createBrowserRouter([
  //   {
  //     path:"",
  //     element:<AddUser />,
  //     children:[
  //       {
  //         path:"removedusers",
  //         element:<RemovedUsers />
  //       },
  //       {
  //         path:"Users",
  //         element:<Users />
  //       }
  //     ]
  //   }
  // ])


  


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

  


  // const browserrouter=createBrowserRouter([
  //   {
  //         path:"",
  //         element:<Root />,
  //         errorElement:<RouterError />,
  //         children:[
  //           {
  //             path:"/",
  //           element:<Home />,
  //           },
            
  //           {
  //             path:"register",
  //             element:<Register />
  //           },

  //           {
  //             path:"login",
  //             element:<Login />
  //           },

  //           {
  //             path:"userprofile/:username",
  //             element:<UserProfile />
  //           },

  //           {
  //             path:"technologies",
  //             element:<Technologies />,
  //             children:[
  //               {
  //                 path:"java",
  //                 element:<Java />
  //               },
  //               {
  //                 path:"nodejs",
  //                 element:<Nodejs />
  //               },
  //               {
  //                 path:"vue",
  //                 element:<Vue />
  //               }
  //             ]
  //           }
  //         ]
  //   }
  // ]);


  return(
    <div>
      {/* <First /> */}
      {/* <A /> */}
      {/* <Product /> */}
      {/* <UserInteraction />
      <StateChangeDemo /> */}
      {/* <EffectDemo /> */}
        {/* <Posts /> */}

        {/* <Test1 /> */}
        {/* <ManageTasks /> */}
        {/* <FormDemo /> */}
        {/* <ManageTasks /> */}

        
{/* PORTFOLIO */}
        <RouterProvider router={router} />



        {/* <ManageTasks /> */}
        

    </div>
  
  )
}

export default App;