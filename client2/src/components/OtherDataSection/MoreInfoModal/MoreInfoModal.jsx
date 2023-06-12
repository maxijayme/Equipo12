import ExpercienceSection from '../../ExperienceSection'
import EducationSection from '../../EducationSection'

export default function MoreInfoModalUI({userData, handleCloseModal}) {
    return (
        <div className="modal-dialog modal-dialog-centered" id="modal_moreInfo" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            {/* <div id="modal-data-container"> */}
                <div className="modal-content align-items-center gap-4">
                    <button type="button" className="btn-close align-self-end me-3 mt-2" aria-label="Close" onClick={handleCloseModal}></button>
                    <div className="modal-body h-3 w-100 d-flex flex-column">
                        <ExpercienceSection userData={userData}/>
                        <EducationSection userData={userData}/>
                    </div>
                    <div className="modal-footer gap-5 mb-3">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}
