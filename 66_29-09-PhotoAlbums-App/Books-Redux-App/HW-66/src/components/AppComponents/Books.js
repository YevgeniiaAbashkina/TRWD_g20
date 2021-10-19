import { connect } from 'react-redux';
import Book from "./Book";
import { initialState } from '../books_store/bookReducer/ActionCreator';
//import * as booksData from "../data/booksData"



const Books = ({books}) => {
    //{initState()}
console.log(books.length)

    return (
        <div className='container'>
            
            <h4 className='text-center my-5' style ={{textTransform:"uppercase"}}>{books.length ? 'Using our APP you can browse the best books to study Fullstack development. Stay tuned for the latest and add your favorites to our library!' : 'Our application is undergoing a content update and no books have been added yet.'}</h4>
            <div className="row">
                {books.map(book => <Book key={book.id} book={book}/>)}
            </div>
       </div>
    )
}

const mapStateToProps=({BookReducer})=>{
    return{
        books: BookReducer.books,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        initState: ()=>dispatch(initialState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books); 
