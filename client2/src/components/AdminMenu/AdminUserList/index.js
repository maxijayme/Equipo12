import AdminUserListUI from './AdminUserListUI'
import {URL} from '../../../utils/url' 
import { useEffect, useState} from 'react'


export default function AdminUserList({token}){
    
    const [userList, setUserList] = useState([])
    
    async function getUsers(){
        await fetch(`${URL}/users`,{
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `"Bearer ${token}"`
            }
        }).then(
            users => users.json()
        ).then(
            res => setUserList(res)
        )
    }

    useEffect(()=>{
        getUsers()
    },[])

    return(
        <AdminUserListUI userList={userList} />
    )
}