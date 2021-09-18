export default function Book({id, index, author, title}){
    return(
        <div id={id} className="book">
            <p>{index}.<span>{title}</span>, {author}</p>
        </div>
    )
}
