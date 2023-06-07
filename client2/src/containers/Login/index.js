import LoginUI from "./LoginUI";
import { useNavigate } from "react-router-dom";
import useLogin from '../../hooks/useLogin'
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/UsersContext";
import Layout from "../../components/Layout/Layout";

export default function Login(){
  const {isLoginLoading, hasLoginError, login, isLogged} = useLogin()
    const navigate = useNavigate();
    const {jwt} = useContext(AppContext)

    useEffect(() => {
      if (jwt!==null) {
        navigate('/')
      }
    }, [])


 const [loginData, setLoginData] = useState({
      username:"",
      password:"",
  })
 
  const [labelsData, setLabelsData] = useState({
      username:"",
      password:"",
  })

  const [userOk, setUserOk] = useState({userValid: false})
  const [passwordOk, setPasswordOk] = useState({passworValid: "disabled"})

  const [enableLoginButton, setEnableLoginButton] = useState({buttonEnabled: true})

  function inputHandleChange(e){
      const inputName = e.target.name;
      const inputValue = e.target.value;
      setLoginData(values => ({...values, [inputName]: inputValue}))
      if(inputName === 'username'){
          if(inputValue.length<4){
              setLabelsData({...labelsData, [inputName]: "El usuario debe tener al menos 4 letras"});
              setUserOk({userValid:false});  
          }
          else{
            setLabelsData({...labelsData, [inputName]: ""});
              setUserOk({userValid:true});  
          }
      }
      if(inputName === 'password'){
          if(inputValue.length < 5){
              setLabelsData({...labelsData, [inputName]: "La contraseña debe tener al menos 6 caracteres"});
              setPasswordOk({passworValid:false})
          }else
          if(inputValue.length > 20){
              setLabelsData({...labelsData, [inputName]: "La contraseña debe tener 20 caracteres máximo"});
              setPasswordOk({passworValid:false})
          }
          else{
            setLabelsData({...labelsData, [inputName]: ""});
            setPasswordOk({passworValid:true})
          }
      }
      userOk.userValid && passwordOk.passworValid ?
      setEnableLoginButton({buttonEnabled:false})
      :setEnableLoginButton({buttonEnabled:true});
  }

  function handleFormSubmit(e){
    e.preventDefault();
    login({username:loginData.username, password:loginData.password})
    .then(response => {
            if(response.userId){
              navigate('/')
            }
            else if(response === 'El usuario o la contraseña son incorrectos'){
              setLabelsData({...labelsData, password: "El usuario o la contraseña son incorrectos"});
            }
            else if(response.uservalid){
              setLabelsData({...labelsData, username: response.uservalid });
            }
            else{
              setLabelsData({...labelsData, password: response.passwordvalid});
            }
          })
  }

  return (
    <Layout navbarOff={false}>
        <LoginUI handleFormSubmit={handleFormSubmit} inputHandleChange = {inputHandleChange} loginData={loginData} labelsData={labelsData} enableLoginButton={enableLoginButton}/>
    </Layout>
    )
}