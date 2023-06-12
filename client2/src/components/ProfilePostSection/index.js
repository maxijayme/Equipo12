import { useState, useEffect } from 'react'
import ProfilePostSectionUI from './ProfilePostSectionUI'
import {URL} from '../../utils/url'

export default function ProfilePostSection({userData}) {
    const userId = userData.id_usuario;
    const [userPostList, setUserPostList] = useState([])
    useEffect(() => {
        if(userId){
            getUserPost(userId)
        }
    }, [userId])

    async function getUserPost(userId){
        const response = await fetch(`${URL}/social_media_post/userPost/${userId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(async data => {
            if(data.status === 200){
                const userPost = await data.json()
                setUserPostList(userPost)
            }
        })
    }
    return (
        <>
            <ProfilePostSectionUI userPostList={userPostList} userData={userData}/>
        </>
    )
}
