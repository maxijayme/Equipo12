import React from "react";
import { Field, reduxForm } from 'redux-form';
import './Register.css';
import validate from '../../utils/validations'


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
        <>
            <div className="completeRegister">
                <div className="col-6" id="container-initial">
                    <h1 id="titleRegister">¡Regístrate y comparte información con otros junior developers!</h1>
                </div>
                <div className="col-6" id="container-initialr">
                    <div className="col-6 bg-body-tertiary bg-dark">
                        <img src="./img/teclapedia_logo.svg" id="logo-register" alt=""/>
                    </div>
                    <div id="container-form-register">
                        <form className="row" id="data_form_register" onSubmit={handleSubmit}>
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
                            <p className="p-cond">Al registrarte, aceptas nuestras Condiciones. Obtén más información sobre cómo recopilamos, usamos y compartimos tus datos en la Política de privacidad, así como el uso que hacemos de las cookies y tecnologías similares en la Política de cookies.</p>
                            <button className="button_register" id="register_button" type="submit" disabled={pristine|submitting}>Registrarse</button>
                        </form>
                    </div>
                    <div className="row" id="allReadyRegistered">
                        <p>¿Ya tienes cuenta?</p>
                        <a href="../index.html">Inicia</a>
                    </div>
                </div>
            </div>           
        </>
    )
}

const createReduxForm = reduxForm({
    form:'firstRegister',
    validate
});

RegisterUI = createReduxForm(RegisterUI);

export default RegisterUI;