import { connect } from "react-redux";
import { changeTodoStatus, removeTodoByIndex } from "../css/todo_store/todoReducer/TodoActionCreator";
import Todo from "../newComponents/Todo";

const TodoList=({todos, changeStatus,removeTodo})=>{
    return(
        <ul>
                {
                    todos.map((todo,index)=>
                        <li key = {index}>
                            <Todo
                                index = {index}
                                todo = {todo}
                                status = {todo.status}
                                statusChangeHandler = {changeStatus}
                                removeHandler = {removeTodo}
                            />
                        </li>)
                }
            </ul>
    )
}
const mapStateToProps=({TodoReducer})=>{
    return{
        todos: TodoReducer.todos,

    }
}

const mapDispatchToProps=dispatch=>{
    return{
        changeStatus: (index, status)=>dispatch(changeTodoStatus(index, status)),
        removeTodo: (index)=>dispatch(removeTodoByIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);