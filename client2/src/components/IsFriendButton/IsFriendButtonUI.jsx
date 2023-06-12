import { useEffect, useState } from 'react'
import './IsFriendButton.css'
export default function IsFriendButtonUI({areFriends, actualUserId, userData, handleFriendButton}) {
    const [colorBtn, setColorBtn] = useState('')
    useEffect(()=>{
        if(areFriends === 'Amigos'){
            setColorBtn('btn-outline-success')
        }else if(areFriends === 'Solicitar amistad'){
            setColorBtn('btn-outline-info')
        }else{
            setColorBtn('btn-outline-warning')
        }
    },[areFriends])
    return (
        <>
            {actualUserId && actualUserId !== userData.id_usuario && <button className={`btn ${colorBtn}`} id="IsFriendBtn" onClick={handleFriendButton}>{areFriends}</button>}
        </>
    )
}
