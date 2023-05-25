import 'bootstrap/dist/css/bootstrap.css';
import './AdminPanel.css'


export default function AdminPanelUI({questions, handleResponse}){
    return(
        <>
            <main className="container-fluid" id="questions">
                <div className="titleTable row d-flex ms-4 mb-2">
                    <h6 className="col">Título</h6>
                    <h6 className="col">Consulta</h6>
                    <h6 className="col">Usuario</h6>
                    <h6 className="col">Respuesta</h6>
                </div>
                <ul className="question-list" id="questionList">
                    
                    {questions && questions.map( question =>(
                        
                        <li className="question-list-item row" key = {question.id_consulta}>
                            <p className="col">{question.titulo}</p>
                            <p className="col">{question.texto}</p>
                            <p className="col">{question.username}</p>
                            <div className="col">
                                <textarea id="textResponse" />
                                <button className="confirm_delete green" onClick={()=>handleResponse(document.getElementById('textResponse').value, question.id_consulta )} >responder</button>
                            </div>
                            
                        </li>
                    )) }
                </ul>
            </main>
        </>
    )
}