
import '../css/Post.css';
import { PostContext } from './Main';

export default function Post({post}){
    return(
        <PostContext.Consumer>{
            context=>{
                return(
                    <div className="post-container"
                    onClick={()=>context.changeCurrentPost(post.postId)}>
                        <div className="post-item"> 
                            <h4 className="author">{post.author}</h4>
                            <p>{post.date}</p>
                            <h2>{post.title}</h2>
                            <p>{post.shortDesc}</p>
                            <button className="post-btn">Comments: {post.comments.length}</button>
                        </div>
                        <hr/>
                    </div>
                )
            }
        }
        </PostContext.Consumer>
    )
} 

//onClick={()=>fullPostHandler(post.postId)}