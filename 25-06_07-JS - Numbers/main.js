//numbers

let billion = 1e9//1000000000

let bigNumber = 7.3e9;

let ms = 1+ 1e-6;//1.000001

ms = 3e-3;//0.003

console.log(billion);
console.log(bigNumber);//73000000000
console.log(ms);//0.000001
console.log(1 + 5e-5);//1.00005

//12345678910/ 11 12 13 14 15
console.log(0xff);//16richnaya CI / 0 1 2 3 4 5 6 7 8 9 a b c d e f g
console.log(0b11111111)//2 /01 10 11 100 binary
console.log(0o377)//8 

let num = 255;
console.log(typeof num);

/* num = num.toString();
console.log(typeof num); */

console.log(num.toString(2))//переведет с СИ но это будет строка

Math.randomRangeArray = function (arraySize, numberRange) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(parseInt(Math.random() * numberRange));  
    }
    return array;
}
const arr = Math.randomRangeArray(4, 10);//4 числа в диапазоне 10
console.log(arr);

let sum = 0.1 + 0.2;
console.log(sum)//0.30000000000000004
console.log(sum.toFixed(2));

console.log(9999999999999999);//10000000000000000 c16

console.log(123456..toString(2));
console.log(12.3456.toFixed(2));

num = "22.24.34 px";
console.log(typeof num);
//num = Number(num);//NaN
num = parseInt(num)//22
num =parseFloat(num)//22.24
console.log(typeof num);
console.log(num);

//num.parseInt()

num = "ff";
console.log(parseInt(num,16))//255


num = "111101";
console.log(parseInt(num, 2))//61

console.log(1.35.toFixed(2));//1.4
console.log(6.35.toFixed(2));//6.3

function randomInteger (min, max) { //
    return Math.floor(min + Math.random() * (max - min +1));
}

//((max+0.5) - (min - 0.5) ) -> max +0.5 - min + 0.5 = max-min+1

num = randomInteger(1, 3);
console.log(num);

//1 - 1.49999 -> 1
//1.5 - 2.499999 -> 2
//2.5 - 2.99999 -> 3

//Math.floor -> 3.1 = 3.0;
//Math.ceil -> 3.1 = 4;
//Math.round -> 3.1 = 3; 3.6 = 4;
//Math.trunc -> 3.1 = 3.0; 3.7 = 3.0;

const person = {
    name: "Vasya",
    age: 32,
    isMarried: true,
    say: function () {
        console.log("Hello!");
    }
}

person.say();




