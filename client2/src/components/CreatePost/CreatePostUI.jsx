
import {Camera, CameraReels, Paperclip} from 'react-bootstrap-icons'
import UploadWidget from '../../utils/CloudinaryUploadWidget'
import './CreatePost.css'
export default function CreatePostUI({handleChange, handlePost, handleOnUpload,textareaRef,userImg, uploadImgName}) {
    
    return (
        <>
            <div id='newpost' className="createPosts-newPost container p-3 mb-3">
                <div className="row d-flex justify-content-left align-items-center mb-2">
                    <div id="createPosts-postImg_container" className='ms-3'>
                        <img src={userImg} id="createPosts-postImg" alt="fotoUsuario" className="createPosts-photoPost img-fluid"/>
                    </div>
                    <p className="col h5 text-dark">Comparte algo...</p>
                </div>                
                <div className="createPosts row m-1">
                    <textarea ref={textareaRef} className="createPosts form-control" name="postText" id="createPosts-postText" rows="5" placeholder="¿Qué quieres compartir?..." onChange={handleChange} ></textarea>
                    <p id="createPosts-attachedImg">{uploadImgName}</p   >
                </div>
                <div className="createPosts-pieNewPost row m-1 d-flex justify-content-between">
                    <div className="createPosts-attach col d-flex align-items-center">
                        <UploadWidget onUpload={handleOnUpload}>
                            {({ open }) => {
                                function handleOnClick(e) {
                                    e.preventDefault();
                                    open();
                                }
                                return (
                                    <button className="createPosts-cloudinary-button" onClick={handleOnClick}>
                                        <Camera className="me-2"/>
                                    </button>
                                )
                            }
                            } 
                        </UploadWidget>
                        <CameraReels className="me-2"/>
                        <Paperclip className="me-2"/>
                    </div>
                    <div className="createPosts col d-flex justify-content-end" >
                        <button className="createPosts-confirm_delete" id='createPosts-botonPublicar' onClick={handlePost}>Publicar</button>
                    </div>
                </div>                
            </div>
        </>
    )
}
