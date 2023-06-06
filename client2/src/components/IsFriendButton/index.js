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
            const response = await fetch(`${URL}/delete_friend?logged_user_id=${actualUserId}&other_user_id=${userData.id_usuario}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if(response.status === 200){
                setAreFriends('Solicitar amistad')  
            }
        }
        else if(areFriends === 'Solicitud de amistad pendiente'){
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
    }

    async function isFriend(){
        try{
            const response = await fetch(`${URL}/friend_request?logged_user_id=${actualUserId}&other_user_id=${userData.id_usuario}`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const responseJson = await response.json();
            setIdFriendshioReq(responseJson.id_solicitud)
            if(responseJson.msj === 'all ready friends'){
                setAreFriends('Amigos')
            }
            else if(responseJson.msj === 'friend request is pending'){
                setAreFriends('Solicitud de amistad pendiente')
            }
            else if(responseJson.msj === 'not yet friends or request pending'){
                setAreFriends('Solicitar amistad')
            }else{
                console.log('Ha ocurrido un error en el seridor')
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
