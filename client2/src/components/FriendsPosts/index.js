import { useState, useEffect } from 'react'
import FriendsPostsUI from './FriendsPostsUI'
import {URL} from '../../utils/url'

export default function FriendsPosts({userData, updatePostList}) {
    const [friendsPostList, setFriendsPostList] = useState([])
    
    useEffect(() => {
            if(userData.id_usuario){
            const userId = userData.id_usuario
            getFriendsPosts(userId)}
    }, [userData.id_usuario, updatePostList])

    async function getFriendsPosts(userId){
        const response = await fetch(`${URL}/social_media_post/friendsPosts/${userId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(async data => {
            if(data.status === 200){
                const friendsPosts = await data.json()
                setFriendsPostList(friendsPosts)
            }
        })
    }
    return (
        <>
            <FriendsPostsUI friendsPostList={friendsPostList}/>
        </>
    )
}
