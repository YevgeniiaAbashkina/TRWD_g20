///////////////////switch/////////////////////////////////
function checkWeekDay(str){
    switch (str){
        case "monday": 
        case "tuesday": console.log("work day");
            break;
        case "sunday": console.log("weekend");
        default: console.log("wrong day")

    }
}

checkWeekDay("monday");
checkWeekDay("tuesday");
checkWeekDay("sunday");
checkWeekDay("no");

function lightSwitch(num){
    switch(num){
        case 1: console.log("light on");
            break;
        case 2: console.log("light off");
            break;
    }
} 
//////////////////////////////////////////////
/* switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
  } */

function checkBrowser (browser){
    if(browser==="Edge"){
        console.log("You've got the Edge!")
    }else if(browser==="Chrome"|| browser==="Firefox" || browser==='Safari' || browser==='Opera' ){
        console.log( 'Okay we support these browsers too' );
    }else  console.log( 'We hope that this page looks ok!' ); 
}

checkBrowser("Edge");
/////////////////////////arrays///////////////////
//indexOf/
const arr = ["one", "two", "three"];

console.log(arr.indexOf("two")) //[1]
console.log(arr.indexOf("five"))//[-1] --> false

//reduse
const array=[2,3,5,2,7];

const sum=array.reduce((a,b)=> a+b);
console.log(sum);
//найти старшего юзера:
const users=[
    {
        name: "Vasyyyyyyyyya",
        age: 20,
    },
    {
        name: "Oleg",
        age: 22,
    },
    {
        name: "Petya",
        age: 50,
    },
]

const oldestUser=users.reduce((old, user)=>old.age>user.age ? old: old=user);
console.log(oldestUser);


const sumAges=users.reduce((sum, user)=>sum+=user.age, 0);
console.log(sumAges);

const userName=users.reduce((longName, user)=>longName.name.length>user.name.length? longName : longName=user);
console.log(userName);
//map
//const newArr=users.map(user=>user.name + "," + user.age + " years old");
const newArr=users.map(user=>`${user.name}, ${user.age} years old`);
console.log(newArr);

const userAge= users.map(user=> user.age);//из возрастов
console.log(userAge);

users.forEach((user, index)=> user.id=index);
console.log(users)
