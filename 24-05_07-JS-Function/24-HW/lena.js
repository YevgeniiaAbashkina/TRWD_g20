'use strict';

//Task01
//Make memory game with functions

let checkError;

startGame();

/* const firstAnswer = getUserAnswer(1);
checkAnswer(number[0], firstAnswer);

const secondAnswer = getUserAnswer(numbers.length);
checkAnswer(numbers[numbers.length - 1], secondAnswer);

const thridAnswer = getUserAnswer(randomIndex + 1);
checkAnswer(numbers[randomIndex], thridAnswer) */



function startGame() {
    let repeat = true;
    while (repeat) {
        const numbers = fillArrayRandomNumber(5, 100);
        console.log(numbers);
        const maxQuestions = 3;
        checkError = true;

    showMessage(numbers);
    for (let i = 0; i < maxQuestions; i++) {
        const randomIndex = getRandomRangeNumber(numbers.length);
        const userAnswer = getUserAnswer(randomIndex + 1);
        checkAnswer(numbers[randomIndex], userAnswer);
    }
    if (checkError = true) {
        alert("You have a great memory!");
        }
        repeat = confirm("one more time?");
    }
}

function getRandomRangeNumber(range) {
    return parseInt(Math.random() * range); //получить случайное число в каком то диапазоне
}

function fillArrayRandomNumber(length, range) {
    let array = [];
    for (let i = 0; i < length; i++){
        array.push(getRandomRangeNumber(range));
    }
    return array;
}
console.log(numbers);

function showMessage(array) {
    alert(`Remember numbers and orders\n${array}`); 
}

function getUserAnswer(number) {
    return +prompt(`What is ${number} number?`);
}

function checkAnswer(number, userAnswer) {
        if(userAnswer == number){
            alert('You right!!!')
        }else{
            alert(`Wrong answer, right number is ${number}`);
            checkError = false;
    }
}


//Task02
/* 
function powerNumber(3,3) -> 27
powerNumber(5,3) -> 125
 */
const power = (a, b) => a ** b;//стрелочная функция

console.log(power(3, 3));


function powerNumber(number, power) {
    let result = 1;//любое число в нулевой степени = 1
    for (let i = 0; i < power; i++){
        result *= number;
    }
    return result;
}

console.log(powerNumber(3, 3));

//===============My======================
function powerNumber(a, b) {
    let result = a;
    for (let i = 1; i < b; i++){
        result *= a;
    }
    return result;
}

let result = powerNumber(3, 3);

console.log(result);

//Task03
/* 
const numbers = [2,4,6,10,12];
function sumNumbers(numbers) -> 34;
 */

//=============Lena======================
/* const numberss = [2, 4, 6, 10, 12];
function sumArrayNumbers(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
} */

//можно и для массивов и для объектов
const numberss = [2, 4, 6, 10, 12];
function sumArrayNumbers(array) {
    let sum = 0;
    for (let num in array) {
        sum += array[num];
    }
    return sum;
}

console.log(sumArrayNumbers(numberss));

//============My=========================
const numbersTask3 = [2, 4, 6, 10, 12];

function sumNumbers(numbersTask3) {
   let sum = 0;
   for (let i = 0; i < numbersTask3.length; i++){
       sum += numbersTask3[i];
   }
    return sum;
}

let sum = sumNumbers([2, 4, 6, 10, 12]);

console.log(sum);

//Task04*
/* 
const numbers = [1,2,3,4,5];
function reversArray(numbers) -> [5,4,3,2,1]
 */