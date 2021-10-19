import { connect } from "react-redux";
import { addTodo } from "../css/todo_store/todoReducer/TodoActionCreator";

const Header=({add})=>{
    return(
            <form className = 'row' action = '#' 
                onSubmit = {e =>{
                    e.preventDefault();
                    add(e.target.text.value);
                    e.target.text.value = ''
                }}>
             <input type ='text' name = 'text' placeholder = "Type todo" />
             <button type ='submit'>Add todo</button>       
            </form>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        add: (text)=>dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(Header);