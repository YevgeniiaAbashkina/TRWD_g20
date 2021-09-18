import "../css/Public.css";
import Counter from "./Counter";

export default function Public({publication:{id, title, author, text, like, dislike},clickingOnLike,clickingOnDislike}){
    return(
        <div className="public">
            <h5>{new Date().toLocaleDateString()}</h5>
            <h2>{title}</h2>
            <p>{text}</p>
            <h4>{author}</h4>
            
            <Counter id={id}
                    like={like}
                    dislike={dislike}
                    clickingOnLike={clickingOnLike}
                    clickingOnDislike={clickingOnDislike}/>
            <hr/>        
        </div>
    )
}