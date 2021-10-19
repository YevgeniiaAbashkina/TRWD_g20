import axios from "axios";

const client=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

client.interceptors.request.use(function(config){
    config.data = {...config.data, myField:"hello!"}
    return config
}, function(error){
    return Promise.reject(error)
})

client.interceptors.response.use(function(responce){
    console.log("interceptors", responce)
    return responce
},function(error){
    return Promise.reject(error)
})

export function getPosts(){
    client.get("/posts")
    .then(responce =>console.log(responce))
    
    /* axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: "GET"
    }).then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log(error.response)
    }) */
}

export function testAddPost(){
    client.post("/posts", {id:123, title:"Some title"},
    {headers:{
        "Content-Type": "aplication/xml"
    }},
    )
    .then(responce=>console.log(responce))
    
    /* axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: "POST",
        data: {id:123, title:"Some title"}
    }).then(responce=>console.log(responce)) */
}

/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error=> console.log (error.message)) */