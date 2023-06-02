import { useState } from "react";
import PostCardUI from "./PostCardUI";
import {URL} from '../../utils/url'

export default function PostCard(props) {
    const[like, setLike] = useState(false)
    const[updateLikes, setUpdateLikes] = useState()

    function handleLike(e){
        setLike(!like)
        if(!like){
            const actualLike = parseInt(e.target.nextElementSibling.innerText)
            postLike(actualLike+1)
            setUpdateLikes(actualLike)
        }
        else{
            postLike(updateLikes-1)
        }
    }
    

    async function postLike(likes){
        try{
            await fetch(`${URL}/social_media_post`,{
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id_publicacion: props.id_publicacion,
                likes: likes
              })
            }).then( data => {
              if(data.status===200){
                console.log('success')
              }
            })
          }
          catch(e){ console.log(e)}
    }

    return (
        <>
            <PostCardUI userData = {props} handleLike={handleLike} like={like}/>
        </>
    )
}
