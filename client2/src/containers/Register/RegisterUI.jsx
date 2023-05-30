import './Register.css';

export default function RegisterUI(){
    return(
        <>
            <div className="col-6" id="container-initial">
                <h1>¡Regístrate y comparte información con otros junior developers!</h1>
            </div>
            <div className="col-6" id="container-initialr">
                <div className="col-6 bg-body-tertiary bg-dark">
                    <img src="./img/teclapedia_logo.svg" id="logo" alt=""/>
                </div>
                <div id="container-form">
                    <form className="row" id="data_form">
                        <input className="input_form" type="text" placeholder="Nombre y Apellidos" id="fullname" name="fullname"/>
                        <label id="fullnameLabel"></label>
                        <input className="input_form" type="text" placeholder="Nombre de Usuario" id="userName" name="userName"/>
                        <label id="userNameLabel"></label>
                        <input className="input_form" type="email" placeholder="Email" id="email" name="email"/>
                        <label id="emailLabel"></label>
                        <input className="input_form" type="password" placeholder="Contraseña" autocomplete="on" id="password" name="password"/>
                        <label id="passwordLabel"></label>
                        <input className="input_form" type="password" placeholder="Confirmación contraseña" autocomplete="on" id="passwordConfirm" name="passwordConfirm"/>
                        <label id="passwordConfirmLabel"></label>
                        <p className="p-cond">Al registrarte, aceptas nuestras Condiciones. Obtén más información sobre cómo recopilamos, usamos y compartimos tus datos en la Política de privacidad, así como el uso que hacemos de las cookies y tecnologías similares en la Política de cookies.</p>
                        <button id="register" type="submit" disabled>Registrarse</button>
                    </form>
                    <div className="row" id="division">
                        <div className="line"></div>
                        <span>o</span>
                        <div className="line"></div>
                    </div>
                    <span className="row" id="google">
                        <img src="./img/logo_google.png" alt="" id="logo_google"/>
                        <a href="../main/index.html">Iniciar sesión con Google</a>
                    </span>
                </div>
                <div className="row" id="login">
                    <p>¿Ya tienes cuenta?</p>
                    <a href="../index.html">Inicia</a>
                </div>
            </div> 
            <div id="loader">            
                <span>Usuario registrado con éxito</span>
            </div> 
        </>
    )
}