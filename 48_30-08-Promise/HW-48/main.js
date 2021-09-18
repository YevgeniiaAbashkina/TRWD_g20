const users=[
    {
        name: "Ivan",
        lastName: "Ivanov",
        city: "Berlin",
    },
    {
        name: "John",
        lastName: "Lennon",
        city: "London",
    },
    {
        name: "Taras",
        lastName: "Shewchenko",
        city: "Kyew",
    },
    {
        name: "Alexandr",
        lastName: "Pushkin",
        city: "Moscow",
    },
    {
        name: "Johann",
        lastName: "Wolfgang von Goethe",
        city: "Weimar",
    },
];

const container=document.querySelector(".container");

renderUserList();

function renderUserList(){
    const index=JSON.parse(localStorage.getItem("userListId"));
    const wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    users.forEach((user, i)=>{
        const userList=document.createElement("div");    
        userList.classList.add("user-list");
        userList.setAttribute("data-index", i);
        userList.innerHTML =`<h2>${user.name} ${user.lastName}, <span>${user.city}</span></h2> <hr />`;
        console.log(userList);
        wrapper.append(userList);
        userList.onclick = userClickHandler;
        if(i===index){
            userList.click();
        };
    });
    container.append(wrapper);
}

function userClickHandler(event){
    console.log(event.currentTarget);
    const target=event.currentTarget;
    if(target.tagName==="DIV"){
        const userLists=document.querySelectorAll(".user-list");
        userLists.forEach(el => el.className="user-list");
        target.classList.add("new-color");
        const index= target.dataset.index;
        console.log(index);
        localStorage.setItem("userListId", index);
    } 
}
