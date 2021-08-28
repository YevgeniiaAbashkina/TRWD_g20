//======Types conversion===============

//Number
let str = "    1230z    "; //"12", "90   " "12.3" главное без символа и без пробела

//str = Number(str);
//str = +str;
str = parseInt(str);//отличное от цыфры и . и до пробела отбрасывется


console.log(typeof str);
console.log(str);

str = "one"; //не приведется в число
str = Number(str);
console.log(str);

str = null;
//str = Number(str);// переведет в ноль
str = parseInt(str);//

console.log(str);// NaN

str = false;
console.log(+str);//0
console.log(parseInt(str));//NaN

str = true;
console.log(+str);//1
console.log(parseInt(str));//NaN

str = undefined;
console.log("__________________")
console.log(+str);//NaN
console.log(parseInt(str));//NaN

//String
let value = true;
console.log("_______");
console.log(typeof value);

value = String(value);// ==> value = " " + value;

console.log(typeof value)//string

//false -> "false", null -> "null", undefined -> "undefined", 123 -> "123"

//Boolean
console.log("______________")
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean(-5));//true
console.log(Boolean("hello!"));//true
console.log(Boolean(""));//false
console.log(Boolean(" "));//true
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false

//====================Comparison operatops==========

// a > b, a < b
// a >= b, a <= b
// a == b, не сторогое соответствие, 
// a === b строгое равенство
// != не равно

console.log("-------------");
console.log(5 < 3); //false
console.log(5 != 3); //true

let isBigger = 5 > 4;
console.log("isBigger: " + isBigger); //isBigger: true

let isBiigger = 3 > 4;
console.log("isBiigger: " + isBiigger); //isBigger: false

console.log("------------");
console.log("a" > "q");
console.log("cat" > "cad");//true
console.log("cat" > "cats");//false
console.log("cat" > "Cat");//true нижний регистр тяжелее
console.log("abc" > "XYZ");//true
console.log("ABC" == "BAC");//false

let num1 = 42;
let num2 = "42";
 
console.log(num1 == num2);//true
console.log(num1 === num2);//false

num1 = 0;
str = "";
let result = false;

//console.log(num1 == str);//true
console.log(num1 == result);//true
console.log(null == undefined);//true ничто равно ничто

console.log(null > 0);//false
console.log(null == 0);//false не переводит null к числу
console.log(null >= 0);//true


//------------------
//=======Conditional operators=================

//if, if else, ternarnuy
num1 = +prompt("enter number");
num2 = +prompt("enter second number");

/* if (num1 > num2) {
    var max = num1;
    alert("Max number is: " + max);
} else if (num1 === num2) {
    alert("numbers are equal")
    //max = num1;
}
else if(num2  > num1){
    var max = num2;
    alert("Max number is: " + max);
}

alert("Programm ended") */

let max = num1;

/* if (num1 < num2) {
    max = num2;
} else {
    alert("numbers are equal")
}
alert("Max number is: " + max); */

if (!num1 > num2){
    max = num2;
}
alert("Max number is: " + max);

if (0) {
    console.log("hello!")//никогда не выполнится
}

if(""){
    console.log("hello!")//никогда не выполнится
}

let isFieldChecked = true;

if (isFieldChecked) {
    console.log("field is checked")
}

/* if (isFieldChecked) console.log("field is checked"); */

let isAccessAllowed;
let age = +prompt("enter your age, please");

/* if (age >= 18) {
    isAccessAllowed=true
} else {
    isAccessAllowed = false;
} */

isAccessAllowed = (age >= 18) ? true : false;

//alert(isAccessAllowed);

/* if (age <= 3) {
    alert("Hi, small one!");
} else if (age <= 20) {
    alert("Hi, middle one!")
} else if (age <= 100) {
    alert("Hello, madam or sir!")
} else {
    alert("Hello, lucky one!")
} */

let message =   (age <= 3) ? "Hi, small one!" :
                (age <= 20) ? "Hi, middle one!" :
                (age <= 100) ? "Hello, madam or sir!" : "Hello, lucky one!";
                

//alert(message);

alert((5 > 3) ? "yes" : "no");//не принято так использовать

//Switch

/* switch (x) {
    /* case 1:
        alert("Hello!");//if(x===1)
    case 2:
        alert("Good bye!");//if(x===2)
    default:
        alert("nice to mit you!") */

let sumNumber = +prompt("2+2=?");

switch (sumNumber) {
    case 2:
    case 3:
    case 5:
        alert("wrong  answear, try again");
        break;
    case 4:
        alert("bingo!");
        break;
    default:
        alert("try again");
}

/*switch (sumNumber){
    case 3:
        alert("too little");
        break;
    case 5:
        alert("too much");
        break;
    case 4:
        alert("bingo");
        break;
    default:
        alert("try again");
} 

/* let userName = prompt("enter your name");

switch (userName) {
    case "Lena":
        alert("Hi, Lena!");
        break;
    case "Vasya":
        alert("Hi, Vasya!");
        break;
    default:
        alert("I don't know you!")
} */

//============Logical operators===================

// || --> or , && --> and,  ! --> not

let hour = 11;

if (hour < 10 || hour > 18) {
    console.log("shop is closed")
}

// false||false --> false
//  true||false --> true
//  true||true  --> true
// false||true  --> true

hour = 12;
let minute = 30;

if (hour === 12 && minute === 30) {
    console.log("The time is 12:30");
}

// true  && true  --> true
// true  && false --> false
// false && true  --> false
// false && false --> false

console.log(isFieldChecked);
console.log(!isFieldChecked);

//============Confirm============
let isWeekend = confirm("Is a weekend now?");
alert(isWeekend);
















    