import Layout from "../../components/Layout/Layout";
import UserProfileUI from "./UserProfileUI"
import {useParams} from 'react-router-dom';

export default function UserProfile(){
    const { username } = useParams();
    return(
        <Layout>
            <UserProfileUI username={username}/>
        </Layout>
    )
}