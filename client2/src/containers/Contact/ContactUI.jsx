import './Contact.css';
import { ArrowLeftSquareFill, Check } from 'react-bootstrap-icons';
import { useState } from "react";
const URL = 'http://localhost:3001';
const userId = localStorage.getItem("userIdTeclapedia")

export default function ContactUI(){
    const[contact, setContact] = useState(false);

    const [form, setForm] = useState({
        userId:1,
        title:"",
        question:"",
        subject:""
    })

    function handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setForm(values => ({...values, [name]: value}))
    }

    async function handleSubmit(event){
        event.preventDefault();
        await fetch(`${URL}/help`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
        setForm({
            title:"",
            question:"",
            subject:""
        })
        setContact(true)
    }

    function handleCloseMsg(event){
        event.preventDefault();
        setContact(false)
    }

    return(
        <main className="container-fluid">
            <div className="row gb-5" id="main_container">
                <div className="row" id="options_menu">
                    <ul>
                        <li>
                            <a href="#">Editar perfil</a> 
                        </li>
                        <li>
                            <a href="#">Seguridad</a> 
                        </li>
                        <li>
                            <a >Cerrar sesión</a> 
                        </li>
                    </ul>
                </div>
                <div className="col-2" id="col_left">
                    <div className="container container_contact p-3 pb-5 my-3" id="col_left-container">
                        <div className="row">
                            <ul className="options_list">
                                <li>
                                    <i className="bi bi-person-lines-fill"></i>
                                    <a href="#">Editar perfil</a> 
                                </li>
                                <li>
                                    <i className="bi bi-shield-lock-fill"></i>
                                    <a href="#">Seguridad</a> 
                                </li>
                                <li>
                                    <i className="bi bi-door-open-fill"></i>
                                    <a id="closeSession">Cerrar sesión</a> 
                                </li>
                            </ul>
                        </div>
                        <button id="deleteAccount">
                            <i className="bi bi-x-square-fill"></i>
                            Eliminar cuenta</button>
                    </div>
                </div>
                <div className="col" id="col_right">
                    {!contact? <div className="container p-3 pb-5 my-3" id="container_help">
                        <div className="row mb-3 d-flex">
                            <div className="col-1 ms-1">
                                <ArrowLeftSquareFill/>
                            </div>
                            <div className="col"><h4 className="">¿Necesitas ayuda?</h4></div>
                        </div>
                        <form className="row">
                            <input className="form-control mx-3 mb-3" type="text" name="title" value={form.title} id="" placeholder="Título" onChange={handleInputChange} />
                            <textarea className="form-control mx-3 mb-3" type="text" name="question" value={form.question} id="" placeholder="Consulta" onChange={handleInputChange} />
                            <select className="form-select mx-3 mb-3" name="subject" onChange={handleInputChange}>
                                <option disabled selected>Elige una opción</option>
                                <option value="personal data">Datos personales</option>
                                <option value="security">Seguridad</option>
                                <option value="privacy">Privacidad</option>
                                <option value="content">Contenido</option>
                                <option value="other_questions">Otras consultas</option>
                            </select>
                            <div className="row d-flex justify-content-center">
                                <button className="confirm_delete green" onClick={handleSubmit}>Enviar</button>
                            </div>
                        </form>
                    </div> : 
                    <div className="alert alert-success alert-white rounded" id="consultSended">
                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={handleCloseMsg}>×</button>
                        <div className="icon"><Check className="icon"/></div>
                        <strong>Gracias por contactarnos!</strong> Responderemos tu consulta lo antes posible!
                    </div>}
                </div>
            </div>
            <div id="loader">            
                <div className="spinner"></div>
                <span>Eliminando cuenta...</span>
            </div>
            <div id="loader2">            
                <div className="spinner"></div>
                <span>Cerrando sesión...</span>
            </div>
        </main>
    )
}