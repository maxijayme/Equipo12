import './Feed.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProfileSection from '../../components/ProfileSection';
import Posts from '../../components/Posts';
import FriendRequest from '../../components/FriendRequest';
import { Link } from 'react-router-dom'

export default function FeedUI({userData, updatePostList, setUpdatePostList}){
    return(
        <>
            <div className="row" id="feed_main_container">
                <div className="col-xl-2 col-md-3 col-sm-11 py-3 mb-2" id="feed_col_left">
                    <ProfileSection userData={userData}/>
                </div>
                <div className="col-xl-5 col-md-7 col-sm-11" id="feed_col_cen">
                    <Posts userData={userData} updatePostList={updatePostList}/>
                </div>
                <div className="col-2" id="feed_col_right">
                    <div className="friend_request_like_container">
                        <p className="h5 ps-3 pe-3">Solicitud de amistad</p>
                        <Link to='/friends'>                        
                            Buscar teclers
                        </Link>
                    </div>
                    <FriendRequest setUpdatePostList={setUpdatePostList} updatePostList={updatePostList}/>
                </div>
            </div>
        </>
    )
}