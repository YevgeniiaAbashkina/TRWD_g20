import { applyMiddleware, createStore } from "redux";
import todoReducer from "./todoReduser";
import thunk from "redux-thunk";

const todoStore=createStore(todoReducer, applyMiddleware(thunk));

export default todoStore;