let a, b;

a= true, b=false    

if (a){
    if (b){
    console.log("a and b both true");
    }else{ console.log("b-false")}
} else {
    console.log("a - false")
}

//=================================
const login = prompt("enter your login, please");
let message;

if (login === "admin") {
    const password = prompt("enter your password");
    if (password === "boss") {
        message = "hello boss";
    }else if  (password === "" || password === null) {
        message = "cancelled";
    } else {
        message = "wrong password";
    }    
} else if (login === null || login === "") {
    message = "cancelled";
} else {
    message = "I don't know you";
}

alert(message);