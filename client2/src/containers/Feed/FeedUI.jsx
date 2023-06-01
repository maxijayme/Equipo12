import 'bootstrap/dist/css/bootstrap.css';
import ProfileSection from '../../components/ProfileSection';
import FriendRequest from '../../components/FriendRequest';

export default function FeedUI({userData}){
    return(
        <>
            <div className="container-fluid h-auto">
                <ProfileSection userData={userData}/>
            </div>
            <div className="container-fluid h-auto">
                <FriendRequest/>
            </div>
        </>
    )
}