
import {Camera, CameraReels, Paperclip} from 'react-bootstrap-icons'
import UploadWidget from '../../utils/CloudinaryUploadWidget'

export default function CreatePostUI({handleChange, handlePost, handleOnUpload}) {
    
    return (
        <>
            <div id='newpost' className="createPosts-newPost container p-3 mb-3">
                <div className="createPosts-row d-flex justify-content-left align-items-center mb-2">
                    <img src="" id="postImg" alt="fotoUsuario" className="createPosts-photoPost img-fluid"/>
                    <p className="createPosts-col h4 text-dark">Comparte algo...</p>
                </div>                
                <div className="createPosts-row m-1">
                    <textarea className="createPosts-form-control" name="postText" id="postContent" rows="5" placeholder="¿Qué quieres compartir?..." onChange={handleChange} ></textarea>
                    <p id="attachedImg"></p   >
                </div>
                <div className="createPosts-pieNewPost row m-1 d-flex justify-content-between">
                    <div className="createPosts-attach col d-flex align-items-center">
                        <UploadWidget onUpload={handleOnUpload} className="createPosts-cloudinary-button">
                            {({ open }) => {
                                function handleOnClick(e) {
                                    e.preventDefault();
                                    open();
                                }
                                return (
                                    <button onClick={handleOnClick}>
                                        <Camera className="me-2"/>
                                    </button>
                                )
                            }
                            } 
                        </UploadWidget>
                        <CameraReels className="me-2"/>
                        <Paperclip className="me-2"/>
                    </div>
                    <div className="createPosts-col d-flex justify-content-end" >
                        <button className="createPosts-confirm_delete" id='postBtn'onClick={handlePost}>Publicar</button>
                    </div>
                </div>                
            </div>
        </>
    )
}
