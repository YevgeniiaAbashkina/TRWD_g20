import "../css/Counter.css"

const Counter=({id, like, dislike, clickingOnLike, clickingOnDislike})=>{
    return(
        <div className="counter">
            <h4>Like: {like}</h4>
            <div className="img-like">
                <img src="https://clipart-best.com/img/like/like-clip-art-18.png" alt={"like"+id}
                onClick={()=>clickingOnLike(id)} />
            </div>
            <h4>Dislike: {dislike}</h4>
            <div className="img-dislike">
                <img src="https://clipart-best.com/img/dislike/dislike-clip-art-26.png" alt={"dislike"+id}
                onClick={()=>clickingOnDislike(id)}/>
            </div>
        </div> 
    )
}

export default Counter;