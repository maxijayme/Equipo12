import './Feed.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProfileSection from '../../components/ProfileSection';
import Posts from '../../components/Posts';
import FriendRequest from '../../components/FriendRequest';

export default function FeedUI({userData}){
    return(
        <>
            <div className="row" id="feed_main_container">
                <div className="col-xl-3 col-md-2 py-3" id="feed_col_left">
                    <ProfileSection userData={userData}/>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-11 py-3" id="feed_col_cen">
                    <Posts userData={userData}/>
                </div>
                <div className="col-3" id="feed_col_right">
                    <FriendRequest/>
                </div>
            </div>
        </>
    )
}