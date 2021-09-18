
import Post from "./Post";

export default function PostsList({posts}){
    return(
        <div className="posts-list">
            {posts.map((el)=>
            <Post 
                key={el.postId}
                post={el}
            />)}
        </div>
    )
}