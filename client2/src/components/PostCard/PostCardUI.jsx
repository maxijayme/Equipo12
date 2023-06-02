import {Heart, HeartFill, Share} from 'react-bootstrap-icons'
import './PostCard.css'
export default function PostCardUI({userData, handleLike, like}) {
    return (
        <>
            <div className="PostCard-post container p-3 mb-3" id="post${postId++}">
                <div className="row d-flex flex-nowrap justify-content-left align-items-center">
                    <div id="PostCard-postImg_container">
                        <img src={userData.photo} alt="fotoUsuario" className="PostCard-photoPost img-fluid"/>
                    </div>
                    <div className="PostCard-post_header">
                        <p className="col text-dark">{userData.fullname}</p> 
                    </div>                 
                </div>
                <div className="row">
                    <p>${userData.texto_publicacion}</p>
                </div>
                {userData.imagen_publicacion!=='undefined' && <img src={userData.imagen_publicacion} className="img-fluid mx-auto d-block"/>}
                <div className="row">
                    <div className="PostCard-piePost m-1">
                        {like && <HeartFill onClick={handleLike}/>}
                        {!like && <Heart onClick={handleLike}/>}
                        <span>{userData.likes || 0}  </span>
                        <Share/>
                    </div>
                </div>
            </div>
        </>
    )
}
