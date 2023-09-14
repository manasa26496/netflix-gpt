import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login';
import { RouterProvider } from 'react-router-dom';
const Body = () => {
    
    const appRouter =createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },
    ]);
    //useeffect used becz do it once
    //adduser to store when signed in and remov user when signed out
    

  return (
    <div>
      <RouterProvider router ={appRouter}/>
    </div>
  )
}

export default Body