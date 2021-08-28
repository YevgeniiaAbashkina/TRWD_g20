/* const numbers = [];

let arr = new Array(4, 3, 5, 6, 77);//если одно число воспринимается как длинна массива, если несколько, это будут уже элементы
let arr = new Array(4, "apple", "melone");

console.log(arr);
arr.push(2);
console.log(arr); */

/* for (let i = 0; i < 4; i++){
    arr[i] = i;
} 

arr[0] = 5;
 */

/* numbers.length = 5; */

//массив из 5 случайных чисел, показываем пользователю и потом надо ему ввести первое и последнее, если не угадал, то написать, что надо тренироваться
const numbers = [];//1 bis 100

for (let i = 0; i < 5; i++){
    numbers[i] = parseInt(Math.random() * 100);
    //let randomNumber = parseInt(Math.random() * 100);
    //numbers.push(randomNumber);
}

//console.log(numbers)
alert(`Remember numbers and orders\n${numbers}`);

let userAnswer = +prompt("What is first number?");
if (userAnswer == numbers[0]) {
    alert("You right!!!")
} else {
    alert(`Wrong answer, right number is ${numbers[0]}`)
}

userAnswer = +prompt("What is last number?");
if (userAnswer == numbers[numbers.length-1]) {
    alert("You right!!!")
} else {
    alert(`Wrong answer, right number is ${numbers[numbers.length-1]}`)
}

let randomIndex = parseInt(Math.random() * numbers.length);

userAnswer = +prompt(`What war the ${randomIndex + 1} number?`);
if (userAnswer == numbers[randomIndex]) {
    alert("You right!!!")
} else {
    alert(`Wrong answer, right number is ${numbers[randomIndex]}`)
}

//Task2
/* 
function powerNumber(3,3) 3^3=27
powerNumber(5,3) 5^3=125
*/

//Task3
/* 
constnumbers =[2, 4, 6, 10, 12];
function sumNumbers(numbers) ->34
*/

//Task4*
/* 
const numbers = [1, 2, 3, 4, 5];
function reversArray(numbers) ->[5, 4, 3, 2, 1]
*/


