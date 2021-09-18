import { useState, useContext } from "react";
import { PostContext } from "./Main";
import "../css/NewComment.css"

const getClearComment=()=>{
    return{
        author:"",
        text:""
    }
}

const NewComment=({postId})=>{
    const context=useContext(PostContext);
    const [comment, setComment]=useState(getClearComment());

    const onChangeHandler = event =>{
        setComment((comment)=>{
            
            return{...comment, [event.target.name]: event.target.value}
        })
    }

    const onClickHandler=()=>{
        console.log(comment)
       /*  if(comment.author.trim()==="" || comment.text ===""){
            return
        } */
        context.addComment(postId, comment);
        setComment(getClearComment())

    }

    return(
        <div className="new-comment">
            <h2>leave your message</h2>
            <div className="nameInp">
                <input
                    type="text"
                    name="author"
                    className="name-input"
                    id="nameText"
                    placeholder="type your name"
                    value={comment.author}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="message">
                <textarea
                    type="text"
                    name="text"
                    className="message-input"
                    id="messageText"
                    placeholder="type your message"
                    value={comment.text}
                    onChange={onChangeHandler}
                />
            </div>    
            <button type="button" className="addBtn" onClick={onClickHandler}>Add comment</button>
            
        </div>
    )
}

export default NewComment;