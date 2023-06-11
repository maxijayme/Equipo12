import './FriendRequest.css'
import FriendRequestCard from '../FriendRequestCard'
import { useEffect, useState } from 'react'

export default function FriendRequestUI({allRequest,replyRequest}){
    const [fstart,setFstart] = useState("")
    useEffect(()=>{
        if(window.location.pathname ==='/friends'){
            console.log('llegue')
            setFstart("align-items-start")
        }
    },[])
    return(
        <section className={`friend_request_container ${fstart}`}>
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