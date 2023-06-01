import './FriendRequestCard.css'
import { Link } from 'react-router-dom'

export default function FriendRequestCardUI({photo,fullname,idUser,idSolicitud,username}){
    return (
        <div className="request_card_container ms-3 me-3 p-2"> 
            <div className="request_container_profile">
                <Link to={`/profile/${username}`}>
                    <div className="friend_photo"><img src={photo} alt="userPhoto"/></div>
                </Link>
                <div>
                    <span>{fullname}</span>
                    {/* <span class="gray">2 hours ago</span> */}
                </div>
            </div>
            <div className="button_container">
                <button className="confirm_delete">Confirm</button>
                <button className="confirm_delete green">Delete</button>
            </div>
        </div>
    )
}