import LoginUI from "./LoginUI";
import { useNavigate } from "react-router-dom";
import useLogin from '../../hooks/useLogin'
import { useEffect, useState } from "react";

export default function Login(){
  const {isLoginLoading, hasLoginError, login, isLogged} = useLogin()
    const navigate = useNavigate();
    
    useEffect(() => {
    if (isLogged) {
        navigate('/feed')
    }
    }, [isLogged])


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
              navigate('/feed')
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
      <LoginUI handleFormSubmit={handleFormSubmit} inputHandleChange = {inputHandleChange} loginData={loginData} labelsData={labelsData} enableLoginButton={enableLoginButton}/>
    )
}