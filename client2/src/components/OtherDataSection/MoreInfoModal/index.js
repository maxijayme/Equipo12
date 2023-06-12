import MoreInfoModalUI from "./MoreInfoModal"
import './MoreInfoModal.css'
export default function MoreInfoModal({userData, handleCloseModal}) {
    return (
        <>
            <MoreInfoModalUI userData={userData} handleCloseModal={handleCloseModal}/>
        </>
    )
}
