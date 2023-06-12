import './OtherDataSection.css'
import MoreInfoModal from './MoreInfoModal'
import{PersonFillExclamation} from 'react-bootstrap-icons'
export default function OtherDataSectionUI({userData, otherData,handleCloseModal,isModalVisible,handleOpenMorInfoModal}){
    return(
        <section className="otherData_container container mt-3 p-2" id="otherData_container">
            <div className='d-flex justify-content-between pe-2 '>
                <p className="h5 ms-3">Otros datos</p>
                <PersonFillExclamation id="more-info_icon" onClick={handleOpenMorInfoModal}/>
                {isModalVisible && <MoreInfoModal handleCloseModal={handleCloseModal} userData={userData}/>}
            </div>
            <div className="otherData_info ms-3 me-3 mb-3 p-2">
                {otherData[0]?.licencia !== null && <div className="otherData_licence mb-2"><span className="h6 p-2">Carnet: </span><span>{otherData[0]?.licencia}</span></div>}
                {otherData[0]?.hobbies !== null && <div className="otherData_hobbies mb-2"><span className="h6 p-2">Hobbies: </span><span>{otherData[0]?.hobbies}</span></div>}
                {otherData[0]?.idiomas !== null && <div className="otherData_languages mb-2"><span className="h6 p-2">Idiomas: </span><span>{otherData[0]?.idiomas}</span></div>}
                {otherData[0]?.otros_conocimientos !== null && <div className="otherData_otherKnoweled mb-2"><span className="h6 p-2">Otros conocimientos: </span><span>{otherData[0]?.otros_conocimientos}</span></div>}
            </div>
        </section>
    )
}