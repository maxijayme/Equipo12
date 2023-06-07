import FriendRequest from '../../components/FriendRequest';
import UsersSection from '../../components/UsersSection';
import './Friends.css';

export default function FriendUI({userData}) {
    return (<>
            <p className="h5 ps-3 pe-3">Solicitud de amistad</p>
            <FriendRequest className='row'/>
            
            <div className="row"> 
                <p className="h5 ps-3 pe-3">Teclers</p>               
                <UsersSection/>
            </div>
       
    </>)
}