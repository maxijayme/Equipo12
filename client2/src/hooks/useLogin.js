import { useCallback, useContext } from "react";
import { useState } from "react";
import AppContext from '../context/UserContext';
import loginService from '../services/loginService';

export default function useLogin(){
    const {jwt,setJwt} = useContext(AppContext);
    const [state, setState] = useState({ loading: false, error: false })

    const login = useCallback(({username, password})=>{
        setState({loading: true, error: false })
        loginService({username, password})
        .then(jwtResponse => {
            setState({loading: false, error: false })
            window.localStorage.setItem('jwt', jwtResponse)
            setJwt(jwtResponse)
        })
        .catch(err => {
            setState({loading: false, error: true })
            window.localStorage.removeItem('jwt')
            console.error(err)
          })
        },[setJwt])

    const logout = useCallback(()=>{
        setJwt(null)
    },[setJwt]) 

    return{
        isLogged: Boolean(jwt),
        login,
        logout,
        loginLoading: state.loading,
        loginError: state.error,
    }
}