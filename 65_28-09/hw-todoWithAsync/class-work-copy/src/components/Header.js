import { useState } from "react";
import { ADD_TODO } from "../store/actionsType";
import { connect } from "react-redux";
import addTodoWithAsync    from "../store/actionCreater";

const Header=({addTodo, addTodoAsync})=>{
    const [input, setInput]=useState("")
    
    
    const onChangeHandler=({target})=>{
        setInput(target.value)
        
    }

    return(
        <>
        <input type="text"
                value={input}
                onChange={onChangeHandler}/>
        <button onClick={
            ()=>{addTodo(input)} }>Add todo</button>
        <button onClick={()=>addTodoAsync(input)}>Add todo with async</button>    
        </>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        addTodo: (text)=> dispatch({type: ADD_TODO, payload:{text}}),
        addTodoAsync: (text)=> dispatch(addTodoWithAsync(text))
    }
}

export default connect(null, mapDispatchToProps)(Header);