/* const redux=require("redux"); //метод забирает из нот_моделс папку redux

const initState={
    count: 0,
}

const reducer = (state = initState, action)=>{
    switch(action.type){
        case "INC": return {...state, count:state.count +1};
        case "DEC": return {...state, count:state.count -1};
        case "ADD_NUM": return {
            ...state,
            count:state.count + action.payload.num}

        default: return state;
    }
}

const store=redux.createStore(reducer);

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})

store.dispatch({
    type: "ADD_NUM",
    payload:{
        num:10
    }
})

console.log(store.getState()) */

const redux=require("redux"); //метод забирает из нот_моделс папку redux

const initState={
    count: 0,
    user:{
        name:"",
        email:""
    },
    users:[]
}

const reducer = (state = initState, {type, payload})=>{
    switch(type){
        case "INC": return {...state, count:state.count +1};
        case "DEC": return {...state, count:state.count -1};
        case "ADD_NUM": return {
            ...state,
            count: state.count + payload.num
        }
        
        case "SET_USER":return{
            ...state, //{count, user}
            user:{
                name: payload.name || state.user.name,
                email: payload.email || state.user.email
            }
        }

        /* case "ADD_USER": 
            const newUsers=[...state.users, payload]
        return{
            ...state,
            users: newUsers
        } */
        case "ADD_USER": 
        return{
            ...state,
            users: [...state.users, payload]
        }


        default: return state;
    }
}

const store=redux.createStore(reducer);

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})

store.dispatch({
    type: "ADD_NUM",
    payload:{
        num:10
    }
})

store.dispatch({
    type: "SET_USER",
    payload:{
        name: "John",
        email: "john@mail.com"
    }
})

store.dispatch({
    type: "SET_USER",
    payload:{
        name: "Ivan"
    }
})

store.dispatch({
    type: "SET_USER",
    payload:{
        email: "Ivan@com"
    }
})

store.dispatch({
    type:"ADD_USER",
    payload: store.getState().user
})

store.dispatch({
    type: "ADD_USER",
    payload:{
        name: "Anna",
        email: "anna@mail.com"
    }
})

console.log(store.getState())