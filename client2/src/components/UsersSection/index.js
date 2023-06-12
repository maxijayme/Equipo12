import UsersSectionUI from "./UsersSectionUI";
import {URL} from "../../utils/url"
import { useContext,useEffect,useState } from "react";
import AppContext from "../../context/UsersContext";


export default function UsersSection({stateFlag, setStateFlag}){
    const {jwt} = useContext(AppContext)
    const [allUsers, setAllUsers] = useState([]);    
    let idUser;

    async function AllUsers(){
        
        try {
          const response = await fetch(`${URL}/users/filterRelations/${idUser}`,{
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
    }, [jwt,stateFlag]);

    return (
        <UsersSectionUI allUsers={allUsers}/>
    )
}