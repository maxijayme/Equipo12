import 'bootstrap/dist/css/bootstrap.css';
import ProfileSection from '../../components/ProfileSection';

export default function FeedUI({userData}){
    return(
            <div className="container-fluid h-auto">
                <ProfileSection userData={userData}/>
            </div>
    )
}