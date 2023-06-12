import PostCard from "../PostCard";
import './FriendsPosts.css'

export default function FriendsPostsUI({friendsPostList}) {
    return (
        <div id="posts_container" className="container">
          {friendsPostList.length > 0 && friendsPostList.map((post,i)=>(
            <PostCard key={i} {...post}/>
          ))  }
        </div>
    )
}
