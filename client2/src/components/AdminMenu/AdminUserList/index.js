import AdminUserListUI from './AdminUserListUI'
import {URL} from '../../../utils/url' 
import { useEffect, useState} from 'react'
import { json } from 'react-router-dom'


export default function AdminUserList({token}){
    
    const [userList, setUserList] = useState([])
    const [updateList, setUpdateList] = useState(false)

    async function deleteUser(id_usuario) {
        
        const response = await fetch(`${URL}/users/delete_user`,{
            method:'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `"Bearer ${token}"`
            },
            body : JSON.stringify({
                idUser: id_usuario
            })
        }).then (response => {
            if(response.status === 200) {
                console.log('borro')
                setUpdateList(!updateList)
            }
        })

    }
    
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
    },[updateList])

    return(
        <AdminUserListUI userList={userList} deleteUser={deleteUser} />
    )
}