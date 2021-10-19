import ActionType from "./ActionType";

const init={
    books: [],
}

const BookReducer=(state=init, {type, payload})=>{
    switch(type){
        case ActionType.initState:
            return{
                ...state,
                books: [...payload.books],
            }

        case ActionType.addBook:
            return{
                ...state, 
                books:[...state.books, payload.book]};
        
    
        default: 
            return state
    }
}

export default BookReducer;