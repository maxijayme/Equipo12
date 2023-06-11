import PostsUI from './PostsUI'

export default function Posts({userData, updatePostList}) {
    return (
        <>
           <PostsUI userData={userData} updatePostList={updatePostList}/> 
        </>
    )
}
