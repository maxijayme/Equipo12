import {Heart, HeartFill, Share} from 'react-bootstrap-icons'
import './PostCard.css'
export default function PostCardUI({postData, handleLike, like, likesCount}) {
    return (
        <>
            <div className="PostCard-post container p-3 mb-3" id="post${postId++}">
                <div className="row d-flex flex-nowrap justify-content-left align-items-center">
                    <div id="PostCard-postImg_container">
                        <img src={postData.photo} alt="fotoUsuario" className="PostCard-photoPost img-fluid ps-2"/>
                    </div>
                    <div className="PostCard-post_header">
                        <p className="col text-dark h5">{postData.fullname}</p> 
                    </div>                 
                </div>
                <div className="row my-2">
                    <p>{postData.texto_publicacion}</p>
                </div>
                {postData.imagen_publicacion!=='undefined' && <img src={postData.imagen_publicacion} className="img-fluid mx-auto d-block"/>}
                <div className="row mt-2">
                    <div className="PostCard-piePost m-1">
                        {like && <HeartFill onClick={handleLike}/>}
                        {!like && <Heart onClick={handleLike}/>}
                        <span>{likesCount || 0}  </span>
                        <Share/>
                    </div>
                </div>
            </div>
        </>
    )
}
