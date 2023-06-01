
import FriendRequestUI from "./FriendRequestUI";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/UsersContext";
import {URL} from '../../utils/url'

export default function FriendRequest(){
    const {jwt} = useContext(AppContext)
    const [allRequest, setAllRequest] = useState([]);
    let idUser;
    async function fetchFriendRequests(){
        
        try {
          const response = await fetch(`${URL}/pending_request`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({idUser})
            
        })
          const data = await response.json();
          console.log(data)
          setAllRequest(data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    
    useEffect(() => {
        if (jwt !== null) {
            idUser=jwt.userId;
        fetchFriendRequests() }}, [jwt]);
    return(
        <FriendRequestUI allRequest={allRequest}/>
    )
}