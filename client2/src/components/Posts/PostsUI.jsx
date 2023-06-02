import CreatePost from "../CreatePost"
import FriendsPosts from "../FriendsPosts"
export default function PostsUI(userData) {
    return (
        <div className="col-xl-5 col-md-6 col-sm-11 py-3" id="Posts-col_cen">
            <CreatePost userData={userData}/>
            <FriendsPosts userData={userData}/>
        </div>
    )
}
