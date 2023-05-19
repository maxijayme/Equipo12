import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import 'bootstrap/dist/css/bootstrap.css';
import './AdminPanel.css'


export default function AdminPanelUI({questions, handleResponse}){
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main className="container-fluid" id="questions">
                <ul className="question-list">
                    <li className="question-list-item">
                        <h6>Título</h6>
                        <h6>Consulta</h6>
                        <h6>Usuario</h6>
                        <h6>Respuesta</h6>
                    </li>
                    {questions && questions.map( question =>(
                        
                        <li className="question-list-item" key = {question.id_consulta}>
                            <p>{question.titulo}</p>
                            <p>{question.texto}</p>
                            <p>{question.username}</p>
                            <div>
                                <textarea id="textResponse" />
                                <button onClick={()=>handleResponse(document.getElementById('textResponse').value, question.id_consulta )} >responder</button>
                            </div>
                        </li>
                    )) }
                </ul>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}