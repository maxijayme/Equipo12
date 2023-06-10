import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import { Link } from 'react-router-dom';

export default function LoginUI({handleFormSubmit, inputHandleChange, loginData, labelsData, enableLoginButton}){
    return(
       
           <div className="row" id="login_main_container">
                <div id="login_container-initial">
                    <h1 id="welcome-msg">¡Te damos la bienvenida a tu comunidad de junior developers!</h1>
                </div>
                <div id="login_container-initialr">
                    <div className="bg-body-tertiary bg-dark" id="login_logo-cotainer">
                        <img src="./img/teclapedia_logo.svg" id="login_logo" alt=""/>
                    </div>
                    <div  id="login_container-form" >
                        <form className = "row" id="login-data" >
                                <input className="login_fields" type="text" name="username" placeholder="Nombre de usuario" id="login_user" value={loginData.username} onChange={inputHandleChange} />
                                <label  id="username_label" >{labelsData.username}</label>
                                <input className="login_fields" type="password" name="password" placeholder="Contraseña" id="password" autoComplete="on" onChange={inputHandleChange} />
                                <label id="password_label">{labelsData.password}</label>
                            <span  id="login_save">
                                <input type="checkbox"/>
                                <span>Recuerda mis datos</span>
                            </span>
                            <button id="login_button" onClick={handleFormSubmit} >Iniciar sesión</button>
                        </form>
                        <div>
                           <a href="">Has olvidado tus datos?</a>
                        </div>
                    </div>    
                    <div id="login_register">
                        <span className="text-center">¿No tienes una cuenta?</span>
                            <Link to={'/register'}>Únete ahora</Link>
                    </div>
                </div>
           </div>
       
    )
}