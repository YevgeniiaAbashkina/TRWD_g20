//Task01
/* отсортировать по возрасту users */
const users = [
    { name: 'Anna', address: { city: 'Berlin', country: 'Germany' }, age: 32 },
    { name: 'Vasya', address: { city: 'Tokio', country: 'Japan' }, age: 28 },
    { name: 'Mariya', address: { city: 'London', country: 'England' }, age: 15 },
    { name: 'Mark', address: { city: 'Rom', country: 'Italy' }, age: 46 },
    { name: 'Sofi', address: { city: 'Verona', country: 'Italy' }, age: 38 },
    { name: 'Sergio', address: { city: 'Barcelona', country: 'Spain' }, age: 18 }
];

//const ageArray = users.sort((a, b) => a.age - b.age);

function sortByFilld(key) {
    return (a,b)=> a[key] > b[key] ? 1: -1;
}

users.sort(sortByFilld("name"));
console.log(users);
users.sort(sortByFilld("age"));
console.log(users);

//Task02
/* [1, 5, 8, 2, 4, 6, 9, 3, 10];
function filterRange(array, 3,6) ->[3,4,5,6] */

const arr = [1, 5, 8, 2, 4, 6, 9, 3, 10]

function filterRange2(array, start, end) {
    const cutArray = [...array].sort((a,b) => a-b);
    for (let i = 0; i < cutArray.length; i++){
        if (cutArray[i] < start){
            cutArray.splice(i, 1);
            i--;
        }
        if (cutArray[i] > end){
            cutArray.splice(i);
            break;
        }
    }
    return cutArray;
}

console.log(filterRange2(arr, 1, 4));
console.log(arr)//old array

/* let [red, white, ...colors, black] = ["red", "white", "green", "yellow", "pink", "black"];

console.log(black)
 */

//Task03
/* Отсорторовать в порядке убывания массив
[7,3,8,9,10,2] ->[10,9,8,7,3,2] */

let nums = [7, 3, 8, 9, 10, 2];
nums.sort((a, b) => b - a);
console.log(nums);

