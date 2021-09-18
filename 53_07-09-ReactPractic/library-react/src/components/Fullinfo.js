import Counter from "./Counter";


export default function Fullinfo({id, cover, title, author, yearIssue, genre}){
    return(
    <div className="bookDetail" id={id}>
        <img src={cover} alt={title}/>
        <h2>{title}</h2>
        <h5>{author}</h5>
        <p>year of issue:{yearIssue}, genre: {genre}</p>
        <div className="counter">
            <Counter/>
        </div>
        
    </div>
    )
    
}
