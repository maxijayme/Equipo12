import React from "react";
import { Field, reduxForm } from 'redux-form';
import './Register.css';

function RegisterUI({handleSubmit, pristine, submitting}){
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
                    <form className="row" id="data_form" onSubmit={handleSubmit}>
                        <Field
                            className="input_form form-control mb-2"
                            placeholder="Nombre y Apellidos"
                            type="text"
                            name="fullname"
                            component="input"
                        />
                        <Field
                            className="input_form form-control mb-2"
                            placeholder="Nombre de Usuario"
                            type="text"
                            name="userName"
                            component="input"
                        />
                        <label className="form-label align-self-center me-2" htmlFor="userName"></label>
                        <Field
                            className="input_form form-control mb-2"
                            placeholder="Email"
                            type="text"
                            name="email"
                            component="input"
                        />
                        <label className="form-label align-self-center me-2" htmlFor="email"></label>
                        <Field
                            className="input_form form-control mb-2"
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            component="input"
                        />
                        <label className="form-label align-self-center me-2" htmlFor="password"></label>
                        <Field
                            className="input_form form-control mb-2"
                            placeholder="Confirmación contraseña"
                            type="password"
                            name="passwordConfirm"
                            component="input"
                        />
                        <label className="form-label align-self-center me-2" htmlFor="password"></label>
                        <p className="p-cond">Al registrarte, aceptas nuestras Condiciones. Obtén más información sobre cómo recopilamos, usamos y compartimos tus datos en la Política de privacidad, así como el uso que hacemos de las cookies y tecnologías similares en la Política de cookies.</p>
                        <button id="register" type="submit" disabled={pristine|submitting}>Registrarse</button>
                    </form>
                    <div className="row" id="division">
                        <div className="line"></div>
                        <span>o</span>
                        <div className="line"></div>
                    </div>
                    
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

const createReduxForm = reduxForm({form:'firstRegister'});

RegisterUI = createReduxForm(RegisterUI);

export default RegisterUI;