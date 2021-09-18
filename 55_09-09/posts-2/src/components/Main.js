import React from "react";
import getPosts from "../storage/data";
import PostsList from "./PostsList";
import FullPostInfo from "./FullPostInfo";
import "../css/Main.css";

export const PostContext = React.createContext();

export default class Main extends React.Component{
    state={
        posts:getPostsFromJson(),
        currentPosts:null
    }

    changeCurrentPost=(id)=>{
        const posts=this.state.posts;
        const index=posts.findIndex(post=>post.postId===id);
        const post={...posts[index]}
        console.log(post)
        this.setState({...this.state, currentPosts:post})
    }

    backBtn=()=>{
        this.setState({...this.state, currentPosts: null})
    }

    addComment=(id, comment)=>{
       
        console.log(Date.now())

        const newPosts=[...this.state.posts]
        const index=newPosts.findIndex(post=> post.postId === id)
        const post={...newPosts[index]};
        const NewComment=[...post.comments];
        console.log(NewComment)        
        NewComment.push({...comment, id:Date.now()})
        console.log(NewComment) 
        post.comments=NewComment;
         
        newPosts[index]=post;
        this.setState({...this.state, posts: newPosts, currentPosts:post})
    }

    render(){
        return(
            <PostContext.Provider value={{
                changeCurrentPost:this.changeCurrentPost,
                addComment:this.addComment
            }}>
                <div className="main">
                    {this.state.currentPosts ? 
                    <FullPostInfo post={this.state.currentPosts}
                                backBtn={this.backBtn}/> : 
                    <PostsList posts={this.state.posts}/>}
                    
                </div>
            </PostContext.Provider>
        )
    }
}

function getPostsFromJson(){
    const posts=JSON.parse(getPosts());
    console.log(posts)
    return posts;
}
