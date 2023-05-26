import NavbarUI from "./NavbarUI";
import useLogin from "../../hooks/useLogin";
import {useNavigate} from 'react-router-dom'

export default function Navbar(){
    const {logout} = useLogin();
    const navigate = useNavigate();
    function handleLogout(){
        logout()
        navigate('./login')
    }

    return(
        <NavbarUI handleLogout={handleLogout}/>
    )
}