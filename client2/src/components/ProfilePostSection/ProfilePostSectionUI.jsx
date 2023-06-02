import PostCard from "../PostCard";


export default function ProfilePostSectionUI({userPostList}) {
    return (
        <>
          {userPostList.length > 0 && userPostList.map((post,i)=>(
            <PostCard key={i} {...post}/>
          ))  }
        </>
    )
}
