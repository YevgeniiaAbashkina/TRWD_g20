import TodoRow from "./TodoRow";
import { connect } from "react-redux";
import { REMOVE_TODO, CHANGE_STATUS } from "../store/actionsType";

const TodoList=({todos, changeStatus, removeTodo})=>{
    return(
        <ul>
            {todos.map((todo, index)=>{
                return(
                <li key={index}>
                    <TodoRow todo={todo}
<<<<<<< HEAD
                    index={index}
                    changeStatus={changeStatus}
                    removeTodo={removeTodo}/>
=======
                     index={index}
                     changeStatus={changeStatus}
                     removeTodo={removeTodo}/>
>>>>>>> e3b0d38f0ea0b6e3896945e71737e5009f906d4e
                </li>
                )
            })}
        </ul>
    )
}

const mapStateToProps=state=>{
    return{
        todos: state.todos
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        changeStatus:(index, status)=>dispatch({type: CHANGE_STATUS, payload:{index, status}}),
        removeTodo: (index)=>dispatch({type:REMOVE_TODO, payload:{index}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);