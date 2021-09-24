import CommentBox from "./CommentBox";
import "../css/FullPostInfo.css"


const FullPostInfo=({post, backBtn})=>{
    
    return(
        <div className="full-info">
            <div className="top">
                <h3>{post.author}</h3>
                <button onClick={backBtn}>Back</button>
            </div>
            <p>{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <CommentBox comments={post.comments}
                        post={post}/>
        </div>
    )
}

export default FullPostInfo;

//<NewComment postId={post.postId}/>