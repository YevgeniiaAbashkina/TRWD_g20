const BASE_URL="https://jsonplaceholder.typicode.com";

getPostById(1);

function getPostById(id){
    fetch(`${BASE_URL}/posts/${id}`)
    .then(res=>res.json())
    .then(data=> {
        renderPost(data);
        getCommentById(id)
    })

}

function renderPost(post){
    const div=document.createElement("div");
    div.innerHTML= `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `
    document.querySelector("#post").append(div);
}

function getCommentById(id){
    fetch(`${BASE_URL}/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data=>renderComments(data));
}

function renderComments(comments){
    comments.forEach(coment=>{
        const div=document.createElement("div");
        div.innerHTML= `
        <h5>${coment.email} ,left comment: </h5>
        <p>${coment.body}</p>
        `
        document.querySelector("#comments").append(div);
    });
}