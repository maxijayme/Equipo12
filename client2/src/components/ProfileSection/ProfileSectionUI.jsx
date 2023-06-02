import './ProfileSection.css'
import {Telephone, Envelope, Linkedin, GeoAlt} from 'react-bootstrap-icons'
import AppContext from "../../context/UsersContext";
import { useContext } from "react";

export default function ProfileSectionUI(props){
    const {userData, handleOpenModal } = props
    const {jwt} = useContext(AppContext)
    return(        
            <div className="profile_section_container p-3 mb-3" id="ProfileSection-userData">
                <div className="row mb-2" id="ProfileSection-thirdPersonPhoto_container">
                    <img src={userData.photo} className="ProfileSection-photo" id="ProfileSection-thirdPersonPhoto" alt='user avatar'/>
                </div>
                <div className="row">
                    <h3 id="ProfileSection-fullname">{userData.fullname}</h3>
                </div>
                <div className="row  my-1">
                    <p id="ProfileSection-userName">{userData.username}</p>
                </div>
                <div className="col"> 
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
                <div className="row">                        
                    <div  className="col d-flex  my-1 align-items-baseline">
                        <GeoAlt className="me-2"/>
                        <span id="ProfileSection-city">{userData.city}</span>
                    </div>
                </div>
            {jwt && jwt.userId !== userData.id_usuario && <button className='btn btn-primary' onClick={handleOpenModal}>Recomendar</button>}
            </div>         
    )
}