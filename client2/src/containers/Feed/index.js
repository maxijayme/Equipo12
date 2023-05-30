import FeedUI from "./FeedUI";
import { useContext, useEffect } from 'react';
import AppContext from "../../context/UsersContext";
import { useNavigate } from "react-router-dom";
import {URL} from '../../utils/url' 

export default function Feed(){
    const navigate = useNavigate()
    const {jwt} = useContext(AppContext)

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
    return(
        <FeedUI/>
    )
}