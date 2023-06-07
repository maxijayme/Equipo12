import './UserCard.css'
import { Link } from 'react-router-dom'
import IsFriendButton from '../IsFriendButton'

export default function UserCardUI({userData,stateFlag}) {
    return (
        <div className="userCard_container m-2 p-3">
            <Link to={`/profile/${userData.username}`}>
                <div className='text-center mb-2'><img className="cardUser_photo" src={userData.photo} alt="" /></div>
                <div className="cardUser_name"><p className="h5 text-center">{userData.fullname}</p></div>
            </Link>
            <div className="cardUser_button">
                <IsFriendButton userData={userData}/>
            </div>
        </div>
    )
}