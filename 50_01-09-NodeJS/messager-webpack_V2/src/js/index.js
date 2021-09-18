import { users, messages, findMessagesByUserId, addNewMessage, getUserIdByUserName, addCommentToMessage} from "./data";
import { renderAddMessageForm, renderAddCommentForm } from "./forms";
import Message from "./message";
import Comment from "./comment";

const usersList = document.querySelector('.users-list')
const leftBox = document.querySelector('.left');
const listMessages=document.querySelector(".message-list");
const messageForm=document.querySelector(".form")

const rightBox = document.querySelector('.right');

const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}

renderUsersList(users)

usersList.onclick = (event) => {
    rightBox.innerHTML = ''
    if(event.target.tagName === 'H3'){
    const userId =  +event.target.dataset.id;
    usersList.querySelectorAll("h3").forEach(el=>el.classList.remove("active"));
    event.target.classList.add("active");
    renderLeftPart(userId) 
    }
}

function renderLeftPart(userId){
    const userMessages = findMessagesByUserId(userId)
        console.log(userMessages)
        const messageList = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : '<p>No message</p>'
        listMessages.innerHTML = `${messageList}`
        messageForm.innerHTML=`${renderAddMessageForm(userId)}`;
        const form=leftBox.querySelector('form');
        form.onsubmit=formClickHandler;
        listMessages.onclick=messageClickHandler;
        
}

function formClickHandler(e){
    e.preventDefault();
    const form=e.target;
    const userId= +form.button.dataset.user;
    const message=new Message(
        userId,
        form.title.value,
        form.text.value,
        new Date().toLocaleDateString()
    )
    addNewMessage(message);
    rightBox.innerHTML="";
    renderLeftPart(userId);
}

function messageClickHandler (event) {
    let target = event.target;
    if(target.tagName !== 'DIV'){
        target = event.target.parentNode
    }
    const message = messages.find(m => m.id === +target.dataset.message);
    renderRightBox(message);
    
}

function renderRightBox(message){
    rightBox.innerHTML = (message) ? message.renderFullInfo() : '';
    rightBox.innerHTML+= renderAddCommentForm(message.id);
    const nameForm=document.forms.userName;//rightBox.querySelector("form")
    console.log(nameForm)
    nameForm.onsubmit=checkNameHandler;

}

function checkNameHandler(event){
    event.preventDefault();
    console.log(event.target.uname.value)//получили имя  надо найти по нему его id
    const name=event.target.uname.value;
    const userId=getUserIdByUserName(name);
    const alert=document.querySelector("#not-found-user");
    const commentForm=document.forms.comment;
    console.log(commentForm)
    if(userId<0){
        alert.classList.remove("hide")
    }else{
        commentForm.classList.remove("hide");
        alert.classList.add("hide");
        event.target.classList.add("hide");
        commentForm.onsubmit=(event)=>{
            event.preventDefault();
            //const [, messageId] = event.target.ucomment.id.split("_");
            const messageId=+event.target.ucomment.id.split("_")[1];
            console.log(messageId)//id сообщения у которoго коммент
            const userNewComment=new Comment(
                userId,
                event.target.ucomment.value,
                new Date().toLocaleString()
            )
            addCommentToMessage(messageId, userNewComment);
            const message=messages.find(m => m.id === messageId);
            renderRightBox(message);
        }
    }
}



