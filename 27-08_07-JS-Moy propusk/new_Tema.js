let numbers = [1, 2, 3, 4, 5];

console.log(numbers.reverse());
console.log(numbers); //метод изменяет исходный массив

let names = 'Ivan, Anna, Olga';
let namesArray = names.split(", "); //метод переводит дaнные из cтроки в элементы массива
console.log(namesArray);

let str = namesArray.join("-") //метод склеивает элементы массива в строку с заданным разделителем(доступен только для массива)
console.log(str);

console.log(str.split("").reverse().join(""))//из строки делаем массив, разворачиваем, склеиваем как строку
console.log('abcd'.split("").reverse().join(""))//строка не объявлена и динамически перевернута

const letters = ["b", "c", "d", "f", "a"];
letters.sort();//автоматически сортирует буквы по алфавиту, сначала по алфавиту постедовательность из заглавных, затем из строчных
console.log(letters);

let num = [2, 7, 1, 11, 15, 20, 21]
num.sort();//выстраивает не по поряку, а по 1,11,15, 2,20,21, 7
console.log(num)

//Методы объектов

const user = {
    name: "Vasya",
    age: 32,
    isMarried: true
}

const keys = Object.keys(user);//собирает в строку все ключи объекта
console.log(keys.length);

console.log(Object.values(user));//собирается массив из значений объекта
console.log(Object.entries(user));//собиратеся массив из ["ключ", "значение"]

let numb = num.map(item => item + 3);//каждый элемент массива увеличится на 3
console.log(numb)

const prices = {
    banana: 1,
    orange: 2,
    fish: 4
}
// [[banana, 1][orange, 2], [fish, 4]]


let doublePrice = Object.entries(prices).map(([key, value])=>[key, value * 2])
//let doublePrice = Object.entries(prices).map(([k, v])=>[k, v * 2])
console.log(doublePrice);

doublePrice = Object.fromEntries(doublePrice);//из массива в обратно в объект
console.log(doublePrice);

//References and Object copy

let a = 10;
let b = 20;

function doSomthing(a,b) {
    a *= a;
    console.log(a);//100
    b /= 4;
    console.log(b);//5
}
doSomthing(a, b);

console.log(a, b);//10 20 функция не изменила исходные переменные (стек). В нем хранятся примитивы(number, boolean, string, undefined, null)

let array = [1, 2, 3, 4, 5];

array.forEach(num => num * 2);//не влияет на старый массив
array.forEach((num, index, array) => array[index] = num * 2);//перезаписывает старый массив

function changeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    } 
    /* for (let num of arr) num *= 2;//не перезаписывает, работает внутри себя */
}

changeArray(array);
console.log(array)//функция изменила исходный массив. В объекте или массиве происходит доступ по ссылке которая изменяет исходный параметр (куча)

const user1 = {
    name: "Vasya",
    age: 32,
    isMarried: true
}

const user2 = user1;//две ссылки на одни и те же данные

user2.name = "Petya";
console.log(user1);
console.log(user2);


/* ARRAY */

const oldArray = ["a", "b", "c"];
/* const newArray = oldArray;//две ссылки на одни и те же данные */
/* const newArray = oldArray.slice(); добавит новые данные в новый массив не изменяя старый*/

const newArray = [...oldArray];//alternative

newArray[3] = "d";

console.log(oldArray);
console.log(newArray);

/* COPY OBJECTS */
function copyObject(obj) {
    const objCopy = {};
    for (let key in obj) {
        objCopy[key] = obj[key]
    }
}