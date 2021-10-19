import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllBooks } from "../store/booksReducer/BooksActionCreators";
import Loader from "./loader";
import NewComment from "./NewComment";
import Comments from "./Comments";




const BookInfo=({match, history, books, getBooks})=>{

    useEffect(()=>{
        if(books.length ===0)
        getBooks()// eslint-disable-next-line
    },[])

    const bookId=+match.params.id;
    const book = books.find(b=> b.id===bookId)
    return(
        books.length===0? <Loader/> : 
        <div className="container">
            <div className="row my-4">
                <div className="col-sm-6">    
                    <div className="card">
                        <img src={book.cover} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{book.title}</h3>
                            <h5>by: {book.author}</h5>
                            <p className="mt-3">{book.description}</p>
                            <p className="card-text">Rate: {book.rate}</p>
                            <button className = "btn btn-primary btn-sm mb-3"
                                onClick = {()=>{
                                    history.push(`/books`)
                                }}>Back to list</button>
                        </div>
                    
                    </div>            
                </div>
            </div>
            <div className="col-sm-6">
                <Comments comments={book.comments}/>
                <NewComment id={book.id} comments={book.comment} book={book}/>
            </div>
        </div>    
    )
}

const mapStateToProps=({BooksReducer})=>{
    return{
        books: BooksReducer.books
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getBooks:()=>dispatch(getAllBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo);