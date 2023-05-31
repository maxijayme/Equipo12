import FeedUI from "./FeedUI";
import { useContext, useEffect, useState } from 'react';
import AppContext from "../../context/UsersContext";
import { useNavigate } from "react-router-dom";
import {URL} from '../../utils/url' 
import Layout from "../../components/Layout/Layout";

export default function Feed(){
    const navigate = useNavigate()
    const {jwt} = useContext(AppContext)
    const [userData, setUserData] = useState({})
    let userId;
    useEffect(()=>{
        if(jwt){
            userId = jwt.userId;
        }else{
            navigate('/login')
        }
    },[])
    
    useEffect(()=>{
        if(jwt!==null){
            fetch(URL,{
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${jwt.token}`
                }
            }).then(res =>{
                if(res.status !== 200){
                    navigate('/login')
                }
            })
        }
    },[jwt])

    useEffect(()=>{
        if(jwt!==null){
            try{
                async function getUserById(){
                const response = await fetch(`${URL}/users/${userId}`)
                const responseJson = await response.json()
                setUserData(responseJson[0])
                }
                getUserById()
            }
            catch(e){
                console.log(e)
            }
        }
    },[])

    return(
        <Layout >
            <FeedUI userData={userData}/>
        </Layout>
    )
}