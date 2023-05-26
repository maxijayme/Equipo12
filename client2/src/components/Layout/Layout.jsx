import Header from '../Header'
import Footer from '../Footer'
import { Outlet} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AppContext from '../../context/UsersContext';
import { useNavigate } from "react-router-dom";

function Layout({children}) {
  const navigate = useNavigate()
  const URL = 'http://localhost:3001/';
    const {jwt} = useContext(AppContext)

    useEffect(()=>{
      fetch(URL,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        }
      }).then(res =>{
          if(res.status === 200){
              // navigate('/feed')
          }else{
              navigate('/login')
          }
      })
    },[])
    
  return (
    <div className='Main'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout