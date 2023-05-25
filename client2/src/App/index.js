import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from '../containers/Contact';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Feed from '../containers/Feed'
import Layout from '../components/Layout/Layout';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AdminPanel from '../containers/AdminPanel';


function App() {
  const router = createBrowserRouter([
    {
      path:'', 
      children:[
        {path:'/login', element: <Login/>},
        // {path:'/register', element: <Register/>},
        {path:'/', element: <Layout/>, children:[
          {path:'/feed', element: <Feed/>},
          {path:'/contact', element: <Contact/>},
          {path:'/admin', element: <AdminPanel/>},
        ]},   
        // {path:'/', element: <Contact/>,  errorElement:<NotFound/> },
      ]
    }
  ])
  
  return <RouterProvider router={router}/>
}

export default App;
