//Task01
//fill the Pifagor-table


let output = "";
let pifagorTable = [[],[],[],[],[],[],[],[],[],[]]; 
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        pifagorTable[i - 1][j - 1] = i * j;
        output += pifagorTable[i - 1][j - 1] + '\t';
    }
    console.log(output + '\n');
    output = "";
}

console.log(pifagorTable[5][5])


//*make the Pifagor-table for the browser
document.write('<h1 style = "text-align:center">Pifagor table</h1>');
document.write('<table border = "1" cellspacing = "0" cellpading = "5" align = "center">');
for (let i = 1; i <= 10; i++){
    document.write('<tr>');
    for (let j = 1; j <= 10; j++) {
        document.write("<td width = '50px' height = '50px' style = 'text-align:center'>" + pifagorTable[i-1][j-1]+"</td>");
    }
    document.write('</tr>')
}
document.write('</table>')


//Task02
//С помощью цикла сформируйте строку n...9 8 7 6 5 4 3 2 1, где n - число получаемое от пользователя. 
//выведите значение этой переменной на экран.

let countForTask2 = +prompt('Enter your number for Task02, please  .', 0);
let outputStrForTask2 = "";
for (let i = countForTask2; i >= 1; i--){
    outputStrForTask2 += countForTask2 + " ";
    countForTask2--;
}

alert(outputStrForTask2);

//Task03*
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Например для n = 10 результат должен быть 2,3,5,7. (Можно использовать alert, в этом случае будет четыре сообщения или console.log, тогда результат будет выводится в столбик (те вывод не должен быть буквальным 2,3,5,7))
//Натуральное число, большее 1, называется простым, если оно делится на себя и на 1. (То есть таки числа как 2, 3, 5, 7, 11, 13 и тд)

// Получаем количество чисел которые нам надо вывести
let count = +prompt('Enter your number for Task03, please  .', 0);

// Определяем базовое число
let currentNumber = 2;
let outputStrForTask3 = "";

// Определяем функцию которая проверяет натурайное ли число или нет
function isNatural(number) {
    for (var i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}


//Продолжаем цикл до тех пор, пока количество требуемых для отображения чисел не достигнет нуля  
for (let i = count; i >= 0; i--){
    //проверяем, что базовое число меньше числа от пользователя и, что данное число является простым  
    if ((currentNumber <= count) && isNatural(currentNumber)) {
        outputStrForTask3 += currentNumber + " ";
        alert(currentNumber);
        count--;
    } 
    currentNumber++;
}

console.log("outputStrForTask3 = " + outputStrForTask3);
//alert(outputStrForTask2);

