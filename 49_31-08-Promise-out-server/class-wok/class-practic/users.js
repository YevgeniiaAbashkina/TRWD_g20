const BASE_URL="https://jsonplaceholder.typicode.com";

/* 
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
 */
getUserById(2);

async function getUserById(id){
    const response=await fetch(`${BASE_URL}/users/${id}`)//заголовки
    const data=await response.json();//body
    renderUser(data); 
    getTodoByUserId(id)   
}

function renderUser(user){
    const div=document.createElement("div");
    div.innerHTML=`
    <h3>Name: ${user.name}</h3>
    <h5>Nickname: ${user.username}</h5>
    <p>email: ${user.email}</p>
    `
    document.querySelector("#user").append(div)
}

/* "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false */


async function getTodoByUserId(id){
    const response=await fetch(`${BASE_URL}/todos?userId=${id}`)//заголовки
    const data=await response.json();//body
    createTodoList(data);  
}

function renderTodo(todo){
    return `
    <li>${todo.title}</li>
    `
}

function createTodoList(arr){
    arr.forEach(el=>{
        document.querySelector("#todos ul").innerHTML+=renderTodo(el);
    })
}