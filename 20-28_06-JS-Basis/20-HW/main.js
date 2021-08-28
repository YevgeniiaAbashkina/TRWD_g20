//=====Task01=====
let num1, num2;

num1 = +prompt("Enter first number");
num2 = +prompt("Enter second number");

let sum = num1 + num2;

// operator if:
if (sum < 10) {
    alert("Your sum so little!")
} else if (sum > 10) {
    alert("Your sum so big!")
}
else {
    alert("Bingo!")
}

// ?:
let message =   (sum < 10) ? "Your sum so little!" :
                (sum > 10) ? "Your sum so big!" : "Bingo!";
console.log(message);

//=====Task02=====
let login;

login = prompt("Enter your login");

// operator if:
if (login === "employee") {
    alert("Hi, employee!");
} else if (login === "boss") {
    alert("Hello, boss!");
} else if (login === "") {
    alert("no login...");
} else {
    alert("Hi, user!");
}

//switch:
switch (login) {
    case "employee":
        alert("Hi, employee!");
        break;
    case "boss":
        alert("Hello, boss!");
        break;
    case "":
        alert("no login...");
        break;
    default:
        alert("Hi, user!");
}

//=====Task03=====
let age;
age = +prompt("Enter your age!");

/* if (age >= 14 && age <= 90) {
    alert("your age is between 14 and 90");
} else if (!(age >= 14 && age <= 90)) {
    alert("your age is not between 14 and 90");
} */

let myCondition = (age >= 14 && age <= 90);
if (myCondition) {
    alert("your age is between 14 and 90");
} else if (!myCondition) {
    alert("your age is not between 14 and 90");
}

//================Solutions by Lena=====================
                 
                //****Task01****/
const number1 = +prompt("enter your number one");
const number2 = +prompt("enter your number two");
const summe = number1 + number2;
let message;

if (summe > 10) {
    message = "to big summe";
} else if (summe < 10) {
    message = "to small summe";
} else {
    message = "Bingo!"
}
alert(message);

//2)
const message = (summe > 10) ? "to big summe" : (summe < 10) ? "to small summe" : "Bingo!";
alert(message);

                //*****Task02*****/
let newMessage = "Hi ";
const login = String(prompt("enter your login"));

/* if (login === "employee" || login === "Employee") {
    newMessage = newMessage + login + "!" // newMesaage += login + "!"
} else if (login === "boss") {
    newMessage = "Hello? boss!";
} else if (login === "" || login === null) {
    newMessage = "No login...";
} else {
    newMessage += "user"
} */


/* if (login === null) {
    newMessage = "no login";
} else {   */

switch (login) {
    case "employee":
        newMessage += login + "!";
        break;
    case "boss":
        newMessage = "Hello, boss!";
        break;
    case "null":
    case "":
        newMessage = "no login...";
        break;
    default:
        newMessage += "user";
}

alert(newMessage);

//Task03
let age = 30;

if (age >= 14 && age <= 90) {
    console.log("access allowed");
}

if (age < 14 || age > 90) {
    console.log("access denied")
}

if (!(age >= 14 && age <= 90)) {
    console.log("one more denied");
}


