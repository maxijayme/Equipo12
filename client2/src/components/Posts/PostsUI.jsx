import CreatePost from "../CreatePost"
import FriendsPosts from "../FriendsPosts"
export default function PostsUI({userData, updatePostList}) {
    return (
        <>
            <CreatePost userData={userData}/>
            <FriendsPosts userData={userData} updatePostList={updatePostList}/>
        </>
            
      
    )
}
