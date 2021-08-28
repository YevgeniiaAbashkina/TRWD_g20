const now = new Date();
//const now = new Date("2020/05/01");//("2020-05-01")
//const now = new Date(2020,05,01)//начинает с 0 месяца выдаст 1 июня
//const now = new Date(2020, 5, 1, 20, 40)//1 juni 20:40
//const now = new Date(0);//1 jan 1970
//const now = new Date(-9999999)//Wed Dec 31 1969 22:13:20 GMT+0100 (Центральная Европа, стандартное время)


console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())//now 9
console.log(now.getUTCHours())//-2
console.log(now.getTimezoneOffset())//-120 min
console.log(now.getUTCHours())//-2
console.log(now.getTime())//c 01.01.1970 to 18.08.2021 1629273318748 ms
now.setHours(20);//Wed Aug 18 2021 20:57:08 GMT+0200 (Центральная Европа, летнее время)

console.log(now)

/* const start = new Date();
for (let i = 0; i < 1000000; i++){
    let some = i**3
}
const end = new Date();
console.log(`loop work time is: ${end-start} millisecond`)//200ms */
const start = Date.now();
for (let i = 0; i < 100000; i++){
    let some = i**3
}
const end = Date.now();
console.log(`loop work time is: ${end-start} millisecond`)

const deadline = new Date("2021-12-31");
const daysLeft = (deadline - new Date());
console.log(new Date())
console.log(daysLeft)//11634366693

const days = Math.floor(daysLeft / (24 * 60 * 60 * 1000)); //=day  //1 day -> 1*(24*60*60*1000)
console.log(days)//134
const hours = Math.floor((daysLeft / (60 * 60 * 1000)) % 24);
console.log(days, hours)//134 day  15 hours
const min = Math.floor((daysLeft / (60 * 1000)) % 60);
console.log(days, hours, min)//134 day  15 hours 31 min

const sec = Math.floor((daysLeft / (60 * 1000)) % 60);
console.log(days, hours, min, sec)