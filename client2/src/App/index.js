import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from '../containers/Main/';
import Contact from '../containers/Contact';
import Login from '../containers/Login';
import Home from '../containers/Home';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AdminPanel from '../containers/AdminPanel';


function App() {
  const router = createBrowserRouter([
    {
      path:'', 
      children:[
        {path:'/', element: <Home/>},
        {path:'/login', element: <Login/>},
        {path:'/main', element: <Main/>},
        {path:'/contact', element: <Contact/>},
        {path:'/admin', element: <AdminPanel/>},
        // {path:'/', element: <Contact/>,  errorElement:<NotFound/> },
        // {path:'/checkout', element: <CheckOut/> },
      ]
    }
  ])
  
  return <RouterProvider router={router}/>
}

export default App;
