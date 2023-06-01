import CreatePostUI from './CreatePostUI'
import {URL} from '../../utils/url'
import {useState, useEffect} from 'react';

export default function CreatePost({userData}) {
    const[postData, setPostData] = useState({userId: "",postText:"", postImg:""})
    const [url, updateUrl] = useState();
    
    useEffect(() => {
        const userId = userData.userData.id_usuario
        setPostData(values => ({...values, "userId": userId}))
        setPostData(values => ({...values, "postImg": url}))
    }, [userData, url])

    function handleOnUpload(error, result, widget) {
        if ( error ) {

          widget.close({
            quiet: true
          });
          return;
        }
        updateUrl(result?.info?.secure_url);
      }

    function handleChange(e){
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setPostData(values => ({...values, [inputName]: inputValue}))
    }
    
    function handlePost(){
        newPost();
    }

    async function newPost(){
        const response = await fetch(`${URL}/social_media_post`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
        }).then(data => console.log(data))
    }

    return (
        <>
           <CreatePostUI handlePost={handlePost} handleChange={handleChange} postData={postData} handleOnUpload={handleOnUpload}/> 
        </>
    )
}
