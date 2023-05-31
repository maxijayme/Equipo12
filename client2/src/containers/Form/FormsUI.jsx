import React from "react";
import { Field, reduxForm } from 'redux-form';
import './Form.css'


function FormsUI({handleSubmit, pristine, submitting}){
    
    return (
        <>
       
        <header className="container_header p-3 mb-2">
            <div className="row">
                <h3 className="col">Crea tu perfil</h3>
                <img className="col" id="logo" src="../img/teclapedia_logo.svg" alt="logo"></img>
            </div>
        </header>
        <form onSubmit={handleSubmit}>
           <div className="container p-3 mb-2" id="first-container">
                <div className="row align-items-center" id="first-container-row">
                    <div className="col-3 px-1">
                        <img src="../img/avatar.jpeg" alt="Foto de perfil" id="fotoPerfil" name="profilePhoto"  />
                        <div id="upload">
                            <button
                            id="upload_widget"
                            className="cloudinary-button"
                            type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="col-9 d-flex-column px-4">
                        <Field
                            className="form-control mb-2"
                            placeholder="Teléfono"
                            type="text"
                            name="phone"
                            component="input"
                        />
                        <Field
                            className="form-control mb-2"
                            placeholder="Linkedin"
                            type="text"
                            name="linkedin"
                            component="input"
                        />
                        <Field
                            className="form-control mb-2"
                            placeholder="Ciudad"
                            type="text"
                            name="city"
                            component="input"
                        />
                        <Field
                            className="form-control mb-2"
                            placeholder="País"
                            type="text"
                            name="country"
                            component="input"
                        />
                    </div>
                </div>
           </div>
           <div className="container p-3 mb-2">
                <div className="row">
                    <p className="h4 text-dark">Estudios</p>
                </div>
                <Field className="form-select row mb-2" name="studiesLevel" component="select">
                    <option value="studiesLevel">Nivel de estudios</option>
                    <option value="sinEstudios">Sin estudios finalizados</option>
                    <option value="graduado">Graduado escolar</option>
                    <option value="eso">ESO</option>
                    <option value="bachiller">Bachiller</option>
                    <option value="gMedio">Grado medio</option>
                    <option value="gSuperior">Grado superior</option>
                    <option value="universitarios">Estudios universitarios</option>
                    <option value="master">Titulo de máster o postgrado</option>
                </Field>
                <Field
                    className="form-control row mb-2"
                    placeholder="Título"
                    type="text"
                    name="degree"
                    component="input"
                />
                <Field
                    className="form-control row mb-2"
                    placeholder="Centro"
                    type="text"
                    name="academy"
                    component="input"
                />
                
                <div className="row align-items-center">
                    <div className="d-flex col">
                        <label className="form-label align-self-center me-2" htmlFor="dateStartStudies" >Inicio:</label>
                        <Field
                            className="form-control"
                            type="date"
                            name="dateStartStudies"
                            component="input"
                        />
                    </div>
                    <div className="d-flex col">
                        <label className="form-label align-self-center me-2" htmlFor="dateEndStudies">Fin:</label>
                        <Field
                            className="form-control"
                            type="date"
                            name="dateEndStudies"
                            component="input"
                        />
                    </div>
                    <div className="d-flex col gap-2">
                        <Field type="checkbox" className="form-check-input col-1" name="stillStudying" component="input"/>
                        <label className="form-check-label col" htmlFor="stillStudying">Actualidad</label>
                    </div>
                </div>
           </div>
           <div className="container p-3 mb-2">
                <div className="row">
                    <p className="h4 text-dark">Experiencia laboral</p>
                </div>
                <Field
                    className="form-control row mb-2"
                    placeholder="Puesto"
                    type="text"
                    name="position"
                    component="input"
                />
                <Field
                    className="form-control row mb-2"
                    placeholder="Empresa"
                    type="text"
                    name="company"
                    component="input"
                />
                
                <div className="row align-items-center  mb-2">
                    <div className="d-flex col">
                        <label className="form-label align-self-center me-2" htmlFor="dateStartWorking">Inicio:</label>
                        <Field
                            className="form-control"
                            type="date"
                            name="dateStartWorking"
                            component="input"
                        />
                    </div>
                    <div className="d-flex col">
                        <label className="form-label align-self-center me-2" htmlFor="dateEndWorking">Fin:</label>
                        <Field
                            className="form-control"
                            type="date"
                            name="dateEndWorking"
                            component="input"
                        />
                    </div>
                    <div className="d-flex col gap-2">
                        <Field type="checkbox" className="form-check-input col-1" name="stillWorking" component="input"/>
                        <label className="form-check-label col" htmlFor="stillWorking">Actualidad</label>
                    </div>
                </div>
                <Field className="form-control row"
                    placeholder="Funciones desempeñadas..."
                    type="text"
                    name="tasks"
                    component="textarea"/>
           </div>
           <div className="container p-3 mb-2">
                <p className="h4 text-dark">Otros datos</p>
                    <div className="row mb-2">
                        <label className="form-label align-self-center col-2" htmlFor="licence">Carnet de conducir:</label>
                        <Field className="form-select col" name="licence" component="select">
                            <option value="sinCarnet">No</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                            <option value="ce">C+E</option>
                            <option value="d">D</option>
                            <option value="de">D+E</option>
                        </Field>
                        <Field type="checkbox" className="form-check-input col-1" name="availability" component="input"/>
                        <label className="form-check-label col" htmlFor="availability">Disponibilidad de incorporación inmediata</label>
                        <label className="form-check-label col" htmlFor="availability">Preferencia</label>
                        <Field className="form-select col" name="preference" component="select">
                            <option></option>
                            <option value="mañanas">Mañanas</option>
                            <option value="tardes">Tardes</option>
                            <option value="turnoPartido">Turno Partido</option>
                            <option value="turnoRotatorio">Turno Rotatorio</option>
                            <option value="indiferente">Indiferente</option>
                        </Field>
                    </div>
                   
                    <Field className="form-control row mb-2"
                    placeholder="Cuéntanos tus hobbies..."
                    type="text"
                    name="hobbies"
                    component="textarea"/>
                
                    <Field className="form-control row mb-2"
                    placeholder="Cuéntanos tus conocimientos..."
                    type="text"
                    name="extra"
                    component="textarea"/>
            
                
                    <Field
                        className="form-control row mb-2"
                        placeholder="Idiomas"
                        type="text"
                        name="languages"
                        component="input"
                    />
                  
                <div className="row justify-content-center gap-4">
                    <button className="confirm_delete" type="submit" id="create" disabled={pristine|submitting}>Crear perfil</button>
                    <button className="confirm_delete green" type="button" id="cancel">Cancelar</button>
                </div>
           </div>
       </form>
       <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
       </> 
    )

}



const createReduxForm = reduxForm({form:'register'});

FormsUI = createReduxForm(FormsUI);

export default FormsUI;