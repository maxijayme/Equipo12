import './FriendRequest.css'
import AppContext from '../../context/UsersContext'
import { useContext } from 'react'
import FriendRequestCardUI from '../FriendRequestCard/FriendRequestCardUI'

export default function FriendRequestUI({allRequest}){
    return(
        <section className="friend_request ">
            <div className="like_container">
                <p className="h5 ps-3">Solicitud de amistad</p>
                <a className="pe-3" href="../amigos/index.html">Ver todas</a>
            </div>
            {
                allRequest?.map((request,i)=>{
                    return (<FriendRequestCardUI
                        photo={request.photo}
                        fullname={request.fullname}
                        idUser={request.id_solicitante}
                        idSolicitud={request.id_solicitud}
                        username={request.username}
                        key={i}
                    />)
                })
            }
        </section>
    )
}