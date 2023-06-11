import { Link } from 'react-router-dom';
import './ProfileSection.css'
import {Telephone, Envelope, Linkedin, GeoAlt} from 'react-bootstrap-icons'
import AppContext from "../../context/UsersContext";
import { useContext } from "react";
import IsFriendButton from '../IsFriendButton';

export default function ProfileSectionUI(props){
    const {userData, handleOpenModal } = props
    const {jwt} = useContext(AppContext)
    return(
        <>
            <div className="container user_data p-3" id="ProfileSection-userData">
                <div className="row mb-2 pe-3 align-items-end justify-content-between" id="profile_header">
                    <Link to={`/profile/${userData.username}`} className="w-50">
                        <div id="ProfileSection-thirdPersonPhoto_container">
                            <img src={userData.photo} className="ProfileSection-photo justify-self-center" id="ProfileSection-thirdPersonPhoto" alt='user avatar'/>
                        </div>
                    </Link>     
                    {window.location.pathname !=='/' && <IsFriendButton userData={userData}/>}           
                </div>
                <div className="col ps-3" id="ProfileSection-user-info"> 
                    <div id="ProfileSection-fullname_container">
                        <h5 id="ProfileSection-fullname">{userData.fullname}</h5>
                    </div>
                    <div className="col d-flex  align-items-baseline">
                        <p id="ProfileSection-userName">{userData.username}</p>
                    </div>
                    <div className="col d-flex  align-items-baseline">
                        <Telephone className="me-2"/>
                        <p id="ProfileSection-phone">{userData.phone}</p>
                    </div>
                    <div className="col d-flex  align-items-baseline">
                        <Envelope className="me-2"/>
                        <p id="ProfileSection-email">{userData.email}</p>
                    </div>
                    <div className="col d-flex  align-items-baseline">
                        <Linkedin className="me-2"/>
                        <p id="ProfileSection-linkedin">/{userData.linkedin}</p>
                    </div>  
                    <div  className="col d-flex  align-items-baseline">
                        <GeoAlt className="me-2"/>
                        <span id="ProfileSection-city">{userData.city}</span>
                    </div>
                </div>
            {jwt && jwt.userId !== userData.id_usuario && <button className='btn btn-primary mt-2' id="profile_recommentadion_button" onClick={handleOpenModal}>Recomendar</button>}
            </div>
        </>
    )
}