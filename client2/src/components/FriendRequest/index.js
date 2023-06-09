
import FriendRequestUI from "./FriendRequestUI";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/UsersContext";
import {URL} from '../../utils/url'

export default function FriendRequest({setUpdatePostList, updatePostList, setStateFlag, stateFlag}){
    const {jwt} = useContext(AppContext)
    const [allRequest, setAllRequest] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(false);
    let idUser;

    const replyRequest = async({id_solicitud,estado}) => {
      
      await fetch(`${URL}/pending_request`,{
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({id_solicitud,estado})
          }).then(data => {
              if(data.status === 200){
                  setUpdateFlag(!updateFlag)
                  if(window.location.pathname ==='/'){
                    setUpdatePostList(!updatePostList)
                  }
                  if(window.location.pathname ==='/friends'){
                    setStateFlag(!stateFlag)
                  }
              } 
      })
   }
    async function FriendRequests(){
        
        try {
          const response = await fetch(`${URL}/pending_request/pending`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({idUser})
            
        })
          const data = await response.json();
          setAllRequest(data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    
    useEffect(() => {
        if (jwt !== null) {
            idUser=jwt.userId;         
            FriendRequests() 
          }
    }, [jwt,updateFlag]);
    
    return(
        <FriendRequestUI allRequest={allRequest} replyRequest={replyRequest}/>
    )
}