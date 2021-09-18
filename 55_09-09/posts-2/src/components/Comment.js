export default function Comment({comment}){
    return(
        <>
                    <h2>{comment.author}</h2>
                    <p>{comment.text}</p>
        </>
    )  
}