import NavbarUI from "./NavbarUI";
import useLogin from "../../hooks/useLogin";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import {URL} from '../../utils/url.js'

export default function Navbar({navbarOff}){
    const {logout} = useLogin();
    const navigate = useNavigate();

    const [searchResult,setSearchResult] = useState([])
    const [searchInput, SetSearchInput] = useState("")
    function handleLogout(){
        logout()
        navigate('./login')
    }

    async function handleSearch(e){
        SetSearchInput(e.target.value)
        try{
            const result = await fetch(`${URL}/users/search_user/${e.target.value}`)
            const resultJson = await result.json();
            setSearchResult(resultJson)
        }
        catch(e){
            setSearchResult([])
        }
    }

    return(
        <>
            {navbarOff && <NavbarUI handleLogout={handleLogout} handleSearch={handleSearch} searchResult={searchResult} searchInput={searchInput} />}
        </>
    )
}