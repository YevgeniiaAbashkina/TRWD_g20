import Comment from "./Comment";
import NewComment from "./NewComment";
import "../css/CommentBox.css"

export default function CommentBox({comments, post}){
    
        return(
            <div className="comment-box"> 
                {comments.map(comment=>(
                    <div className="comment" key={comment.id}>
                        {<Comment comment={comment}/>}
                        
                    </div>
                ))
                }
                {<NewComment postId={post.postId}/>}
            </div>
        )
}
