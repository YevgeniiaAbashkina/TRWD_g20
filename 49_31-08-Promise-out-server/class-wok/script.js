//JSONPlaseholder.typicode.com/(inpoints)

//в прошлом: XML HTTP Request///////////////////////////////////////////////

/* const BASE_URL="https://jsonplaceholder.typicode.com"
let xhr=new XMLHttpRequest();

xhr.open("GET", `${BASE_URL}/posts`); //метод запроса по какому инпоинту
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
xhr.onload=()=>{
    if(xhr.status>=200 && xhr.status<300){//код выполнения (200) console.log(xhr.response)
        console.log(JSON.parse( xhr.response) )
    }else{
        console.log(`Error in code, status: ${xhr.status}`) //Error in code, status: 404
    }
}

console.log("end of code"); */

///////////fetch////////////////
const BASE_URL="https://jsonplaceholder.typicode.com";

/*fetch(`${BASE_URL}/posts`)
    .then(responce=>{//обращение к тому что вернул резолв,  вернут толко заголовки без бади
        if(responce.ok){
            return responce.json()//запрос на тело
        }
        throw new Error(responce.status)//иначе верни статус  и ошибки
    }).then(data=>console.log(data));//данные которые получены от сервера

    console.log("end of code"); */


    ////////////////practice//////////////
function renderTodo(todo){
    document.querySelector("#todo").innerHTML+=`<li>${todo.title}</li>`
}


/* fetch(`${BASE_URL}/todos?userId=2`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(el=>{
            renderTodo(el)})
    }).catch(err=>console.log(err.message)) */

    async function getData(){
        try{
        const responce=await fetch(`${BASE_URL}/todos?userId=3`);
        const data=await responce.json();
        return data; 
    }
    catch{
        console.log(e.massage)
    }   
}

//const todos=  getData();  
//console.log(todos)//promise

getData().then(res=>{
    res.forEach(el=> renderTodo(el))})

