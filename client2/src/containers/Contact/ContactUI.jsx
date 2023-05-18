import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import './Contact.css';
import { ArrowLeftSquareFill } from 'react-bootstrap-icons';
import { useState } from "react";
const URL = 'http://localhost:3001';
const userId = localStorage.getItem("userIdTeclapedia")

export default function ContactUI(){

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
    }

    return(
        <>
            <header>
                <Navbar />
            </header>
            <main className="container-fluid">
                    <div className="row" id="main_container">
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
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <ArrowLeftSquareFill/>
                                    </div>
                                    <div className="col">¿Necesitas ayuda?</div>
                                </div>
                                <form className="row">
                                    <input className="form-control mx-3" type="text" name="title" value={form.title} id="" placeholder="Título" onChange={handleInputChange} />
                                    <input className="form-control mx-3" type="text" name="question" value={form.question} id="" placeholder="Consulta" onChange={handleInputChange} />
                                    <select className="form-select" name="subject" onChange={handleInputChange}>
                                        <option disabled selected>Elige una opción</option>
                                        <option value="personal data">Datos personales</option>
                                        <option value="security">Seguridad</option>
                                        <option value="privacy">Privacidad</option>
                                        <option value="content">Contenido</option>
                                        <option value="other_questions">Otras consultas</option>
                                    </select>
                                    <button onClick={handleSubmit}>Enviar</button>
                                </form>
                            </div>
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
            <footer>
                <Footer/>
            </footer>
        </>
    )
}