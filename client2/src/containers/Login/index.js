import LoginUI from "./LoginUI";
import { useLocation, useNavigate } from "react-router-dom";
// import {isLogged, login, loginLoading, loginError} from '../../hooks/useLogin'
import { useEffect } from "react";

export default function Login(){
    const location = useLocation();
    const navigate = useNavigate();
    // const isLogged = login({username, password});
    // const isLogged = true;
    
    // useEffect(() => {
    // if (isLogged) {
    //     navigate('/main')
    // }else(
    //     navigate('/contact')
    // )
    // }, [isLogged])

    // console.log(location)


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     login({ username, password })
    //   };

    return (
        <LoginUI />
      )
}