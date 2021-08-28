let salaries = {
    John: 2000,
    Anna: 2100,
    Piotr: 2500,
    Kate: 1900,
}

//calculate and print sum all salaries

//Add two employee in object
salaries.Maria = 3000;
salaries.Mark = 2900;

//"John has salary: 2000, Kate has salary:1900"
let countOfKeys = 0;
for (let key in salaries) {
    countOfKeys++;

}
console.log(countOfKeys);
let count = 0;
for (let key in salaries) {
    count++;
    /* if (count == 1 || count == countOfKeys) {
        console.log(`${key} has salary: ${salaries[key]}`)
    } */
    if (count != 1 && count != countOfKeys)  continue;
    console.log(`${key} has salary: ${salaries[key]}`)
}

//find employee with maximal salary ("Max salary has Name, 2500")

let maxSalary = 0;
let keyName = "";

for (let key in salaries) {
    if (salaries[key] > maxSalary) {
        maxSalary = salaries[key];
        keyName = key;
    }
}
console.log(`Max salary has ${keyName}, ${maxSalary}`);

for (let key in salaries){
    if (typeof (salaries[key]) === "object") {
        for (let k in salaries[key]) {
            console.log(`${k}: ${salaries[key][k]}`);
        }
    } else {
        console.log(`${key} has salary: ${salaries[key]}`)
    }
}

