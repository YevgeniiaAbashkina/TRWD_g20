let num = 20;

function showMessage(text) {
    //console.log("Hello!")
    console.log(text);
    let num = 10;
}

showMessage("hello!"); //вызов функции
showMessage("world");
showMessage();//undefined

let message = "Hello, world!"
showMessage(message);


console.log(num)//is not defined.

//alert("параметры")
//alert("Hello!")

function showUserMassage(from, text) {
    alert(from + ": " + text);
}

let userName = "Vasya";

showUserMassage(userName, "Hallo!");
showUserMassage("Anna", "Hi! How are you?");

function showPrettyMessage(from, text) {
    from = "*" + from + "*";
    alert(from + ": " + text);
}

showPrettyMessage(userName, "Nice to see you!");
alert(userName);

function sum(a, b) {
    let sum = a + b;
    return sum;
}

let result = sum(5, 6);


console.log(sum(20, 30) + result)
console.log(result);

/* function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
} */

function checkAge(age) {
    return (age > 18) ? true : false;
}

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Parents allow?");
    }
}

function showMovie(age) {
    if (checkAge(age)) {
        alert("You can show movie...")
    } else {
        alert("No permission")
    }
}

let ageUser = +prompt("Enter your age");

showMovie(ageUser);

//**************function expretion******************

const logger = function () { //const iz soobrajenij bezopasnosti
    console.log("Hello!");
}

logger();

const show = function (age) {
     if (checkAge(age)) {
        alert("You can show movie...")
    } else {
        alert("No permission")
    }
}

show(50);

//**************************************************** */
/* function learnLanguage(language, callback) {
    console.log(`I learn:${language}`);
    callback();
} */

/* function learnLanguage(language) {
    console.log(`I learn:${language}`);
    //let userName => responce
} */

function showText() {
    console.log("I like it!")
}

//learnLanguage("JavaScript", showText/* () */);//ne ctavit'()
//learnLanguage('English', function () { console.log("Is very hard") });
//learnLanguage('Russian', 'one')//net metoda (callback is not a function) 

/* learnLanguage("JavaScript");
showText("I like it"); */

function askAgree(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

askAgree("Are you agree?", function () { alert("You are agree") }, function () {
    alert("You don't agree")
});


//*********strelochnue function */

/* const calc = (a, b) => {
    a *= 2;
    b *= 5;
    return a + b;
} */

const calc = (a, b) => b - a;//5-4=1
console.log(calc(4, 5));

