/* 
user1= {
    id: 3,
    name: "Vasya",
    city:"Berlin",
}

users: [user1, user2, user3]

массив сообщений: [{
    id:0,
    userID:3,
    title:"Some title",
    text:"Some text",
    date:"01.10.2021",
    comments:[{}, {}, {}, {}]
},{},{}]

comment:{
    id:0,
    userId:3,
    postId:0,
    text:"some comments",
    date: "05.10.2021"
}
*/
const leftBox = document.querySelector(".left");
leftBox.classList.add("hide");
const rightBox = document.querySelector(".right");
rightBox.classList.add("hide");



const users = [
    new User ("Vasya Pupkin",  "Berlin"), //-->id
    new User("Ivan Pupkin",  "Moscow"),
    new User("Oleg Ivanov",  "Berlin"),
]
console.log(users);

const userList = document.querySelector(".top");

const renderUserList = (array) => {
    array.forEach(item => {
        userList.innerHTML += item.renderUser();
    });
}

renderUserList(users);

let messages = [
    new Message(1, "Hello everybody!", "Who did all the tasks for CSS?", new Date().toLocaleDateString()),
    new Message(0, "Hello!", "I have done!))", new Date().toLocaleDateString()),
    new Message(2, "Hello, Vasya!", "I haven't done...",  new Date().toLocaleDateString()),
];
    
messages[0].comments.push(new Comment(0, 0, "very good", new Date().toLocaleString()));
messages[0].comments.push(new Comment(1, 0, "nice to see you", new Date().toLocaleString()));
messages[0].comments.push(new Comment(2, 1, "wau!", new Date().toLocaleString()));//2-from, 0 to message
messages[2].comments.push(new Comment(2, 2, "good bye", new Date().toLocaleString()));

userList.onclick = (event) => {
    rightBox.innerHTML = "";
    if (event.target.tagName === "H3") {
        //const user = users.find(item => +event.target.dataset.id === item.id);
        const userMessages = messages.filter(message => message.userId === +event.target.dataset.id);

        console.log(userMessages);

        /* if (!userMessages.length) {
            leftBox.innerHTML = `<p>"No message"</p>`;
        } else {
            leftBox.innerHTML = userMessages.map(item => item.renderMessage()).join("");
        } */
        leftBox.innerHTML = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join("") : `<p>"No message"</p>`;
        leftBox.classList.remove("hide");
        rightBox.classList.add("hide");
///////////////////////////////////////////////////////////       
    const sendBtn = document.querySelector("#sendBtn");
    const inputNewMessage = document.querySelector("#userNewMessage");
    
    sendBtn.onclick = (event)=>{
        event.preventDefault();
        let newMessage = inputNewMessage.value;
        
        leftBox.innerHTML += `
        <div  class="message">
            <h5>${newMessage}<h5>
            <p>Published: ${new Date().toLocaleDateString()}</p>
        </div>
        `
        }
    }
}

leftBox.onclick = (event) => {
//console.log(event.currentTarget.dataset.messageid)
    //rightBox.innerHTML = renderFullInfo(userName);
    
    //console.log(event.target);
    let target = event.target;
    if (target.tagName !== "DIV") {
        target = event.target.parentNode;
    }
    //console.log(target)
    const message = messages.find(m => m.id === +target.dataset.message);
    if (message) rightBox.classList.remove("hide");
    rightBox.innerHTML=(message)? message.renderFullInfo() : '';
    //console.log(message)
        
}

function findUserById(id) {
    return users.find(user => user.id === id);//.city
}


  
