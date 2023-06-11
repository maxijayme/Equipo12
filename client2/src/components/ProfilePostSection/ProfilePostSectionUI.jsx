import PostCard from "../PostCard";


export default function ProfilePostSectionUI({userPostList}) {
    return (
        <div className="container">
          {userPostList.length > 0 ?
           userPostList.map((post,i)=>(
            <PostCard key={i} {...post}/>
          )): 
          <p>Aún no ha publicado nada</p>
          }
        </div>
    )
}
