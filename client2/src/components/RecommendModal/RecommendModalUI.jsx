
import { useState } from "react";
import './RecommendModal.css'
export default function RecommendModalUI({handleCloseModal, handleInputChange, handleSubmit, inputValue}) {
    
    return (
        <div className="modal-dialog modal-dialog-centered" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-content align-items-center gap-4">
                <button type="button" className="btn-close align-self-end me-3" aria-label="Close" onClick={handleCloseModal}></button>
            <div className="modal-header justify-content-center w-100">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Escribe tu recomendación</h1>
            </div>
            <div className="modal-body h-3 w-100 d-flex">
                <textarea id="modal-input" value={inputValue} onChange={handleInputChange} maxLength="500" rows="1" cols="50" />
            </div>
            <div className="modal-footer gap-5">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
            </div>
            </div>
        </div>
    );
}
