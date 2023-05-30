import Layout from "../../components/Layout/Layout";
import UserProfileUI from "./UserProfileUI"
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import {URL} from '../../utils/url'

export default function UserProfile(){
    const { username } = useParams();
    const [userData, setUserData] = useState({})
    useEffect(()=>{
        try{
            async function getUserByName(){
            const response = await fetch(`${URL}/users/search_username/${username}`)
            const responseJson = await response.json()
            setUserData(responseJson[0])
            }
            getUserByName()
        }
        catch(e){
            console.log(e)
        }
    },[])
    
    return(
        <Layout>
            <UserProfileUI username={username} userData={userData}/>
        </Layout>
    )
}