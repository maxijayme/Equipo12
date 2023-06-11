import { isValid } from "redux-form";

export default function UserDataModalUI ({handleCloseEditModal,userData,handleDataInputChange,fullnameValue,phoneValue,emailValue,linkedinValue,cityValue,handleSubmit,phoneErrorMessage,emailErrorMessage,isValidForm}) {
    
    return (
        <div className="modal-dialog modal-dialog-centered" id="modal_userData" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-content align-items-center gap-4">
                <button type="button" className="btn-close align-self-end me-3" aria-label="Close" onClick={handleCloseEditModal}></button>
            <div className="modal-header justify-content-center w-100">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edita tus datos</h1>
            </div>
            <div className="modal-body h-3 w-100 d-flex flex-column">
                <input className="form-control" id="modal-userInput" type="text" placeholder={userData.fullname} value={fullnameValue} onChange={(e) => handleDataInputChange("fullname", e.target.value)}/>
                <input className="form-control" id="modal-userInput" type="text" placeholder={userData.phone} value={phoneValue} onChange={(e) => handleDataInputChange("phone", e.target.value)}/>
                {phoneErrorMessage && <p className="error-message">{phoneErrorMessage}</p>}
                <input className="form-control" id="modal-userInput" type="text" placeholder={userData.email} value={emailValue} onChange={(e) => handleDataInputChange("email", e.target.value)}/>
                {emailErrorMessage && <p className="error-message">{emailErrorMessage}</p>}
                <input className="form-control" id="modal-userInput" type="text" placeholder={userData.linkedin} value={linkedinValue} onChange={(e) => handleDataInputChange("linkedin", e.target.value)}/>
                <input className="form-control" id="modal-userInput" type="text" placeholder={userData.city} value={cityValue} onChange={(e) => handleDataInputChange("city", e.target.value)}/>
            </div>
            <div className="modal-footer gap-5">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseEditModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={!isValidForm}>Save changes</button>
            </div>
            </div>
        </div>
    );
}