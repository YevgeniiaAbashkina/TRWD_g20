const users = [{ name: 'Vasya', age: 15, height: 180 },
{ name: 'Petia', age: 20, height: 160 },
{ name: 'Vlada', age: 25, height: 149 },
{ name: 'Stepan', age: 30, height: 190 },
{ name: 'Boris', age: 45, height: 176 },
{ name: 'Masha', age: 32, height: 135 },
{ name: 'Masha', age: 15, height: 155 }];

//1 создать новый массив юзеров старше 20 лет
const userByAge = users.filter((user) => user.age > 20);
console.log(userByAge);

const userN = users.map((user) => user.age > 20 ? { ...user, statistic:"yes"} : { ...user, statistic:"no"});


/* const userN = users.map((user) => {
    if (user.age > 20) return user;
}); */ //undefined

//2 создать массив юзеров ниже 150
const newArr2 = users.filter(user => user.height <= 150);
console.log(newArr2);

//3 добавить в существующий массив уникальные id для каждого юзера
const userWithId = users.map((user, index) => user.id = index + 1);
console.log(users)


users.forEach(function (element, index) {
    element.id = index;
});
console.log(users);
//4 вернуть юзера с самым длинным именем
const objMaxName = users.reduce(function (prevObj, currentObj) {
    return (prevObj.name.length > currentObj.name.length) ? prevObj : currentObj
});
console.log(objMaxName);

//5 вернуть массив -> ['name: Vasya, age: 15 years old, height: 180 cm', ...]
const usersString = users.map(user => `${user.name}, age: ${user.age} years old, height: ${user.height} cm`);
console.log(usersString)


//6 [Vasya Vasilev, Petya Petrov] -> [{firstName: 'Vasya', lastName:'Vasiliev'},{}] (2 способа)

const people = ["Vasya Vasilev", "Petya Petrov"];
//const peopleNew = people.map(p => ({ firstName: p.split(" ")[0], lastName: p.split(" ")[1] }));
const peopleNew = people.map(p => p.split(" ")).map(p => ({ firstName: p[0], lastName: p[1] }));
console.log(peopleNew);

//написать функцию fillArr(5, 'hello') -> ['hello', hello',hello',hello',hello]
function fillArr(num, item) {
    const arr = new Array(num);
    return arr.fill(item)
}

console.log(fillArr(10, 23))

//написать функцию changeString ('abcdef') -> 'aBcDeF'
function changeString(str) {
    //return str.toLowerCase().split("").map((el, index)=>index%2!==0? el.toUpperCase():el)
    return str.split("").map((el, index) => (index % 2) ? el.toUpperCase() : el.toLowerCase()).join("");
}
console.log(changeString('abcdef'));

//написать функцию countItem(array, el) -> сколько раз элемент повторяется в массиве
const array = [1, 2, 5, 1, 8, 1, 2];
function countEntries(array, item) {
    return array.reduce((count, el)=> el === item ? count + 1 : count, 0);
};

console.log(countEntries(array, 1));

//функция clearArray([1,2,3, null, '', undefined, 5, NaN, 7]) ->[1,2,3,5,7] */
const arr = [1, 2, 3, null, '', undefined, 5, NaN, 7];

function clearArray(arr) {
    return arr.filter(el=>el)
}
const newArrr = clearArray(arr);
console.log(newArrr)
console.log(newArrr)


