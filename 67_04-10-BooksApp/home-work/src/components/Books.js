import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllBooks } from "../store/booksReducer/BooksActionCreators";
import Book from "./Book";

const Books=({books, getBooks, history})=>{
    useEffect(()=>{
        if(books.length ===0)
        getBooks()
    }, [])

    return(
        <div className="container mt-5">
            <h2>List of the best books</h2>
            <div className="row row-cols-2 row-cols-md-4">
                {books.map(book => <Book key={book.id} book={book} history={history}/>)}
            </div>
        </div>
    )
}

const mapStateToProps=({BooksReducer})=>{
        return{
            books: BooksReducer.books 
        }
}

const mapDispatchToProps=dispatch=>{
    return{
        getBooks: ()=>dispatch(getAllBooks)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);