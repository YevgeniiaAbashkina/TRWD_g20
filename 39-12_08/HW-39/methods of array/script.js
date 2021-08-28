let users = [{ name: 'Vasya', age: 15, height: 180 },
    { name: 'Olga', age: 25, height: 145 },
    { name: 'Vladimir', age: 48, height: 174 },
    { name: 'Maria', age: 32, height: 168 },
    { name: 'Max', age: 19, height: 150 },
];

//1 создать новый массив юзеров старше 20 лет
const newArr = users.filter(user => user.age > 20);
console.log(newArr);

//2 создать массив юзеров ниже 150
const newArr2 = users.filter(user => user.height <= 150);
console.log(newArr2);

//3 добавить в существующий массив уникальные id для каждого юзера
users.forEach(function (element, index) {
    element.id = index;
});
console.log(users);

//4 вернуть юзера с самым длинным именем
const objMaxName = users.reduce(function (prevObj, currentObj) {
    return (prevObj.name > currentObj.name) ? prevObj : currentObj
});
console.log(objMaxName);

//5 вернуть массив -> ['name: Vasya, age: 15 years old, height: 180 cm', ...]
/* users.forEach(function (element) {
     console.log(element)
     
     console.log(Object.entries(element).toString())

});  */

//6 [Vasya Vasilev, Petya Petrov] -> [{firstName: 'Vasya', lastName:'Vasiliev'},{}] (2 способа)

const names = ["Vasya Vasilev", "Petya Petrov"];



/* 
написать функцию fillArr(5, 'hello') -> ['hello', hello',hello',hello',hello]
написать функцию changeString ('abcdef') -> 'aBcDeF'
написать функцию countItem(array, el) -> сколько раз элемент повторяется в массиве
функция clearArray([1,2,3, null, '', undefined, 5, NaN, 7]) ->[1,2,3,5,7] */