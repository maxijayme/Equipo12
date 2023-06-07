import Navbar from "../Navbar";

function HeaderUI({navbarOff}) {
  return (
    <header className='Header'>
        <Navbar navbarOff={navbarOff}/>
    </header>
  )
}

export default HeaderUI