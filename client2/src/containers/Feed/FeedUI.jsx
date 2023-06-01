import 'bootstrap/dist/css/bootstrap.css';
import ProfileSection from '../../components/ProfileSection';
import FriendRequest from '../../components/FriendRequest';
import Posts from '../../components/Posts';

export default function FeedUI({userData}){
    return(
        <>
            <div className="row" id="main_container">
                <ProfileSection userData={userData}/>
                <Posts userData={userData}/>
            </div>
            <div className="container-fluid h-auto">
                <FriendRequest/>
            </div>
        </>
    )
}