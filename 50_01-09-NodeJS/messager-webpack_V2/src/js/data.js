import User from "./user"; //"./user.js"
import Comment from "./comment";
import Message from "./message";

//export default const URL="http//google.com"//нельзя

//const URL="http//google.com"
//import {URL} from "./data"


const users = [
    new User('Vasya Pupkin', 'Berlin'),   // -> id 
    new User('Maksym Kostenko', 'Mainz'),
    new User('Ivan Ivanov', 'Kiev')
];

const messages = [
    new Message(0, 'Hello', 'World', new Date().toLocaleDateString()),
    new Message(0, 'About', 'Meeting', new Date().toLocaleDateString()),
    new Message(1, 'Text', 'Info', new Date().toLocaleDateString())
];

/* messages[0].comments.push(new Comment(0,0, 'very good',new Date().toLocaleDateString()));
messages[0].comments.push(new Comment(1,0, 'nice to see you', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(2,1, 'hello!', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(0,1, 'good bye!', new Date().toLocaleDateString())); */

export function findUserById(id){
    return users.find(user => user.id === id); //{name: Vasya, city: Berlin, id:0} 
    
}

export function addNewMessage(message){
    messages.push(message)
}

export function findMessagesByUserId(userId){
    return messages.filter(m=>m.userId===userId);
}

addCommentToMessage(0, new Comment(1, 'nice to see you', new Date().toLocaleDateString()));
addCommentToMessage(0, new Comment(0, 'very good',new Date().toLocaleDateString()));
addCommentToMessage(1, new Comment(2, 'hello!', new Date().toLocaleDateString()));
addCommentToMessage(1, new Comment(0, 'good bye!', new Date().toLocaleDateString()));

export function getUserIdByUserName(name){
    const user=users.find(u => u.name === name);
    return user? user.id : -1;
}

export function addCommentToMessage(messgeId, comment){
    const message=messages.find(m=>m.id === messgeId);
    message.comments.push(comment)
}

//export default URL

export {users, messages}