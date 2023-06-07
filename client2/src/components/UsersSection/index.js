import UsersSectionUI from "./UsersSectionUI";
import {URL} from "../../utils/url"
import { useContext,useEffect,useState } from "react";
import AppContext from "../../context/UsersContext";


export default function UsersSection(){
    const {jwt} = useContext(AppContext)
    const [allUsers, setAllUsers] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(false);
    let idUser;

    async function AllUsers(){
        
        try {
          const response = await fetch(`${URL}/users`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }            
        })
          const data = await response.json();
          setAllUsers(data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    
    useEffect(() => {
        if (jwt !== null) {
            idUser=jwt.userId;         
            AllUsers() 
          }
    }, [jwt,updateFlag]);

    return (
        <UsersSectionUI allUsers={allUsers} />
    )
}