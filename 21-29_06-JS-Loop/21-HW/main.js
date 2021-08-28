//Task01 
/* Конвертер валют
    Запросить у пользователя сумму в рублях
    Конвертировать эту сумму в евро и в доллары
    Вывести результат на экран
*/

let rub = Number(prompt("enter your sum in rubles"));
const dollar = 72.1777;
const euro = 86.1657;

let sumInDollar = rub/dollar;
let sumInEuro = rub/euro;

alert("Your sum is " + sumInDollar.toFixed(2) + " $" + "\nYour sum is " + sumInEuro.toFixed(2) + " EU");

//=----lena-----
const rubles = prompt("enter rubles");
const euroRate = 86.29;
const dollarRate = 72.83;

const rubToEuro = rubles / euroRate;
const rubToDollar = rubles / dollarRate;

if (isNaN(rubToEuro) || rubToEuro <= 0) {
    if (rubles === null) {
    alert("good bye!");
    }
    alert ("summe is not correct!")
} else {
    /* alert(rubles + " rubles = " + rubToEuro.toFixed(2) + " Euro\n" + 
    rubles +  " rubles = " + rubToDollar.toFixed(2) + " Dollars") */
    alert(`${rubles} rubles = ${rubToEuro.toFixed(2)} Euro\n${rubles} rubles = ${rubToDollar.toFixed(2)} Dollars`)
}


//Task02
/* Найдите и выведите на экран сумму четных чисел от 2 до n. (n - число, получаемое от пользователя)
 */

let summe = 0;
const n = Number(prompt("Enter your number, please!"))

for (let i = 0; i <= n; i++){
    if (i % 2 != 0) { continue; }
    summe = summe + i;
}
alert(summe);

//======lena====
let num = 10, sum = 0;

while (num > 1) {
    if (num % 2 == 0) {
        sum += num
    }
    num--;
}
console.log(sum)

sum = 0;
num = 10;

while (num >= 1) {
    sum = (num % 2 != 0) ? sum += num : sum;
    num--;
}
     
console.log(sum);

sum = 0;
num = 10;

for (let i = 1; i <= num; i++){
    /* if (i % 2 != 0) continue;
    sum += i; */
    if (i % 2 == 0) {
        sum += i;
    }
}

for (let i = 2; i <= num; i+=2){
    sum += i;  
}
console.log(sum);

//Task03
/* Игра угадай число
    Случайным образом "загадать" число в диапозоне от 0 до 20
    Предложить пользователю угадать это число
        если введенный ответ больше загаданного числа - вывести сообщение: "загаданное число меньше"
        если ответ меньше - "загаданное число больше"
        если пользователь угадал - "поздравляю, вы выиграли!"
    У пользователя должно быть 3 попыток, после неудачной попытки должно выводиться 
    на экран предложение ввести число еще раз, в этом сообщение указывается сколько попыток осталось.
    Если за 3 попытки пользователь не угадал число - вывести сообщение: "Вы проиграли, число было:..."   
 */

let secret = parseInt(Math.random() * 20);
let i = 3;
let answear = Number(prompt("Мною загадано целое число в диапазоне от 0 до 20. Предлагаю Вам его отгадать! У вас есть " + i + " попытки. Введите предполагаемое число!"));

--i;
while (i > 0) {
    console.log("загаданное число =" + secret);
    console.log("количество попыток =" + i);

    if (answear > secret) {
        alert("загаданное число меньше");
    } else if (answear < secret) {
        alert("загаданное число больше");
    } else {
        alert("поздравляю, вы выиграли!");
    }
    
    answear = Number(prompt("Введите число еще раз, у вас осталось попыток: " + i));
    --i;
} 
alert("Вы проиграли, число было: " + secret);
    
//================lena=============
/* const guessNumber = parseInt(Math.random() * 20);
console.log(guessNumber);
let userAnswer = prompt("Guess the number, my number bigger as 0 ond less 20\n to exit enter 'q' ");
let maxTryCount = 3;
let tryCount;

for (tryCount = 1; tryCount < maxTryCount; tryCount++){
    if (userAnswer == "q" || userAnswer == null) {
        alert(`See you next time! Guess number ${guessNumber}`);
        break;
    }
    if (guessNumber == userAnswer) {
        alert("you win!");
        break;
    } else if (userAnswer > guessNumber) {
        alert("to big number!");
    } else {
        alert("to small number!");
    }
    if (tryCount != maxTryCount) {
        userAnswer = prompt(`try again, enter nuw number.\nyou have ${maxTryCount - tryCount}, try more`);
    }
}

if (tryCount > maxTryCount) {
    alert(`You loos! Guess number ${guessNumber}`);
} */
//===================================================================
const guessNumber = parseInt(Math.random() * 20);
console.log(guessNumber);
let userAnswer = prompt("Guess the number, my number bigger as 0 ond less 20\n to exit enter 'q' ");
let maxTryCount = 3;

while (true) {
    if (userAnswer == "q" || userAnswer == null) {
        alert(`See you next time! Guess number ${guessNumber}`);
        break;
    }
    if (maxTryCount == 0) {
        alert(`You loos! Guess number ${guessNumber}`);
    }
    if (guessNumber == userAnswer) {
        alert("you win!");
        break;
    } else if (guessNumber < userAnswer) {
        alert("to big number");
        maxTryCount--;
    } else {
        alert("to small number")
        maxTryCount--;
    }
    if (maxTryCount != 0) {
        userAnswer = prompt(`try again, enter nuw number.\nyou have ${maxTryCount}, try more`);
    }
}