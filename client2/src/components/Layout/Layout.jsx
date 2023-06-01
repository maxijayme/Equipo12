import Header from '../Header'
import Footer from '../Footer'
function Layout({children, navbarOff = true}) {  
  return (
    <>
        <Header navbarOff={navbarOff}/>
          <main className='container-fluid h-auto'>
            {children}
          </main>
        <Footer/>
    </>
  )
}

export default Layout