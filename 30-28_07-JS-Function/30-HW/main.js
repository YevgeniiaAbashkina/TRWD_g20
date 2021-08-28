//Task01
/* n=10
function recursionOutput(n) -> "12345678910"
*/

function recursionOutput(n) {
    return n ? recursionOutput(n - 1) + n.toString(): "";
}
console.log(recursionOutput(7))

//2 sposob

function recursionOutput2(n) {
    if (n == 1) {
    return "1 ";
    } else {
        return recursionOutput2(n - 1) + n + " ";
    }
}
console.log(recursionOutput2(7))
// 3 sp 

function recursionOutput3(n) {
    return (n == 1) ?"1 ": recursionOutput3(n - 1) + n.toString() + " " ;
}
console.log(recursionOutput3(7))

//Task02
/*  шалаш abba потоп наган "а роза упала на лапу азора"
function chekPolindrom("nagan") -> true;
        chekPolindrom("fgfr") -> false;
*/

function chekPalindrome(str) {
    str = str.replaceAll(" ", ""); //пробел " " заменяется на ""
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}

console.log(chekPalindrome("а роза упала на лапу азора"));//"а роза упала на лапу азора" не работает, 
/////////////////////////////////////////
function checkPolindrom2(str) {
	let arr = str.replaceAll(' ', '').split('');
	for (let i = 0, j = arr.length - 1; i < j;) {
		if (arr[i++] == arr[j--]) continue
		return false
	}
	return true
}

console.log(checkPolindrom2('o o'))



//Task03
//метод, который на основе массива вида users возвращает  массив вида changedUser

/*  const users =[
    {firstName: "Vasya", LastName: "Pupkin", id:1},
    {firstName: "Olya", LastName: "Pupk", id:2},
    {firstName: "Dima", LastName: "Pupok", id:3}
]
 changedUser ->[
    {fullName: Vasya Pupkin, id:1},
    {fullName: Olya Pupk, id:2},
    {fullName: Dima Pupok, id:3}full*/

const users = [
    { firstName: "Vasya", lastName: "Pupkin", id: 1 },
    { firstName: "Olya", lastName: "Pupka", id: 2 },
    { firstName: "Dima", lastName: "Pupok", id: 3 }
];

////////////////////////////////////////////////////////////
function changedUser(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push({
            fullName: array[i].firstName + " " + array[i].lastName,
            if: array[i].id,
        })
    }
    return newArr;
}

console.log(changedUser(users))
////////////////////////////////////////////////////////////


function restructObject(sourceArrayOfObject) {
    const changedUsers = [{}];

    for (let key of sourceArrayOfObject) {
        changedUsers.push({
            fullName: key.firstName + " " + key.lastName,
            id: key.id
        })
    }
    return changedUsers;
}
console.log(restructObject(users));

///////////destruct/////////////////////////////////////////

function changedUser2(array) {
    const newArr = [];
    
    for (let user of array) {
        const { firstName, lastName, id } = user; //const { firstName = " ", lastName= " ", id="missed" } = user;
        
        newArr.push({
            fullName: firstName + " " + lastName,
            id    // id:id
        })
    }
    return newArr;
}

console.log(changedUser2(users))

//////////////////////////////////////////////////

function changedUser3(array) {
    return array.map(user => ({
            fullName: user.firstName + " " + user.lastName,
            id: user.id,   // id:id
    }))
}

console.log(changedUser2(users))

