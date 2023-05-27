import NavbarUI from "./NavbarUI";
import useLogin from "../../hooks/useLogin";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import {URL} from '../../utils/url.js'

export default function Navbar(){
    const {logout} = useLogin();
    const navigate = useNavigate();

    const [searchResult,setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState("")
    
    function handleLogout(){
        logout()
        navigate('./login')
    }

    async function handleSearch(){
        try{
            const result = await fetch(`${URL}/search_user/${searchInput}`)
            const resultJson = await result.json();
            setSearchResult(resultJson)
        }
        catch(e){
            searchResult("")
        }
    }


    return(
        <NavbarUI handleLogout={handleLogout} handleSearch={handleSearch} searchResult={searchResult} searchInput={searchInput} />
    )
}