import './AdminQuestion.css';

export default function AdminQuestionsUI({questions, handleResponse}){
    return(
        <>
            <div className="questions_container" id="questions">
                <div className="titleTable row d-flex ms-4 mb-3">
                    <h4 className="col">Título</h4>
                    <h4 className="col">Consulta</h4>
                    <h4 className="col">Usuario</h4>
                    <h4 className="col">Respuesta</h4>
                </div>
                <ul className="question-list" id="questionList">
                    
                    {questions && questions.map( question =>(
                        
                        <li className="question-list-item row d-flex" key = {question.id_consulta}>
                            <div className="col-3">
                                <p className="">{question.titulo}</p>
                            </div>
                            <div className="col-3">
                                <p className="">{question.texto}</p>
                            </div>
                            <div className="col-3">
                                <p className="">{question.username}</p>
                            </div>
                            <div className="col-3 d-flex flex-column">
                                <textarea id="textResponse" />
                                <button className="confirm_delete green align-self-center" onClick={()=>handleResponse(document.getElementById('textResponse').value, question.id_consulta )} >responder</button>
                            </div>
                            
                        </li>
                    )) }
                </ul>
            </div>
        </>
    )
}