import { Link } from 'react-router-dom';
import './ProfileSection.css'
import {Telephone, Envelope, Linkedin, GeoAlt, Pencil} from 'react-bootstrap-icons'
import AppContext from "../../context/UsersContext";
import { useContext } from "react";
import Recommendations from '../Recommendations';
import IsFriendButton from '../IsFriendButton';

export default function ProfileSectionUI(props){
    const {userData, handleOpenModal, handleOpenDataModal } = props
    const {jwt} = useContext(AppContext)
    return(
        <>
            <div className="container user_data p-3 mb-3" id="ProfileSection-userData">
                <div className="row mb-2">
                    <Link to={`/profile/${userData.username}`}>
                        <div className="" id="ProfileSection-thirdPersonPhoto_container">
                            <img src={userData.photo} className="ProfileSection-photo justify-self-center" id="ProfileSection-thirdPersonPhoto" alt='user avatar'/>
                        </div>
                    </Link>     
                </div>
                    {window.location.pathname !=='/' && <IsFriendButton userData={userData}/>}           
                <div className="row">
                    <h3 className="ps-3" id="ProfileSection-fullname">{userData.fullname}</h3>
                </div>
                <div className="row  my-1 ps-3">
                    <p id="ProfileSection-userName">{userData.username}</p>
                </div>
                <div className="col ps-3"> 
                    <div className="col d-flex  my-1 align-items-baseline">
                        <Telephone className="me-2"/>
                        <p id="ProfileSection-phone">{userData.phone}</p>
                    </div>
                    <div className="col d-flex  my-1 align-items-baseline">
                        <Envelope className="me-2"/>
                        <p id="ProfileSection-email">{userData.email}</p>
                    </div>
                    <div className="col d-flex  my-1 align-items-baseline">
                        <Linkedin className="me-2"/>
                        <p id="ProfileSection-linkedin">/{userData.linkedin}</p>
                    </div>  
                </div>
                <div className="row ps-3">                        
                    <div  className="col d-flex  my-1 align-items-baseline">
                        <GeoAlt className="me-2"/>
                        <span id="ProfileSection-city">{userData.city}</span>
                    </div>
                </div>
                <div className="row ps-3 justify-content-end">
                    {jwt && jwt.userId === userData.id_usuario && <Pencil className='col-3' onClick={handleOpenDataModal}/>}
                </div>
            {jwt && jwt.userId !== userData.id_usuario && <button className='btn btn-primary mt-2' onClick={handleOpenModal}>Recomendar</button>}
            </div>
            {window.location.pathname !=='/' && <Recommendations userData={userData}/>}
        </>
    )
}