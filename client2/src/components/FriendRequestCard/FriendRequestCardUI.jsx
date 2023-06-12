import './FriendRequestCard.css'
import { Link } from 'react-router-dom'

export default function FriendRequestCardUI({photo,fullname,idUser,idSolicitud,username,replyRequest,setStateFlag}){
    return (
        <div className="request_card_container p-2 mb-3"> 
            <div className="requestcard_container_profile">
                <Link to={`/profile/${username}`}>
                    <div className="request_card_friend_photo"><img className="request_card_friend_photo" src={photo} alt="userPhoto"/></div>
                </Link>
                <div>
                    <span>{fullname}</span>
                </div>
            </div>
            <div className="request_card_button_container">
                <button className="confirm_delete" onClick={() => replyRequest({id_solicitud:idSolicitud,estado:'aceptada'})}>Confirm</button>
                <button className="confirm_delete green" onClick={() => replyRequest({id_solicitud:idSolicitud,estado:'rechazada'})}>Delete</button>
            </div>
        </div>
    )
}