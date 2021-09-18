/* const obj = {
    number: 5,
    sayNumber: function(){
        console.log(this);//obj
        console.log(this.number)//5
    }
}

obj.sayNumber(); */

/* const obj = {
    number: 5,
    sayNumber: function(){
        function say(){
            console.log(this);  //window
            console.log(this.number)//undefined
        }
        say();
    }
}

obj.sayNumber(); */

const obj = {
    number: 5,
    sayNumber: function(){
        say=()=>{                       //стрелочная функция сохраняет контекст
            console.log(this);  //obj
            console.log(this.number)//5
        }
        say();
    }
}

obj.sayNumber();

//////////////////////rest-operator/////////////////
/* function doSomthing(...numbers){
    console.log(numbers)
}

doSomthing(1,2,3,4,5,6)//[1,2,3,4,5,6] all array */

//2
function doSomthing(a,b,...numbers){ //rest-operator
    console.log(numbers)
    console.log(a+b) //1+2
}

doSomthing(1,2,3,4,5,6)//[3,4,5,6] all array
doSomthing(5,6)//in 47)a=5, b=6 ; in 46)[]

//////////////////spred-operator/////////////////////
const arr=[1,2,3,4,5,6];
const newArr=[...arr]; //newArr=copy arr                            //const newArr=arr; --две ссылки на один массив
const arr2=[3,17,81,22]
//найти максимальное число у двух массивов одновременно
const res=Math.max(6,...arr,101, ...arr2,888)
console.log(res);//888
//2
const  user={name: "Vasya", age:25};
const userNew=user //ссылка на один и тот же объект

const user1={...user, name:"Kolya", isMarried: false};//spred operator for object

//user1.name="Kolya";
console.log(user);
console.log(user1);

//3 

const myUser={
    name: "John",
    password:'1234',
    rights:"user"
}

const admin={
    password:"root",
    rights:"admin"
}

//const userAdmin=Object.assign(myUser,admin);

//console.log(userAdmin);
//console.log(myUser)//перезаписался

const userAdmin2=Object.assign({},myUser,admin);//old sintaxis
console.log(userAdmin2);


const avatar="photo"
const newUserAdmin={...myUser,...admin, avatar}
console.log(newUserAdmin);
console.log(myUser)// не перезаписался

//4
const x=25, y=10;

/* const coordinats={
    x,    //x: x,
    y,    //y: y,
    calc: function(){
        console.log(this.x * this.y)
    }
} */

const coord ={x,y,calc(){console.log(this.x*this.y)}}
coord.calc();

//////////////////Destructurisation////////////
const client ={
    name:{
        first:"Jack",
        last:"Smith"
    },
    password:"12345",
    rights:"user"
}

const{name:{first, last}, password, rights}=client;

console.log(first,last)
//////////////////////////////////////////////
/* function  printData(client){
    console.log(`Client: ${client.name}, password:${client.password}, rights:${client.rights}`)
} */

function  printData({name="anonim", password= "no data", rights="unknow"}={}){
    console.log(`Client: ${name}, password:${password}, rights:${rights}`)
}

function  printShortData({name,password}){
    console.log(`Client: ${name}, password:${password}`)
}

/* printData({
    name:"Ivan",
    password:"12333566",
    //rights:"user"
}) */

printData()

printShortData({
    name:"Ivan",
    password:"12333566",
    rights:"user"
})


//arrays
/* const numbers=[1,3,4,6,7,8,9];
const[a,b, ...c]=numbers;
console.log(a,b,c) //1, 3, [4,6,7,8,9] */

const numbers=[1,3,4,6,7,8,9];
const[a,,b, ...c]=numbers;
console.log(a,b,c) //1, 4, [6,7,8,9]

const numbers2=[[5,6],[7,8]];
const [[r,w],[z,t]]=numbers2
console.log(w)//6

const id="user_1";
//const userId=id.split("_")[1];
const [,userId]=id.split("_");
console.log(userId)

//2
const country={
    name: "England",
    population:2000000000,
    gender:{
        male:["15%", "40%"],
        female:["16%", "29%"]
    }
}

const {gender:{male:[, maleAdult]}}=country;
console.log(maleAdult);

const {gender:{female:[femailUnder18]}}=country;
console.log(femailUnder18);
