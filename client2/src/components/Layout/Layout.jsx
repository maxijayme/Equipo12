import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';

function Layout({children}) {
  return (
    <div className='Main'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout