
export default function IsFriendButtonUI({areFriends, actualUserId, userData, handleFriendButton}) {
    
    return (
        <>
            {actualUserId && actualUserId !== userData.id_usuario && <button onClick={handleFriendButton}>{areFriends}</button>}
        </>
    )
}
