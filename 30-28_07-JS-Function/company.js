/* Сгенерировать штатное рассписание, у сотрудников есть поля: имя, часы работы и стоимость часа. Создать ведомость, где будет список сотрудников с подсчитанной ЗП и  общая сумма всех ЗП. */
function start() {
    const company = createCompany("ABC", 10);
    const doC = createDoc("salary-januar", company.team);
    console.log(company);
    console.log(doC);
}

start();

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

function createDoc(name, personals) {
    return {
    name: name,
    list: createList(personals),
        total: getTotal(personals),
    }
}

function createList(arrTeam) {
    let list = [];
    for (let i = 0; i < arrTeam.length; i++){
        list.push({
            name: arrTeam[i].name,
            salary: arrTeam[i].workTime * arrTeam[i].rate
        });
    }
    return list;
}

function getTotal(arrTeam) {
    let sum = 0;
    for (let i = 0; i < arrTeam.length; i++){
        sum += arrTeam[i].workTime * arrTeam[i].rate;
    }
    return sum;
}

/* console.log(doc.list)
console.log(doc.total)
 */