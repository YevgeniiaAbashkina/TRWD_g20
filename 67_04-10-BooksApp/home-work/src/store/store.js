import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducer from "./appReducer/AppActionReducer";
import BooksReducer from "./booksReducer/BooksReducer";

const state=combineReducers({
    AppReducer,
    BooksReducer
})

const store= createStore(state, applyMiddleware(thunk));

export default store;