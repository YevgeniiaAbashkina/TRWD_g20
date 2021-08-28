/* const str = "hello!\n\"world\"\u{1f60D}" *///'hello!', `hello!`

/* let str2 = `hello
world!
   *-----*` */

let str2 = `hello world!`   


/*console.log(str2);
console.log(str); */

console.log(str2[str2.length - 1]);//строка как массив в js

str2[0] = "H";//не изменится
console.log(str2);

str2 = "Hello world wow!";//строка не изменяемый ТД, его нельзя переопределить, а только создать новую в памяти
console.log(str2);

/* console.log(str.length);
console.log(str); */

const numbers = [1, 2, 3, 4, 5, 6];
numbers[0] = 6;

console.log(numbers)

console.log(str2.charAt(2))//считает номер символа

str2.toUpperCase()//-
str2 = str2.toUpperCase();//HELLO WORLD!
str2 = str2.toLowerCase();

console.log(str2);

console.log(str2.indexOf("w")); //буква на 6 месте
console.log(str2.indexOf("w", 7)); //12

console.log(str2.lastIndexOf("w"));//встречается последний раз

console.log(str2.startsWith("h"));//начинается с буквы ""

console.log(str2.endsWith("wow!"));//end с буквы ""

console.log(str2.includes("wor"));//включает



console.log("---------------------------------")
//str2 = "Hello world wow!"
console.log(str2.slice(6, 11))//2вкл 7 невкл

let str3 = str2.slice(-6, -2)//с конца считает
console.log(str3);

console.log(str2.substring(11, 6))//11 до какого 6 с какого

console.log(str2.substr(6, 3))//с 6 и взять 3 символа от него

str2 = str2.replace("e", "a")// e -> a

console.log(str2);

str2 = str2.replaceAll("wo", "WwW");
console.log(str2);

let names = "Ivan, Anna, Vasya, Olya, Petya";
let nameArray = names.split(", ");//make arrays
console.log(nameArray[0], nameArray)

const arrayLetters = "apple".split("");//array from letters
console.log(arrayLetters)

const arrayLet = "1123456".split("");//array from letters
console.log(arrayLet)

//=================================Arrays===============================
let num = [1, 2, 3, 4];

//delete num[1]//пустая ячейка будет 1 empty 3 4 

console.log(num)

num.splice(1, 1)//1-begin, 1-how mach
console.log(num)

num.splice(1, 2, 5, 6, 7, 8)
console.log(num);


const num1 = num.slice(1, 3);

console.log(num1);

const newNums = num.concat(num1, 6,7, num1);
console.log(newNums);

//num.forEach(item => console.log(item * 2));

num.forEach((item, index, array) => console.log(`${item} has ${index}, in ${array}`));

let users = [
    { id: 1, name: "Vasya" },//item
    { id: 2, name: "Anna" },
    { id: 3, name: "Vanya" },
]
let user = users.find(item => item.name == "Anna");
//let user = users.find(item => item.id == 1);
//user.name = "Kolya"
console.log(user)

let userWithLongName = users.filter(user => user.name.length >=5)
console.log(userWithLongName);

num = [1, 2, 3, 4];
let newNumbers = num.map(num => num * 2);
console.log(newNumbers);

const citys = ["Berlin", "London", "Paris", "Kyew"]

const citysLength = citys.map(city => city.length)

console.log(citysLength)//6 6 5 4

num = [1, 2, 3, 4, 5];
let result = num.reduce((sum, current) => sum + current, 10);
console.log(result);

let strings = ["one", "two", "three"];
result = strings.reduce((str,s)=>str+" " +s)

console.log(result);

//