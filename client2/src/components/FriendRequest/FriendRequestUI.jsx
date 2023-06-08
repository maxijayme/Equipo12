import './FriendRequest.css'
import FriendRequestCard from '../FriendRequestCard'

export default function FriendRequestUI({allRequest,replyRequest}){
    return(
        <section className="friend_request_container">
            {
                allRequest.length>0 ? 
                allRequest.map((request,i)=>{
                    return (<FriendRequestCard
                        photo={request.photo}
                        fullname={request.fullname}
                        idUser={request.id_solicitante}
                        idSolicitud={request.id_solicitud}
                        username={request.username}
                        key={i}
                        replyRequest={replyRequest}
                    />)
                })
                : <p>No hay solicitudes pendientes</p>
            }
        </section>
    )
}