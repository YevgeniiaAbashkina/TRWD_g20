//1
const person1 = {
    id: 0,
    name: "John",
    age: 55,
};

const person2 = {
    id: 1,
    name: "Jack",
    age: 30,
};
/////////////constructor///////////////
let iteratorId = 2;

function Person(name, age) {
    this.id = iteratorId++;
    this.name = name;
    this.age = age;
    this.sayHello=()=>console.log(`Hello, ${this.name}`)
}
//////////////////////////////
const person3 = new Person("Anna", 18);
const person4 = new Person("Olga", 28)

console.log(person1);
console.log(person4);

//2
/* const employee = {
    id: 5,
    name: "Jane",
    age: 32,
    profession: "teacher",
    salary:3000,
} */

function Employee(profession, salary) {
    this.profession = profession;
    this.salary = salary;
    //this.display=()=>console.log(`employee: ${this.profession} ${this.name}`)
    this.__proto__ = person3;
}



const employee = new Employee("driver", 2500);
Person.prototype.display=()=>console.log(`employee: ${this.profession} ${this.name}`)

console.log(employee)

console.log(Object.keys(employee))
//3
const array = [1, 2, 3, 4, 5, 6];

Array.prototype.getEven = function () {
    return this.filter(item=> item%2 ===0)
}
array.join("");
console.log(array)

//4
function Employee(name, age, profession, salary) {
    this.profession = profession;
    this.salary = salary;
    this.__proto__ = new Person(name,age);
}
const employee1 = new Employee("Vasya", 25, "driver", 2500);
Object.setPrototypeOf(employee, Array)//переделать наследование из объекта в массив

////////////////class in JS > Ecma6///////////////////
class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width
    }
    print() {
        console.log(`width: ${this.width} height: ${this.height}`)
    }

}

class Color extends Rectangle { ///расширять наследование можно только одним классом 
    constructor(height, width, text, color) {
        super(height, width);
        this.text = text;
        this.color = color;
    }

    showMyProps() {
        console.log(`color: ${this.color}`)
    }

    print() {
        super.print();
        console.log("hello from color rectangle")
    }

}


const square = new Rectangle(20, 20);
console.log(square.calcArea());
console.log(Object.keys(square))

const rect = new Rectangle(20, 40);
console.log(rect.calcArea());
console.dir(square);
rect.print();

const colorRect = new Color(100, 20, "Hello ,world", "red");
console.log(colorRect.calcArea());
colorRect.showMyProps();
console.dir(colorRect)