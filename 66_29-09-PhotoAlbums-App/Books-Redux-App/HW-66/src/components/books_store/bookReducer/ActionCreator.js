import ActionType from "./ActionType";
import { showLoader, hideLoader } from "./../appReducer/AppActionCreater";
import * as booksData from "../../data/booksData"

export const initialState=()=>{
    return{
        type: ActionType.initState,
        payload: {books: booksData.getBooks()}
    }
}


export const addBook=(book)=>{
    return dispatch=>{
        dispatch(showLoader())
        setTimeout(()=>{
            dispatch(_createNewBook(book))
            dispatch(hideLoader())
        },2000)
    }
}

const _createNewBook=book=>{
    const books= booksData.getBooks();
    book={...book, id: Date.now()};
    books.push(book);
    booksData.setBooksToLocalStorage(books);
    return{
        type: ActionType.addBook,
        payload:{
            book
        }
    }
}
