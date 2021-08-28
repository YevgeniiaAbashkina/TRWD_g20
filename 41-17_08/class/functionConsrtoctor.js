/* const user1 = {
    name: "Vasya",
    lastName: "Ivanov",
    age: 32,
    hello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
const user2 = {
    name: "Petya",
    lastName: "Nikolaev",
    age: 26,
    hello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}; */

function User(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.hello= function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const user1 = new User("Vasya", "Ivanov", 35)
user1.hello()
const user2 = new User("Kolya", "Petrov", 22)
user2.hello();
console.log(user2)

User.prototype.goodBye = function () {
    console.log(`User ${this.lastName} say good bye!`)
}

user1.goodBye();
user2.goodBye();

User.prototype.isHuman = true;

console.log(user1.isHuman);
console.log(user2.isHuman);

user1.getFullName = function () {
    console.log(`My full name is ${this.name} ${this.lastName}`);
}

user1.getFullName();
//user2.getFullName()// is a not a function for user2
console.log(user1);
console.log(user2)
/////////////////////////////////////////
//create consructor by:
const array = new Array(3);

const str = new String("gfgfgfgf");

const date = new Date();


