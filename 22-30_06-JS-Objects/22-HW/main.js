let salaries = {
    John: 2000,
    Anna: 2100,
    Piotr: 2500,
    Kate: 1900,
}

//calculate and print sum all salaries
let sumSalaries = 0;

for (let employee in salaries) {
    sumSalaries += salaries[employee];
}
console.log(`The sum of all salaries is: ${sumSalaries}`);


//"John has salary: 2000, Kate has salary:1900"
let i = 0;
let employeeFirst, employeeEnd;

for (employee in salaries) {
    i++;
        if (i == 1){
            employeeFirst = salaries[employee];
        } else if (i == 4) {
            employeeEnd = salaries[employee];
        }
}
console.log(`John has salary: ${employeeFirst}, Kate has salary: ${employeeEnd}`);
console.log(`John has salary: ${salaries.John}, Kate has salary: ${salaries.Kate}`);

//Add two employee in object
salaries.Jack = 15000;
salaries.Lina = 1000;

console.log(salaries[employee])//как обратиться к 

//find employee with maximal salary ("Max salary has Name, 2500")
let salary = salaries[employee];
let maxSalary = salary;
let employeeName;

for (employee in salaries) {
    if (salaries[employee] > salary) {
        maxSalary = salaries[employee];
        employeeName = employee;
    }
}
 alert(`Max salary has:  ${employeeName},  ${maxSalary}`);
