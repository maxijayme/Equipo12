import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
export default function NavbarUI(){
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    };
  
    const navClasses = collapsed ? "collapse" : "";
    
    return(
        // <nav className="navbar bg-body-tertiary fixed-top navbar-expand-sm bg-dark navbar-dark ml-2 mr-2" data-bs-theme="dark">
        //     <div className="container-fluid no-padding flex-wrap">
        //         <a className="navbar-brand" id="logo_link" href='../feed'>
        //             <img src="/img/teclapedia_logo.svg" alt="Teclapedia" id="logo" />
        //         </a>
        //         <form className="d-flex" role="search" id="searchbar">
        //             <div id="search-wrapper">
        //                 <i className="bi bi-search"></i>
        //                 <input type="search" id="search_input" placeholder="Comienza a escribir para buscar"/>
        //                 <div className="userlist" id="userlist_container"></div>
        //             </div>
        //         </form>
        //         <div id="nav_profile" className="center_flex" >
        //             <span>
        //                 <i className="bi bi-bell"></i>
        //             </span>
        //             <div className="dropdown">
        //                 <button id="profileButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                     <img src="/img/avatar.jpeg" alt="perfil" id="navImg"/>
        //                 </button>
        //                 <ul className="dropdown-menu dropdown-menu-lg-end" id="drop_menu">
        //                   {/* <li><a className="dropdown-item" href="../hojaPersonal/index.html">Perfil</a></li>
        //                   <li><a className="dropdown-item" href="#">Configuración</a></li>
        //                   <li><a className="dropdown-item" href="../index.html">Cerrar sesión</a></li> */}
        //                 </ul>
        //               </div>               
        //         </div>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse " id="navbarToggler">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 {/* <li className="nav-item">
        //                 <a className="nav-link active" href="#">Notificaciones</a>
        //                 </li>
        //                 <li className="nav-item">
        //                 <a className="nav-link active" href="../hojaPersonal/index.html">Perfil</a>
        //                 </li>    
        //                 <li className="nav-item">
        //                 <a className="nav-link active" href="#">Configuración</a>
        //                 </li>
        //                 <li className="nav-item">
        //                 <a className="nav-link active" href="../index.html">Cerrar sesión</a>
        //                 </li> */}
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <>
        
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="../feed">
                <img src="/img/teclapedia_logo.svg" alt="Teclapedia" id="logo" />
            </Navbar.Brand>
            <form className="d-flex" role="search" id="searchbar">
                <div id="search-wrapper">
                    <i className="bi bi-search"></i>
                    <input type="search" id="search_input" placeholder="Comienza a escribir para buscar"/>
                    <div className="userlist" id="userlist_container"></div>
                </div>
            </form>
            <div id="nav_profile" className="center_flex" >
                <span>
                    <i className="bi bi-bell"></i>
                </span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} id="menu_button"/>
                <button className="menu-toggle" id="img-button_menu" onClick={toggleNavbar}>
                    <img
                        src="/img/avatar.jpeg"
                        alt="perfil"
                        id="navImg"       
                    />
                </button>
            </div>
        </Navbar>
                <Navbar id="basic-navbar-nav" className={navClasses}>
                    <Nav className="ml-auto">
                            <Nav.Link href="#home">Perfil</Nav.Link>
                            <Nav.Link href="#about">Configuración</Nav.Link>
                            <Nav.Link href="#contact">Cerrar sesión</Nav.Link>
                    </Nav>         
                </Navbar>
                </>
    )
}