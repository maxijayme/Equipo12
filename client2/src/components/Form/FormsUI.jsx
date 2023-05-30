import React from "react";
import { Field, reduxForm } from 'redux-form';

function FormsUI({handleSubmit, pristine, submitting}){
    
    return (
        <>
       <form onSubmit={handleSubmit}>
           <div className="row">
                <header className="row">
                    <h3 className="col-6">Crea tu perfil</h3>
                    <img className="col-6" id="logo" src="../img/teclapedia_logo.svg" alt="logo"></img>
                </header>
           </div>
           <div className="container p-3 mb-2" id="first-container">
                <div className="row align-items-center" id="first-container-row">
                    <div className="col-3 px-1">
                        <img src="./img/avatar.jpg" alt="Foto de perfil" id="fotoPerfil" name="profilePhoto"  />
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
                    <div className="col-8 d-flex-column px-4">
                        <Field
                            className="form-control"
                            placeholder="Teléfono"
                            type="text"
                            name="phone"
                            component="input"
                        />
                        <Field
                            className="form-control"
                            placeholder="Linkedin"
                            type="text"
                            name="linkedin"
                            component="input"
                        />
                        <Field
                            className="form-control"
                            placeholder="Ciudad"
                            type="text"
                            name="city"
                            component="input"
                        />
                        <Field
                            className="form-control"
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
                <select className="form-select" name="estudios" id="studies">
                    <option value="studiesLevel">Nivel de estudios</option>
                    <option value="sinEstudios">Sin estudios finalizados</option>
                    <option value="graduado">Graduado escolar</option>
                    <option value="eso">ESO</option>
                    <option value="bachiller">Bachiller</option>
                    <option value="gMedio">Grado medio</option>
                    <option value="gSuperior">Grado superior</option>
                    <option value="universitarios">Estudios universitarios</option>
                    <option value="master">Titulo de máster o postgrado</option>
                </select>
                <input type="text" className="form-control" name="degree" id="degree" placeholder="Título" />
                <input type="text" className="form-control" name="academy" id="academy" placeholder="Centro"/>
                <div className="row align-items-center">
                    <div className="d-flex col">
                        <label className="form-label align-self-center" htmlFor="dateStartStudies" >Inicio:</label>
                        <input type="date" className="form-control" name="dateStartStudies" id="dateStartStudies" />
                    </div>
                    <div className="d-flex col">
                        <label className="form-label align-self-center" htmlFor="dateEndStudies">Fin:</label>
                        <input type="date" className="form-control" name="dateEndStudies" id="dateEndStudies"/>
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
                    className="form-control"
                    placeholder="Puesto"
                    type="text"
                    name="position"
                    component="input"
                />
                <Field
                    className="form-control"
                    placeholder="Empresa"
                    type="text"
                    name="company"
                    component="input"
                />
                
                <div className="row align-items-center">
                    <div className="d-flex col">
                        <label className="form-label align-self-center" htmlFor="dateStartWorking">Inicio:</label>
                        <input type="date" className="form-control" name="dateStartWorking" id="dateStartWorking"/>
                    </div>
                    <div className="d-flex col">
                        <label className="form-label align-self-center" htmlFor="dateEndWorking">Fin:</label>
                        <input type="date" className="form-control" name="dateEndWorking" id="dateEndWorking"/>
                    </div>
                    <div className="d-flex col gap-2">
                        <Field type="checkbox" className="form-check-input col-1" name="stillWorking" component="input"/>
                        <label className="form-check-label col" htmlFor="stillWorking">Actualidad</label>
                    </div>
                </div>
                <textarea className="form-control" name="tasks" id="tasks" rows="7" placeholder="Funciones desempeñadas..." ></textarea>
           </div>
           <div className="container p-3 mb-2">
                <p className="h4 text-dark">Otros datos</p>
                <label className="form-label align-self-center" htmlFor="licence">Fin:</label>
                <Field className="form-select col" name="licence" component="select">
                    <option value="sinCarnet">No</option>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="ce">C+E</option>
                    <option value="d">D</option>
                    <option value="de">D+E</option>
                </Field>
                <div className="d-flex col gap-2">
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
                    <textarea className="form-control" name="hobbies" id="hobbies" rows="7" placeholder="Cuéntanos tus hobbies..." ></textarea>
                    <textarea className="form-control" name="extra" id="extra" rows="7" placeholder="Cuéntanos tus conocimientos..." ></textarea>
                    
                    <Field
                        className="form-control"
                        placeholder="Idiomas"
                        type="text"
                        name="languages"
                        component="input"
                    />
                    
                </div>
                <div className="row justify-content-center gap-4">
                    <button className="confirm_delete" type="submit" id="create" disabled={pristine|submitting}>Crear perfil</button>
                    <button className="confirm_delete green" type="button" id="cancel">Cancelar</button>
                </div>
           </div>
       </form>
       </> 
    )

}



const createReduxForm = reduxForm({form:'register'});

FormsUI = createReduxForm(FormsUI);

export default FormsUI;