import { useState } from "react";
import PostCardUI from "./PostCardUI";
import {URL} from '../../utils/url'
import getMoment from '../../utils/time'

export default function PostCard(props) {
    const[like, setLike] = useState(false)
    const[updateLikes, setUpdateLikes] = useState()
    const [likesCount, setLikesCount] = useState(props.likes);

    function handleLike(e){
        setLike(!like)
        if(!like){
            const actualLike = parseInt(e.target.nextElementSibling.innerText)
            setUpdateLikes(actualLike + 1);
            postLike(actualLike + 1);
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
                setLikesCount(likes);
              }
            })
          }
          catch(e){ console.log(e)}
    }

    return (
        <>
            <PostCardUI postData = {props} handleLike={handleLike} like={like} likesCount={likesCount} getMoment={getMoment}/>
        </>
    )
}
