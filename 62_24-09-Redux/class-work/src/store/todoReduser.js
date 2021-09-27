import * as Types from  "./actionsType";

const init={
    todos:[] //text: 'do someting", status: false
}

export default function todoReducer(state =init, {type, payload}){
    switch(type){
        case Types.ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, {text: payload.text, status: false}]  //text: 'do someting", status: false
            }
        case Types.REMOVE_TODO:
            const tmpTodos=[state.todos];
            tmpTodos.splice(payload.index, 1)
            return{
                ...state,
                todos: [...tmpTodos]
            }
        case Types.CHANGE_STATUS:
            const tmpTodo=[...state.todos];
            tmpTodo[payload.index]={...tmpTodo[payload.index], status: payload.status}  
            return{
                ...state,
                todos:[...tmpTodo]
            }
    }
}