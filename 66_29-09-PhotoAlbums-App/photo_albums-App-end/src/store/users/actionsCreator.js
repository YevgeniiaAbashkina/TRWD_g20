import Types from "./actionTypes";
import * as UsersData from "./../../data/usersData";

export const initialState=()=>{
    return dispatch=>{
        dispatch({type: Types.load})
            setTimeout(()=>{
                try{
                const data ={
                    users: UsersData.getUsers(),
                    currentUser: UsersData.getCurrentUser()
                }
                dispatch({type:Types.initState, payload: {...data}})

                }catch(error){
                    dispatch({type: Types.error, payload: error.message})
                    console.log(error.message)
                }
                    }, 2000)
    }
}


export const registration = (user)=>{
    return dispatch =>{
        dispatch({type: Types.load})
        setTimeout(()=>{
            try{
                const newUser=createUser(user)
                if(newUser){
                    dispatch({
                        type: Types.registration,
                        payload: newUser
                    })
                }else{
                    throw new Error ("user specified email is already exist")
                }
            }catch(error){
                dispatch({type: Types.error, payload: {registration: error.message}})
            }
        }, 2000)
    }
}

export const login=data=>{
    return dispatch=>{
        dispatch({type:Types.load})
        setTimeout(()=>{
            try{
                const user=UsersData.loginUser(data); //login & email
                if(user){
                    UsersData.setCurrentUserLocalStorage(user);
                    dispatch({type: Types.login, payload:user})
                }else{
                    throw new Error("Password or emali is wrong!")
                }
            }catch(error){
                dispatch({type: Types.error, payload:{login: error.message}})
            }
        }, 2000)
    }
}

export const logout=()=>{
    return({
        type: Types.logout
    })
}

export const updateUser = dataForUp=>{
    return dispatch =>{
        dispatch({type: Types.load})
        setTimeout(()=>{
            try{
                const newUsers =[...UsersData.getUsers()];
                const index =newUsers.findIndex(user=>user.id === dataForUp.id);
                /* if(index === -1){
                    throw new Error ("no such user")
                } */

                newUsers[index]=dataForUp;
                UsersData.setUsersToLocalStorage(newUsers);
                UsersData.setCurrentUserLocalStorage(dataForUp);
                dispatch({
                    type: Types.editUser,
                    payload:{
                        user:[...newUsers],
                        currentUser: dataForUp
                    }
                })
            }catch(e){
                console.lod(e.message)
            }
        }, 2000)
    }
}

const createUser=user=>{
    const users=UsersData.getUsers();
    const isEMailExist = users.some(u => u.email === user.email);
    if(!isEMailExist){
        user = {...user, id: Date.now()};
        users.push(user);
        UsersData.setUsersToLocalStorage(users);
        UsersData.setCurrentUserLocalStorage(user);
        return user;
    }
    return null
}

