import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

export default function NavbarUI({handleLogout}){
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    };
  
    const navClasses = collapsed ? "collapse" : "";
    
    return(    
        <> 
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="../feed" id='logo-container'>
                    <img src="/img/teclapedia_logo.svg" alt="Teclapedia" id="logo" />
                </Navbar.Brand>
                <form className="d-flex" role="search" id="searchbar">
                    <div id="search-wrapper">
                        <i className="bi bi-search"></i>
                        <input type="search" id="search_input" placeholder="Comienza a escribir para buscar"/>
                        <div className="userlist" id="userlist_container"></div>
                    </div>
                </form>
                <div id="nav_profile" className="center_flex me-3" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} className='show-always' id="menu_button"/>
                    <button className="menu-toggle" id="img-button_menu" onClick={toggleNavbar}>
                        <img
                            src="/img/avatar.jpeg"
                            alt="perfil"
                            id="navImg"       
                        />
                    </button>
                </div>
            </Navbar>  
                <Nav className={`ml-auto flex-column bg-dark border-dark p-2 ${navClasses}`} id='menu-toggle'>
                    <Nav.Link href="#home" className='text-light'>Perfil</Nav.Link>
                    <Nav.Link href="#about" className='text-light'>Configuración</Nav.Link>
                    <Nav.Link className='text-light' onClick={handleLogout}>Cerrar sesión</Nav.Link>
                </Nav>    
         </>
    )
}