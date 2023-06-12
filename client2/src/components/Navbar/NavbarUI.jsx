import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search, PersonFillAdd } from 'react-bootstrap-icons';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarUI({handleLogout, handleSearch, searchResult, searchInput, userData}){
    const [collapsed, setCollapsed] = useState(true);
    const [openList, setOpenList] = useState(false); 
    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    };
    
    const userlist = useRef(null);
    useEffect(()=>{

        const closeOpenMenus = (e)=>{
            if(userlist.current && openList && !userlist.current.contains(e.target)){
                setOpenList(false)
            }else{
                setOpenList(true)
            }
            }
            document.addEventListener('click',closeOpenMenus)
    }, [openList])


    const navClasses = collapsed ? "collapse" : "";
    return(    
        <> 
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="../" id='logo-container'>
                    <div alt="Teclapedia" id="logo"></div>
                </Navbar.Brand>
                <form className="d-flex" role="search" id="searchbar">
                    <div id="search-wrapper">
                        <Search style={{color:"black", position:"absolute", top: 11, left:12}}/>
                        <input type="search" id="search_input" placeholder="Comienza a escribir para buscar"  onChange={handleSearch} value={searchInput} />
                        {(searchResult.length >0 || searchInput.length > 0) && openList && <div className="userlist" id="userlist_container" ref={userlist}>
                            <ul>
                                {
                                    searchResult.length >0?searchResult.map( user =>(
                                        <li key={user.id_usuario}>
                                            <Link to={`/profile/${user.username}`}>
                                                {user.fullname}
                                            </Link>    
                                        </li> 
                                    ))
                                    : <li>No hay resultados</li>
                                }
                            </ul>
                        </div>}
                    </div>
                </form>
                <div id="nav_profile" className="center_flex me-3" >
                    <Link to="/friends" id="Navbar-friends">
                        <PersonFillAdd style={{color:"white", height:30, width:30}}/>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} className='show-always' id="menu_button"/>
                    <button className="menu-toggle" id="img-button_menu" onClick={toggleNavbar}>
                        <img
                            src={userData.photo}
                            alt="perfil"
                            id="navImg"       
                        />
                    </button>
                </div>
            </Navbar>  
                <Nav className={`ml-auto flex-column bg-dark border-dark p-2 ${navClasses}`} id='menu-toggle'>
                    <Link to={`/profile/${userData.username}`} className='nav-link text-light'>Perfil</Link>
                    <Link to={`/contact`} href="#config" className='nav-link text-light'>Ayuda</Link>
                    {userData.perfil==='admin' && <Link className="nav-link text-light" to='/admin'>Administrar</Link>}
                    <Nav.Link className='text-light' onClick={handleLogout}>Cerrar sesión</Nav.Link>
                </Nav>    
         </>
    )
}