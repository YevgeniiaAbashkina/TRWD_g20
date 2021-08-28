/* let myName = "Vasya";//глобальная переменная

function sayHello() {
    myName = "Anna"//независимо от глобальных переменных будет значение внутри функции
    console.log(`hello, ${myName}`)
}

sayHello();//hello, Vasya
myName = "Kolya";//hello, Vasya

sayHello();//hello, Kolya */

let myName;

function getMessage() {
    myName = "Petya";
    return function () {
        console.log(myName)
    }
}

myName = "Vasya";

let message = getMessage()//function () {console.log(myName)}
message();//вызвать то что выше

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}

let counter = makeCounter();
console.log("counter1", counter());//0
console.log("counter2", counter());//1
console.log("counter3",counter());//2
console.log("counter4", counter());//3

counter = makeCounter(); //или const counter1 = makeCounter()
console.log("counterNew", counter());//0


/* function makeUserId() {
    let userIdFunction = [];
    //let i = 0;   записывается сюда 5 и выводит только 5
    while (i < 5) {
        let userId = function () {
            console.log(i);
        }
        userIdFunction.push(userId);
        i++;
    }
    return userIdFunction;
}

let userId = makeUserId();
userId();
userId[3]();
userId[4](); */

function makeUserId() {
    let userIdFunction = [];
    
    for (let i = 0; i < 5; i++) {
        let userId = function () {
            console.log(i);
        }
        userIdFunction.push(userId);
    }
    return userIdFunction;
}

let userId = makeUserId();
userId[0]();
userId[1]();
userId[2]();
userId[3]();
userId[4]();

//Prototype////////////////////////////

let str = "some string";
//const strObject = new String(str)
const strObject = new String("Another string")

console.log(typeof str);//string
console.log(typeof strObject);//object

console.log("abcd".toUpperCase())//написать строку без инициализации

console.dir([1, 2, 3]);

const cat = {
    feet: 4,
    tail: 1,
    ears: 2,
    voice: function () {
        console.log("meow-meow")
    }
}

const barsik = {
    color: "black",
    age: 2,
}

//old syntaxis prototype
/* barsik.__proto__ = cat; --> deprecated*/
/* 
console.log(barsik);
console.dir(barsik);

barsik.voice()
console.log(barsik.tail) */

//new syntaxis
Object.setPrototypeOf(barsik, cat)//статический способ
const murzik = Object.create(cat);//динамический способ
// murzik.color = "white"
//murzik.age = 3
/////////////////////ИЛИ:
//const muzik =  Object.create(cat, {color:{value: "white"}, age:{value: 4}})

console.log(barsik);
console.dir(barsik);

barsik.voice()
console.log(barsik.tail)

//FUNCTION CONSTRUCTOR
function User(name, id) {
        this.name = name,
        this.id = id,
        this.human = true,
        this.say = function (message) {
            console.log(`${name} say: ${message}`)
        }
}

const user1 = new User("Vasya", 1);
user1.say("Hello!");

const user2 = new User("Anna", 2);
user2.say("Nice to meet you!");

console.log(user1, user2);

user1.age = 32;
User.prototype.goodBye = function () {
    console.log(`User with name ${this.name} say good bye`)
}
console.log(user1.age, user2.age);// 32, undefined

user1.goodBye();
user2.goodBye()