import 'bootstrap/dist/css/bootstrap.css';

export default function LoginUI({handleFormSubmit, inputHandleChange, loginData, labelsData, enableLoginButton}){
    return(
       <main className="">
            <div className ="col-6" id="container-initial">
                <h1>¡Te damos la bienvenida a tu comunidad de junior developers!</h1>
            </div>
            <div className="col-6" id="container-initialr">
                <div className="col-6 bg-body-tertiary bg-dark">
                    <img src="./img/teclapedia_logo.svg" id="logo" alt=""/>
                </div>
                <div  className ="col-6" id="container-form" >
                    <form className = "row" id="data" >
                        <input className="fields" type="text" name="username" placeholder="Nombre de usuario" id="user" value={loginData.username} onChange={inputHandleChange} />
                        <label id="username_label" >{labelsData.username}</label>
                        <input className="fields" type="password" name="password" placeholder="Contraseña" id="password" autoComplete="on" onChange={inputHandleChange} />
                        <label id="password_label">{labelsData.password}</label>
                        <span id="save">
                            <input type="checkbox"/>
                            <span>Recuerda mis datos</span>
                        </span>
                        <button id="login" onClick={handleFormSubmit} >Iniciar sesión</button>
                    </form>
                <div>
                        <a href="">Has olvidado tus datos?</a>
                    </div>
                    <div className ="row" id="division">
                        <div className="line"></div>
                        <span>o</span>
                        <div className="line"></div>
                    </div>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                    {/* <span id="google">
                        <img src="./img/logo_google.png" alt="" id="logo_google">
                        <a href="./main/index.html">Iniciar sesión con Google</a>
                    </span> */}
                    </div>
                <div className = "row" id="register">
                    <span>¿No tienes una cuenta?</span>
                    <a href="./register/index.html">Únete ahora</a>
                </div>
            </div>
       </main>
    )
}