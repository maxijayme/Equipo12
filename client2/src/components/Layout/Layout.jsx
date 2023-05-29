import Header from '../Header'
import Footer from '../Footer'
function Layout({children, navbarOff = true}) {  
  return (
    <>
        <Header navbarOff={navbarOff}/>
          <div className='Main'>
            {children}
          </div>
        <Footer/>
    </>
  )
}

export default Layout