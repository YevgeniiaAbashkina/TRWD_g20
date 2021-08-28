//Task01
//function getShortNames(arrName)     (["Kolya", "Anna", "Misha", "Mark", "Innokentiy"] -> ["Anna", "Mark"]) (length ==4)
//functin getShortNames(namesArray, nameLength) формирует массив из имен заданного к-ва букв
const arrayWithNames = ["Kolya", "Anna", "Misha", "Mark", "Innokentiy", "Jens"];

function getShortNames(array) {
    const resultsArr = array.filter(name => name.length == 4);
    return resultsArr;
}
console.log(getShortNames(arrayWithNames));
/////////////////////////////////////////////////
const arrayWithNames1 = ["Kolya", "Anna", "Misha", "Mark", "Innokentiy", "Jens"];

function getShortNames1(namesArray, nameLength) {
    const resultsArr = namesArray.filter(name => name.length == nameLength);
    return resultsArr;
}
/* 
function getShortNames1(namesArray, nameLength) {
     return namesArray.filter(name => name.length == nameLength);
 
} */

console.log(getShortNames1(arrayWithNames1, 10));
//Task02
/* метод массив делителей этого числа
function getDevisors(12) -> [2,3,4,6]
function getDevisors(15) -> [3,5
function getDevisors(13) -> "13 is primy" */
function getDevisors(n) {
    let arrDevisors = [];
    
    for (let i = 1; i <= n; i++) {
        let result = n / i;
        if (n % i == 0) {
            if (result == 1 || result == n) {
                console.log(`Number ${n} is symple`);
            } else {
                arrDevisors.push(i);
            }
        }
    }
    return arrDevisors
}

console.log(getDevisors(12))

function getDevisors2(n) {
    let arrDevisors = [];
    
    for (let i = 2; i <= Math.floor(n/2); i++) {
        if (n % i == 0) {
            arrDevisors.push(i);
            }
        
    }
    return arrDevisors.length ? arrDevisors : n + " is prime"
}

console.log(getDevisors2(12))
//Task03*
/* 
function sumDigitalNumber(100002345671) -> 1+0+0+0+0+2+3+4+5+6+7=(29) 2+9=(11) 1+1=(2) (recursion)
*/
/* sumDigitalNumber(100002345671);

function sumDigitalNumber(number) {
    const arrayOfCharacters = number.toString().split('');
    let sumOfDigits = 0;
    for (char of arrayOfCharacters) {
        let digit = Number(char)
        sumOfDigits += digit;
    }

    if (sumOfDigits.toString().split('').length > 1) {
        console.log(sumOfDigits);
        sumDigitalNumber(sumOfDigits);
    } else {
        console.log(sumOfDigits);
        return sumOfDigits;
    }
} */

////////////////////
function sumDigitalNumber2(number) {
    if (number < 10) {
        return number;
    }return sumDigitalNumber2(number%10 + Math.floor(number/10))
}
console.log(sumDigitalNumber2(100002345671))
//11%10 = 1   11/10=Math.Floor(1.1)-->1
//13/10 = 3   13/10=Math.floor(1.3)-->1


function sumDigitalNumber3(number) {
    return number < 10 ? number: sumDigitalNumber2(number%10 + Math.floor(number/10));
}
console.log(sumDigitalNumber3(100002345671));

function sumDigitalNumber4(num) {
    return num < 10 ? num : sumDigitalNumber4(num.toString().split('').reduce((sum, number) => sum + parseInt(number), 0));
}
console.log(sumDigitalNumber4(100002345671));

///function sumTwoArray(array1, array2) ->общю сумму чисел двух массивов


/* function sumTwoArray(array1, array2) {
    let sum = 0;
    for (let i = 0; i < array1.length; i++){
        sum += array1[i]
    }
    for (let i = 0; i < array2.length; i++){
        sum += array2[i]
    }
    return sum;
}

console.log(sumTwoArray([1, 2, 3], [4, 5, 6])) */
///////////////////////////////////////////////////

function sumTwoArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
//////////////////////////////////////////////////

function sumTwoArray(array1, array2) {
    return sumTwoArr(array1) + sumTwoArr(array2);
}

console.log(sumTwoArray([1,2,3], [4,5,6]))

