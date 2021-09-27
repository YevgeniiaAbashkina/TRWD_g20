import { createStore } from "redux";
import todoReducer from "./todoReduser";

const todoStore=createStore(todoReducer);

export default todoStore;