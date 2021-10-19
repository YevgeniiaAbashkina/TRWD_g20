import * as Types from "./actionsType";

const addTodoWithAsync=(text)=>{
    return(dispatch)=>{
        setTimeout(()=>{
                dispatch({
                type: Types.ADD_TODO,
                payload:{
                    text
                }
            })
        }, 3000)
    }
}

export default addTodoWithAsync;