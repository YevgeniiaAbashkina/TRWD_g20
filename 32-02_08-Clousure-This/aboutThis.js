//"use strict"//sintacsys Ecma6
/* 
age = 12;
console.log(age)  */

"use strict"

/* function showThis() {
    console.log(this)
}

showThis(); */

/* 
1. Для любой обычной функции контекст вызова это глобальный обьект this = window(при нестрогом режиме,  undefinet = "use strict"
2. Контекст  у методов объекта будет сам объект.
3. This в функциях-конструкторах относится к создаваемому (новому) экземпляру объекта  )
4. Pучная привязка  This - call, apply, bind.
 */

function sumNumber(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b
    }
    console.log(sum())
}

sumNumber(1, 2);

/* const object = {
    a: 20,
    b: 14,
    sum: function () {
        console.log(this)//относится с sum
        console.log(this.a + this.b);
        function more() {
            console.log(this)//потеря контекста
        }
        more()
    }
}

object.sum() */

const object = {
    a: 20,
    b: 14,
    sum: function () {
        console.log(this)//относится с sum
        console.log(this.a + this.b);
        const more=() =>  console.log(this)  //нет потери контекста, у стрелочной будет виден объект снаружи
        more();
    }
}

object.sum()

function User(name, id) {
    this.name = name,
        this.id = id,
        this.hello = function () {
        console.log(`hello, ${this.name} `)
        }
}

//const user = new User ("Vasya", 1)

/* function sayName() {
    console.log(this);
    console.log(this.name)//undefined
}
const user = {
     name: "John"
}
 
sayName(); */
function sayName(lastName, age) {
    console.log(this);
    console.log(this.name + lastName + `, age: ${age}`)
}
const user = {
    name: "John",
    age: 32,
}
 
//sayName();
sayName.call(user, " Smith", 12);
sayName.apply(user, [" Klein", 12])//параметры передаются в виде массива
////////////bind//////////////////////////
function printMessage() {
    console.log(this)
}
printMessage()//global object Window
const print = printMessage.bind("Hello!");
print();
///////////////////////////////////////////////
function count(num) {
    return this * num
}

const double = count.bind(2)//это не num это контекст для this(this=2)

console.log(double(5))
////////////////
function count1(num) {
    return (num %2 ==0)? num * this.a: num * this.b
}

const double2 = count1.bind({a:2, b:3})//это не num это контекст для this(this=2)

console.log(double2(12))