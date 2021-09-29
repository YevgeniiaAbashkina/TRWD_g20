import Types from "./ActionTypes";

const init ={
    posts:[]
}

export default function postReducer( state=init, {type, payload}){
    switch(type){
        case Types.add:
            console.log(payload)
            return{
                ...state,
                posts: [...state.posts, payload.post]
            }
        case Types.remove:
            return{
                ...state,
                posts:[...state.posts.filter((post)=> post.id !== payload.id)]
            }   
        default: return state
    }
}