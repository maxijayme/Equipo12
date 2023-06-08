import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import { Link } from 'react-router-dom';

export default function LoginUI({handleFormSubmit, inputHandleChange, loginData, labelsData, enableLoginButton}){
    return(
       
           <div className="row" id="login_main_container">
                <div className ="col-3" id="login_container-initial">
                    <h1>¡Te damos la bienvenida a tu comunidad de junior developers!</h1>
                </div>
                <div className="col-3 p-2 m-2 d-flex flex-direction-column" id="login_container-initialr">
                    <div className="row  m-2" id="login_header">
                        <img className='img-fluid' src="./img/teclapedia_logo.svg" id="login_logo" alt=""/>
                    </div>
                    <div  className ="row" id="login_container-form p-2" >
                        <form className = "row d-flex align-content-center p-3" id="data" >
                            {/* <div className="row d-flex justify-content-end"> */}
                                <input className="login_fields mb-2" type="text" name="username" placeholder="Nombre de usuario" id="login_user" value={loginData.username} onChange={inputHandleChange} />
                                <label  id="username_label" >{labelsData.username}</label>
                                <input className="login_fields  mb-2" type="password" name="password" placeholder="Contraseña" id="password" autoComplete="on" onChange={inputHandleChange} />
                                <label id="password_label">{labelsData.password}</label>
                            {/* </div> */}
                            <div className="row mb-2" id="login_save">
                                <div className="col-1"><input type="checkbox"/></div>
                                <div className='col'>Recuerda mis datos</div>
                            </div>
                            <button className='p-1' id="login_button" onClick={handleFormSubmit} >Iniciar sesión</button>
                        </form>
                        <div className='row'>
                            <p className="d-flex justify-content-center"><a href="">Has olvidado tus datos?</a></p>
                        </div>
                        
                        {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
                    </div>    
                    <div className = "row m-2" id="login_register">
                        <p className="text-center">¿No tienes una cuenta?</p>
                        <div className='text-center'>
                            <Link to={'/register'}><span>Únete ahora</span></Link>
                        </div>
                    </div>
                </div>
           </div>
       
    )
}