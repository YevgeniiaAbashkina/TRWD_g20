//const person = new Object();

const person = {
    name: "John",
    age: 30,
    "like books": true,
}

console.log(`Name of person: ${person.name}, age ${person.age}`);

person.name = "Vasya";

console.log(person.name);

person.isMarried = true;

console.log(person);
console.log(person.person);//undefined

console.log(person["like books"]);
console.log(person["age"]);//console.log(person.age)

let key = "like books";
console.log(`Person like book: ${person[key]}`); //person.key -->don't work
console.log(`Person like book: ${person["like books"]}`);

/* delete person.age;
console.log(person.age);//undefined; age is delete */

/* let personKey = prompt("What you would like know about person?", "name");

alert(person[personKey]); */

const item = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "red",
    },
    padding: {
        top: 10,
        bottom: 20,
        left:50,
    },
}

/* console.log(item.colors) */

for (let key in item) {
    if (typeof (item[key]) === "object") {
        for (let colorsKey in item[key]) {
            console.log(`Properties "${colorsKey}" has value ${item[key][colorsKey]}`)
        }
    }else{
        console.log(`Properties "${key}" has value ${item[key]}`)
    }
}

console.log(item.colors.border)//item['colors']['border']

let salaries = {
    John: 2000,
    Anna: 2100,
    Piotr: 2500,
    Kate: 1900,
}

//calculate and print sum all salaries

//"John has salary: 2000, Kate has salary:1900"

//Add two employee in object

//find employee with maximal salary ("Max salary has Name, 2500")
