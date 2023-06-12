import { useState } from 'react'
import PostsUI from './PostsUI'

export default function Posts({userData, updatePostList}) {
    const [updatePosts,setUpdatePosts] = useState(false)
    return (
        <>
           <PostsUI userData={userData} updatePostList={updatePostList} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts}/> 
        </>
    )
}
