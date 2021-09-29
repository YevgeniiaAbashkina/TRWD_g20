import * as Actions from "../../store/posts/ActionCreater";
import {connect} from "react-redux";
import PostForm from "./PostForm";
import PostsList from "./PostsList";

const PostPage=({posts, addPost, removePost})=>{
    return(
        <div style={{display:"flex"}}>
            <PostsList posts={posts} removePost={removePost}/>
            <PostForm addPost={addPost}/>
        </div>
    )
}

const mapStateToProps=({postReducer})=>{
    return{
        //posts: state.posts.posts
        posts: postReducer.posts
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        addPost: (post)=>dispatch(Actions.addPost(post)),
        removePost: id => dispatch(Actions.removePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);