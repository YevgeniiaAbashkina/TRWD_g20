export const getUsers=()=>{
    const users=JSON.parse(localStorage.getItem("users"));
    return users ? users : []
}

//export default users || [] // users ?? []

export const setUsersToLocalStorage=(users)=> localStorage.setItem("users", JSON.stringify(users))

export const setCurrentUserLocalStorage=(id)=>{
    localStorage.setItem("currentUserId", JSON.stringify(id)) //кто-то заголился
}

export const getCurrentUserId=()=>{
    return JSON.parse(localStorage.getItem("currentUserId"))//возвращает id тек. пользователя
}

export const resetCurrentUser=()=>{
    localStorage.removeItem("currentUserId")//удаяет после логаута
}

export const login=(currentUser)=>{
    const user=getUsers().find(us =>us.email === currentUser.email)
    return user ? (user.password === currentUser.password ? user.id : null) : null
}
