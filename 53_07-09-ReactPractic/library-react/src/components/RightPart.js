import Fullinfo from "./Fullinfo"

export default function RightPart({books}){
    return(
        <div id="right">
            {books.map((book, index)=>
            <Fullinfo key={index}
                id={book.id}
                cover={book.cover}
                title={book.title}
                author={book.author}
                yearIssue={book.yearIssue}
                genre={book.genre}
            />)}
        </div>
    )
}