import Layout from "../../components/Layout/Layout";
import UserProfileUI from "./UserProfileUI"
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import {URL} from '../../utils/url'

export default function UserProfile(){
    const { username } = useParams();
    const [userData, setUserData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);
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
    },[username])

    function handleCloseModal(){
        setIsModalVisible(false)
    }

    function handleCloseEditModal(){
        setIsEditVisible(false)
    }

    return(
        <Layout>
            <UserProfileUI userData={userData} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} handleCloseModal={handleCloseModal} isEditVisible={isEditVisible} setIsEditVisible={setIsEditVisible} handleCloseEditModal={handleCloseEditModal}/>
        </Layout>
    )
}