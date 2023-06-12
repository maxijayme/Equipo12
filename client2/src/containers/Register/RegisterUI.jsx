import React from "react";
import { Field, reduxForm } from 'redux-form';
import './Register.css';
import validate from '../../utils/validations'
import { Link } from 'react-router-dom';


const renderField = ({
    className,
    input,
    label,
    type,
    meta: { touched, error }
    }) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} className={className}/>
            {touched && (error && <span>{error}</span>)}
        </div>
    </div>
)

function RegisterUI({handleSubmit, pristine, submitting}){
    return(
        <div className="row" id="register_container" >
            <div id="register_container-initial">
                <h1 id="titleRegister">¡Regístrate y comparte información con otros junior developers!</h1>
            </div>
            <div id="register_container-initialr">
                <div className="row bg-body-tertiary bg-dark" id="register_logo-cotainer">
                    <img src="./img/teclapedia_logo.svg" id="register_logo" alt=""/>
                </div>
                
                <form className="row d-flex align-content-center p-3" id="register_data_form" onSubmit={handleSubmit}>
                    <Field
                        className="input_form_register form-control mb-2"
                        label="Nombre y Apellidos"
                        type="text"
                        name="fullname"
                        component={renderField}
                    />
                    <Field
                        className="input_form_register form-control mb-2"
                        label="Nombre de Usuario"
                        type="text"
                        name="userName"
                        component={renderField}
                    />
                    <Field
                        className="input_form_register form-control mb-2"
                        label="Email"
                        type="text"
                        name="email"
                        component={renderField}
                    />
                    <Field
                        className="input_form_register form-control mb-2"
                        label="Contraseña"
                        type="password"
                        name="password"
                        component={renderField}
                    />
                    <Field
                        className="input_form_register form-control mb-2"
                        label="Confirmación contraseña"
                        type="password"
                        name="passwordConfirm"
                        component={renderField}
                    />
                    <div className="d-flex align-content-center p-3">
                        <p className="text-center" id="register_conditions-text">Al registrarte, aceptas nuestras Condiciones. Obtén más información sobre cómo recopilamos, usamos y compartimos tus datos en la Política de privacidad, así como el uso que hacemos de las cookies y tecnologías similares en la Política de cookies.</p>
                    </div>
                    <button id="register_button" type="submit" disabled={pristine|submitting}>Registrarse</button>
                </form>
                
                <div className="row" id="allReadyRegistered">
                    <span className="text-center">¿Ya tienes cuenta?</span>
                        <Link to={'/'}><span>Inicia sesión</span></Link>
                </div>
            </div>
        </div>     
    )
}

const createReduxForm = reduxForm({
    form:'firstRegister',
    validate
});

RegisterUI = createReduxForm(RegisterUI);

export default RegisterUI;