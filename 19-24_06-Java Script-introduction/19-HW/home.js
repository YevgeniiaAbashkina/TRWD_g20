// Task01

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b);

// Task02

let workPerHour = prompt("Укажите стоимость Вашей работы за час!");
let workInDay = prompt("Сколько часов в день Вы работаете?");
const SUM_DAY = 22;

alert("Ваша заработная плата составляет:" + workPerHour * workInDay * SUM_DAY);

// Task03

let r = prompt("Enter your radius, please!" + " (cm)");
const PI = 3.14;
alert("Area of ​​your circumference =" + PI * r ** 2 + ", cm^2");
//===================================================================
/* solutions by Lena */
/* Task01 */
let a = +prompt("Первое число?", 1);//number
let b = +prompt("Второе число?", 2);

console.log(typeof a); //string
//a = +a;
let summe = a + b;
console.log(typeof summe); //number
console.log(typeof a); //number

alert(summe);

/* Task02 */
let pricePerHour,
    countHoursPerDay;
const workDayPerMonth = 22;

pricePerHour = prompt("Enter price per hour");
countHoursPerDay = prompt("Enter count of hours per day");

//let salary = Number(pricePerHour) * Number(countHoursPerDay) * 22;

let salary = pricePerHour * countHoursPerDay * workDayPerMonth;

alert("Your salary is: " + salary);


/* Task03 */
const PI = 3.14;
const radius = Number(prompt("Enter radius"));

//let circleSquare = PI * radius * radius;
let circleSquare = PI * radius ** 2;

alert("Result: " + circleSquare);