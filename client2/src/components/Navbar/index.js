import NavbarUI from "./NavbarUI";
import useLogin from "../../hooks/useLogin";
import {useNavigate} from 'react-router-dom'
import { useEffect, useState, useContext } from "react";
import {URL} from '../../utils/url.js'
import AppContext from "../../context/UsersContext";

export default function Navbar({navbarOff}){
    const {logout} = useLogin();
    const navigate = useNavigate();

    const {jwt} = useContext(AppContext);
    let userId;
    if(jwt){
        userId = jwt.userId;
    }
    const [searchResult,setSearchResult] = useState([])
    const [searchInput, SetSearchInput] = useState("")
    const [userData, setUserData] = useState({})

    function handleLogout(){
        logout()
        navigate('/login')
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

    useEffect(()=>{
        try{
            async function getUserById(){
            const response = await fetch(`${URL}/users/${userId}`)
            const responseJson = await response.json()
            setUserData(responseJson[0])
            }
            getUserById()
        }
        catch(e){
            console.log(e)
        }
    },[])

    return(
        <>
            {navbarOff && <NavbarUI userData={userData} handleLogout={handleLogout} handleSearch={handleSearch} searchResult={searchResult} searchInput={searchInput} />}
        </>
    )
}