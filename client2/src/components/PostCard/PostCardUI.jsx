import {Heart, HeartFill, Share} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import './PostCard.css'
export default function PostCardUI({getMoment, postData, handleLike, like, likesCount}) {
    return (
        <>
            <div className="PostCard-post row p-3 mb-3" id="post${postId++}">
                <div className="row d-flex flex-nowrap justify-content-left align-items-center">
                    <Link to={`/profile/${postData.username}`} id="PostCard-postImg_container" className='ms-3'>
                            <img src={postData.photo} alt="fotoUsuario" className="PostCard-photoPost img-fluid"/>
                    </Link>
                    <div className="PostCard-post_header">
                        <p className="col text-dark h5">{postData.fullname}</p> 
                        <p className="col text-dark h6">{getMoment(postData.fecha_publicacion)}</p> 
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
