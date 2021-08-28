//массив из 5 случайных чисел, показываем пользователю и потом надо ему ввести первое и последнее, если не угадал, то написать
const numbers = getRandomArray();
alert(`Remember numbers and orders\n${numbers}`);

callDialogForFirstNumber(numbers);
callDialogForLastNumber(numbers);
callDialogForRandomNumber(numbers);

function getRandomArray() {
    let array = [];

    for (let i = 0; i < 5; i++){
    array[i] = parseInt(Math.random() * 100);
    }
    return array;
}

function callDialogForFirstNumber(array) {
    let userAnswer = +prompt("What is first number?");
    if (userAnswer == array[0]) {
        printYouAreRight();
    } else {
        alert(`Wrong answer, right number is ${array[0]}`);
    }
}

function callDialogForLastNumber(array) {
    userAnswer = +prompt("What is last number?");
    if (userAnswer == array[array.length - 1]) {
        printYouAreRight();
    } else {
        alert(`Wrong answer, right number is ${array[array.length - 1]}`);
    }
}

function callDialogForRandomNumber(array) {
    let randomIndex = parseInt(Math.random() * array.length);

    userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);
    if (userAnswer == array[randomIndex]) {
        printYouAreRight();
    } else {
        alert(`Wrong answer, right number is ${array[randomIndex]}`);
    }
}

function printYouAreRight() {
    alert("You are right!!!");
}

//Task2
/* 
function powerNumber(3,3) 3^3=27
powerNumber(5,3) 5^3=125
*/
function powerNumber(a, b) {
    let result = a;
    for (let i = 1; i < b; i++){
        result *= a;
    }
    return result;
}

let result = powerNumber(3, 3);

console.log(result);

//Task3
/* 
const numbers =[2, 4, 6, 10, 12];
function sumNumbers(numbers) ->34
*/
const numbersTask3 = [2, 4, 6, 10, 12];

function sumNumbers(numbersTask3) {
   let sum = 0;
   for (i = 0; i < numbersTask3.length; i++){
       sum += numbersTask3[i];
   }
    return sum;
}

let sum = sumNumbers([2, 4, 6, 10, 12]);

console.log(sum);

//Task4*
/* 
const numbers = [1, 2, 3, 4, 5];
function reversArray(numbers) ->[5, 4, 3, 2, 1]
*/
//[1][2][3][4][5]=>[5][4][3][2][1]

numbers = [1, 2, 3, 4, 5];
function reverseArray(array) {
    for (let i = 0; i < array.length / 2; i++){
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}

console.log(numbers);
reverseArray(numbers);
console.log(numbers);
//на основании старого создал новый
function reverse(array) {
    let reversArray = [];
    for (let i = array.length - 1; i >= 0; i--){
        reversArray.push(array[i]);
    }
    return reversArray;
}

const newArray = reverse(numbers);
console.log(newArray);



//==========My==========================
const numbersTask4 = [1, 2, 3, 4, 5];
console.log(numbersTask4);

function reversArray (x){
   let a = [];
   for (i = 0; i < x.length; i++){
       a[i] = x[(x.length - 1) - i];
   }
    return a;
}

let a = reversArray(numbersTask4);

console.log(a);


