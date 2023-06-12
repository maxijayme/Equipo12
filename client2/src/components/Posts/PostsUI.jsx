import CreatePost from "../CreatePost"
import FriendsPosts from "../FriendsPosts"
export default function PostsUI({userData, updatePostList, updatePosts, setUpdatePosts}) {
    return (
        <>
            <CreatePost userData={userData} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts}/>
            <FriendsPosts userData={userData} updatePostList={updatePostList} updatePosts={updatePosts}/>
        </>
            
      
    )
}
