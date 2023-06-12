import IsFriendButtonUI from "./IsFriendButtonUI"
import {URL} from '../../utils/url'
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/UsersContext";

export default function IsFriendButton({userData}) {
    const {jwt} = useContext(AppContext)
    const actualUserId = jwt.userId
    const [areFriends, setAreFriends]= useState("")
    const [idFriendshioReq, setIdFriendshioReq]= useState("")

    useEffect(()=>{
        if(actualUserId && userData.id_usuario){
            isFriend()
        }
    },[actualUserId, userData])

    async function handleFriendButton(){
        if(areFriends === 'Amigos'){
            const response = await fetch(`${URL}/pending_request`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    id_solicitud: idFriendshioReq,
                    estado: "eliminada"
                })
            })
            if(response.status === 200){
                setAreFriends('Solicitar amistad')  
            }
        }
        else if(areFriends === 'Solicitud pendiente'){
            const response = await fetch(`${URL}/pending_request`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    id_solicitud: idFriendshioReq,
                    estado: "rechazada"
                })
            })
            if(response.status === 200){
                setAreFriends('Solicitar amistad') 
            }
        }
        else if(areFriends=== 'Solicitar amistad'){
            const response = await fetch(`${URL}/pending_request/newRequest`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    logged_user_id: actualUserId,
                    other_user_id: userData.id_usuario
                })
            })
            if(response.status === 200){
                setAreFriends('Solicitud pendiente') 
                isFriend()
            }            
        }
    }

    async function isFriend(){
        try{
            const response = await fetch(`${URL}/pending_request?idUser=${actualUserId}&otherUser=${userData.id_usuario}`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const responseJson = await response.json();
            if(responseJson.estado === 'aceptada'){
                setAreFriends('Amigos')                
                setIdFriendshioReq(responseJson.id_solicitud)
            }
            else if(responseJson.estado === 'pendiente'){
                setAreFriends('Solicitud pendiente')
                setIdFriendshioReq(responseJson.id_solicitud)
            }
            else if(responseJson.estado === 'rechazada' || responseJson.estado === 'eliminada'){
                setAreFriends('Solicitar amistad')
                setIdFriendshioReq(responseJson.id_solicitud)
            }
            else if (responseJson.msj === 'No hay solicitudes pendientes'){
                setAreFriends('Solicitar amistad')

            }
            else{
                console.log('Ocurrió un error')
            }
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <>
            <IsFriendButtonUI userData={userData} areFriends={areFriends} actualUserId={actualUserId} handleFriendButton={handleFriendButton}/>
        </>
    )
}
