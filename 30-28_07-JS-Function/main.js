/* function showMessage(from, text) {
    if (text === undefined) {
        text = "text not added";//do 6 standarta
    }
    console.log(`${from}: ${text}`)
} */



function showMessage(from="no name", text="empty text") {
   console.log(`${from}: ${text}`)
}

showMessage("Vasya", "Nice to meet you!");
showMessage();//undefined
showMessage("Hello");//Hello: undefined

function calc(a = 2, b = 3) {
    return a + b;
}

console.log(calc());//5
console.log(calc(5));//8
console.log(calc(4, 5));//9

const arr = [1, 2, 3]

function printArr(array=arr) {
    console.log(array)
}

printArr();//[1, 2, 3]

//////////////////////////////
/*Array destructurisation */

/* const arrayName = ["Vasya", "Pupkin", "Driver"];
let [firstName, lastName] = arrayName;

lastName = lastName.toUpperCase()

console.log(lastName); */

/* const arrayName = ["Vasya", "Pupkin", "Driver"];
let [, lastName, profession] = arrayName;

lastName = lastName.toUpperCase()

console.log(lastName);
console.log(profession); */

/* const arrayName = ["Vasya", "Pupkin", "Driver"];
let [firstName, , profession] = arrayName;

console.log(firstName);
console.log(profession); */

/////////////////////////////////////
let [red, black, ...colors] = ["red", "balck", "yellow", "green", "white"];

console.log(colors)//"yellow", "green", "white"

////////////////////////////////////////
const names= ["Vasya"]

let [firstName, lastName] = [];
console.log(firstName, lastName);// undefined undefined

let [first1Name= "guest", last1Name = "anonymous"] = names;
console.log(first1Name, last1Name);// Vasya anonymous

let [first2Name= "guest", last2Name = ""] = ["Vasya"];
console.log(first2Name, last2Name);// Vasya 

///////////////////////////////////////
/*Object destructurisation */
const object = {
    title: "box",
    color: "black",
    material: "wood",
    size: {
        width: 200,
        height: 200,
        lenght: 200
    }
}

//const object2 = object;//copy link
const object2 = { ...object };//create nuw memory, new object
const size1 = {...object.size}

object2.color = "red";
object2.size.height = 250
console.log(object.color)//red
console.log(object.size.height)

/* let num = 10; primitive
let num2 = num;
num2 = num + 10; */

//console.log(object.title);//box

//const { title, material, color} = object;

//const { material, color:boxColor, size} = object;//не нужно перечислять все ключи и соблюдать порядок, можно сразу переименовать

////////////ERRORS/////////////
/* let matrial, size;
{material ,size} = object//syntax eror! */

let material, size;
({ material, size } = object);


console.log(material)//wood
//console.log(color);//error
//console.log(boxColor);//black
console.log(size)//{width: 200, height: 200, lenght: 200}

size.height = 250;//изменяется и исходный
console.log(object.size.height);

const complexObject = {
    size: {
        width: 100,
        height: 200,
    },
    items: ["Apple", "Orange"],
    fill: true
}

const {
    size: { width, height },
    items: [f1, , f3],
    fill: isFill
} = complexObject

console.log(isFill);
/////////////////////////////////
/* Recursion*/

//5! = 5*4*3*2*1 -> 4!*5
//4! = 4*3*2*1   -> 3!*4
//3! = 3*2*1     -> 2!*3
//2! = 2*1       -> 1!*2     
//1! = 1         -> 0!*1
//0! = 1         -> 1 базовый случай рекурсии

function recursiveFactorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return recursiveFactorial(n - 1) * n;            
    }
}

console.log(recursiveFactorial(10))


/* Сгенерировать штатное рассписание, у сотрудников есть поля: имя, часы работы и стоимость часа. Создать ведомость, где будет список сотрудников с подсчитанной ЗП и  общая сумма всех ЗП. */
/* const company = {
    name: "ABC",
    team: [],
} */

function createCompany(name, qty) {//gty how employe
     return {
        name: name,
        qty: qty,
        team: createTeam(qty),
    }
}

function createTeam(quantity) {
    const arrTeam = [];
    for (let i = 0; i < quantity; i++) {
        arrTeam.push({
            name: `employee_${i + 1}`,
            workTime: Math.floor(Math.random() * 120),
            rate: 30
        });
    }
    return arrTeam;
}

const company = createCompany("ABC", 10)
console.log(company)

/* company.team.push({ name: "Vasya", workTime: 120, rate: 30 });
for (let i = 0; i < 9; i++){
    company.team.push({
        name: `employee_${i+1}`,
        workTime: Math.floor(Math.random()*120),
        rate: 30
    });
} */

console.log(company.team);

const doc = {
    name: "DOC",
    list: [],
    total: 0
}

for (let i = 0; i < company.team.length; i++){
    const sum = company.team[i].workTime * company.team[i].rate;
    doc.list.push({
        name: company.team[i].name,
        salary: sum
    });
    doc.total += sum;
}

console.log(doc.list)
console.log(doc.total)

