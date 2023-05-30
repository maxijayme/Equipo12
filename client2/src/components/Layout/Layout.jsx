import Header from '../Header'
import { Outlet} from 'react-router-dom';
import AppContext from '../../context/UsersContext';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect   } from 'react';
import Feed from '../../containers/Feed';
function Layout() {  
  const navigate = useNavigate()
  const {jwt} = useContext(AppContext)

  // useEffect(()=>{
  //   if(jwt!==null ){
  //     console.log()
  //     navigate('/feed')
  //   }
  //   else{
  //     navigate('/login')
  //   }
  // },[jwt])
  return (
    <div className='Main'>
        <Header/>
        <Outlet/>
        <Feed/>
    </div>
  )
}

export default Layout