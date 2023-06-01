import 'bootstrap/dist/css/bootstrap.css';
import ProfileSection from '../../components/ProfileSection';
import Posts from '../../components/Posts';
import FriendRequest from '../../components/FriendRequest';

export default function FeedUI({userData}){
    return(
        <>
            <div className="row" id="main_container">
                <ProfileSection userData={userData}/>
                <Posts userData={userData}/>
                <FriendRequest/>
            </div>
        </>
    )
}