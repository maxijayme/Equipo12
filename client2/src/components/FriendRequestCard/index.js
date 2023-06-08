import FriendRequestCardUI from "./FriendRequestCardUI";

export default function FriendRequestCard({photo,fullname,idUser,idSolicitud,username,replyRequest}){    

    return (
        <FriendRequestCardUI  photo={photo}
        fullname={fullname}
        idUser={idUser}
        idSolicitud={idSolicitud}
        username={username}
        replyRequest={replyRequest}
        />
    )
}