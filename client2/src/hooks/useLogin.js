import { useCallback, useContext } from "react";
import { useState } from "react";
import loginService from '../services/loginService';
import AppContext from '../context/UsersContext'

export default function useLogin(){
    const {jwt,setJwt} = useContext(AppContext);
    const [state, setState] = useState({ loading: false, error: false })
    const [isLogged, setIsLogged] = useState(false)
    const login = useCallback( async ({username, password})=>{
        setState({loading: true, error: false })
        const loginResponse = await loginService({username, password})
        const responseJson = await loginResponse.json()
        if(loginResponse.status === 200){
            setState({loading: false, error: false })
            window.localStorage.setItem("jwt", JSON.stringify({token: responseJson.token, userId: responseJson.userId, profile: responseJson.profile }))
            setJwt(responseJson)
            setIsLogged(true)
            return responseJson
        }else if(loginResponse.status === 401){
            setState({loading: false, error: true })
            window.localStorage.removeItem('jwt')
            if(responseJson.uservalid !== ''){return responseJson.uservalid};
            if(responseJson.passwordvalid !== ''){return responseJson.passwordvalid};
            setIsLogged(false)
        }
        else{
            setState({loading: false, error: true })
            window.localStorage.removeItem('jwt')
            setIsLogged(false)
            return 'El usuario o la contraseña son incorrectos'
        }
        },[setJwt])

    const logout = useCallback(()=>{
        setJwt(null)
        window.localStorage.removeItem('jwt')
    },[setJwt]) 

    return{
        isLogged,
        login,
        logout,
        loginLoading: state.loading,
        loginError: state.error,
    }
}