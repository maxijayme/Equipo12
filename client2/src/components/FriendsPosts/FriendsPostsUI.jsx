import PostCard from "../PostCard";


export default function FriendsPostsUI({friendsPostList}) {
    return (
        <>
          {friendsPostList.length > 0 && friendsPostList.map((post,i)=>(
            <PostCard key={i} {...post}/>
          ))  }
        </>
    )
}
