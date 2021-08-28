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

let sortToAgeUsers = users.slice().sort(compare);

function compare(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    if (a.age == b.age) return 0;
}

console.log('Task01_sortToAgeUsers', sortToAgeUsers);
console.log('Task01_users', users);//исходный массив не изменился


//************ВТОРОЙ СПОСОБ */

sortToAgeUsers = users.slice().sort((a, b) => a.age > b.age ? 1 : -1);
console.log('Task01.(2)_sortToAgeUsers', sortToAgeUsers);
console.log('Task01.(2)_users', users);//исходный массив не изменился


//Task02
/* [1, 5, 8, 2, 4, 6, 9, 3, 10];
function filterRange(array, 3,6) ->[3,4,5,6] */
const arrayForSorting = [1, 5, 8, 2, 4, 6, 9, 3, 10];

function sortIndex(arr) {
    const sortArr = arr.sort((a, b) => a > b ? 1 : -1);
    return sortArr;
}

function filterRange(sortArr, elStart, elEnd) {
    return sortArr.slice(elStart, elEnd);
}
const sortedArray = sortIndex(arrayForSorting);
console.log("Task02_sortedArray", sortedArray);
const cutArray = filterRange(arrayForSorting,2,6);
console.log("Task02_cutArray", cutArray);


//Task03
/* Отсорторовать в порядке убывания массив
[7,3,8,9,10,2] ->[10,9,8,7,3,2] */
const arrayNotSort = [7, 3, 8, 9, 10, 2];

function compare1(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a == b) return 0;
}

arraySort = arrayNotSort.sort(compare1);

console.log("Task03_arraySort", arraySort);

/* Сгенерировать штатное рассписание, у сотрудников есть поля: имя, часы работы и стоимость часа. Создать ведомость, где будет список сотрудников с подсчитанной ЗП и  общая сумма всех ЗП. */
const company = {
    name: "ABC",
    team: [],
}

company.team.push({ name: "Vasya", workTime: 120, rate: 30 });
for (let i = 0; i < 9; i++){
    company.team.push({
        name: `employee_${i+1}`,
        workTime: Math.floor(Math.random()*120),
        rate: 30
    });
}

console.log(company.team);


