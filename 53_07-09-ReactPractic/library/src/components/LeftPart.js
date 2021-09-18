import Book from "./Book"

export default function LeftPart({books}){
    return(
        <div id="left">
            {books.map((book,index)=>
                <Book key={index}
                id={book.id}
                index={book.id+1}
                author={book.author}
                title={book.title}

            />)}
        </div>
    )
}