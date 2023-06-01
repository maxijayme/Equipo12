import 'bootstrap/dist/css/bootstrap.css';
import ProfileSection from '../../components/ProfileSection';
import Posts from '../../components/Posts';

export default function FeedUI({userData}){
    return(
        <>
            <div className="container-fluid h-auto">
                <ProfileSection userData={userData}/>
            </div>
            <Posts userData={userData}/>
        </>
    )
}