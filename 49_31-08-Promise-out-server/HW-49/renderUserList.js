const BASE_URL="https://jsonplaceholder.typicode.com";


getUsers();

async function getUsers(){
    const response=await fetch(`${BASE_URL}/users`);
    const data=await response.json();
    console.log(data)
    renderUsers(data);
}
async function getTodo(id){
    const response=await fetch(`${BASE_URL}/todos?userId=${id}`);
    const data=await response.json();
    console.log(data)
    createTodo(data);
}


function renderUsers(users){
    const userBox=document.querySelector(".user-box");
    
    users.forEach(el=>{
        const item=document.createElement("div");
        item.classList.add("item");
        item.id="user_" + el.id;
        
        item.innerHTML=`
        <h3>${el.name}</h3>
        <h5>${el.username}</h5>
        <h5>${el.email}</h5>
        `
        //console.log(item)
        userBox.append(item);

        item.onclick=userClickHandler;
    })
    
}

function createTodo(arr){
    const todoBox=document.querySelector(".todoBox");
    todoBox.innerHTML="";
    const todoTitle=document.createElement("h2")
    todoTitle.className="todo-list"
    todoTitle.innerHTML="Todo-list";
    todoBox.append(todoTitle)
    arr.forEach((el, index)=>{
        const todo=document.createElement("div");
        todo.classList.add("todos");
        todo.setAttribute("data-index", index);
        todo.innerHTML=renderTodo(el)
        todoBox.append(todo);
    })

}

function renderTodo(todo){
    return `
    <li>${todo.title}</li>`
}


function userClickHandler(event){
    const target=event.currentTarget;
    const itemId=+target.id.split("_")[1];
    const items=document.querySelectorAll(".item");
    if(target.tagName==="DIV"){
        getTodo(itemId)
        
    }    
}   
    
