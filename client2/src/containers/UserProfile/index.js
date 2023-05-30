import UserProfileUI from "./UserProfileUI"
import {useParams} from 'react-router-dom';

export default function UserProfile(){
    const { username } = useParams();
    return(
        <UserProfileUI username={username}/>
    )
}