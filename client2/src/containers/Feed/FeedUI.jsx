import 'bootstrap/dist/css/bootstrap.css';
import ProfileSection from '../../components/ProfileSection';
import Posts from '../../components/Posts';

export default function FeedUI({userData}){
    return(
        <>
            <div className="row" id="main_container">
                <ProfileSection userData={userData}/>
                <Posts userData={userData}/>
            </div>
        </>
    )
}