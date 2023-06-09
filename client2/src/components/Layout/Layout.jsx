import Header from '../Header'
import Footer from '../Footer'
import './Layout.css'
function Layout({children, navbarOff = true}) {  
  return (
    <>
        <Header navbarOff={navbarOff}/>
          <main className='container-fluid h-100'>
            {children}
          </main>
        <Footer/>
    </>
  )
}

export default Layout