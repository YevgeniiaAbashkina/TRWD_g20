import { connect } from "react-redux";
import { useParams } from "react-router-dom";

//import * as bookData from "../books_store/store"

const About=({books})=>{
    console.log("books",books)

    const {id}=useParams()
    console.log("id",id)

    const book=findBookById(id, books)
    console.log("book", book)  

     return(
        <div className="container row">
            <div className="w-50 m-3 col">
                <img src={book.cover} className="card-img-top h-100" alt="..." /> 
            </div>
            <div className="w-40 mt-5 col text-start">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>The book contains {book.pageQuantity} pages</p>
            </div>
        </div>
    )

}

const findBookById=(id, array)=>{
    return array.find(el=>el.id === +id)
}  


const mapStateToProps=({BookReducer})=>{
    return{
        books: BookReducer.books
    }
}

export default connect(mapStateToProps, null)(About);