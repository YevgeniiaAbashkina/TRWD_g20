import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import AppReducer from "./appReducer/AppReducer";
import BookReducer from "./bookReducer/BookReducer";

const state=combineReducers({BookReducer, AppReducer});

const store=createStore(state, applyMiddleware(thunk));

export default store;