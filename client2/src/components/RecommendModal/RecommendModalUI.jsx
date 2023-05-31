
import { useState } from "react";
import './RecommendModal.css'
export default function RecommendModalUI({handleCloseModal}) {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Input value:', inputValue);
    };
    
    return (
        <div id="modal">
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">Recomendar:</label>
                <input id="input" type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Enviar</button>
                <button type="submit" onClick={handleCloseModal}>Cancelar</button>
            </form>
        </div>
    );
}
