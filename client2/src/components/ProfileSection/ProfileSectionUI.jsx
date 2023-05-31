
import './ProfileSection.css'
import {Telephone, Envelope, Linkedin, GeoAlt} from 'react-bootstrap-icons'
import AppContext from "../../context/UsersContext";
import { useContext } from "react";

export default function ProfileSectionUI(props){
    const {userData, handleOpenModal } = props
    const {jwt} = useContext(AppContext)
    console.log(props)
    return(
        <div className="col-xl-2 col-md-2 py-3" id="col_left">
            <div className="container user_data p-3 mb-3" id="userData">
                <div className="row mb-2" id="thirdPersonPhoto_container">
                    <img src={userData.photo} className="photo" id="thirdPersonPhoto" alt='user avatar'/>
                </div>
                <div className="row">
                    <h3 id="fullname">{userData.fullname}</h3>
                </div>
                <div className="row  my-1">
                    <p id="userName">{userData.username}</p>
                </div>
                <div className="col"> 
                    <div className="col d-flex  my-1 align-items-baseline">
                        <Telephone className="me-2"/>
                        <p id="phone">{userData.phone}</p>
                    </div>
                    <div className="col d-flex  my-1 align-items-baseline">
                        <Envelope className="me-2"/>
                        <p id="email">{userData.email}</p>
                    </div>
                    <div className="col d-flex  my-1 align-items-baseline">
                        <Linkedin className="me-2"/>
                        <p id="linkedin">/{userData.linkedin}</p>
                    </div>  
                </div>
                <div className="row">                        
                    <div  className="col d-flex  my-1 align-items-baseline">
                        <GeoAlt className="me-2"/>
                        <span id="city">{userData.city}</span>
                    </div>
                </div>
            {jwt.userId !== userData.id_usuario && <button className='btn btn-primary' onClick={handleOpenModal}>Recomendar</button>}
            </div> 
        </div>
    )
}