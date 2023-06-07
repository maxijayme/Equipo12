import FriendsUI from "./FriendsUI";
import Layout from "../../components/Layout/Layout";
import {URL} from '../../utils/url'
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/UsersContext";

export default function Friends() {
    const {jwt} = useContext(AppContext)
    const [userData,setUserData] = useState({})
    const userId = jwt.userId;

    useEffect(()=>{
        if(jwt!==null) {
            try{
                async function getUserById(){
                    const response = await fetch(`${URL}/users/${userId}`)
                    const responseJson = await response.json()
                    setUserData(responseJson[0])
                }
                getUserById()
            } catch(e){
                console.log(e)
            }
        }
    },[])
    return(
        <Layout>
            <FriendsUI userData={userData}/>
        </Layout>
    )
}