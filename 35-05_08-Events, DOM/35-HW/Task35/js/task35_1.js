// Task01
/* 
    1. Calculator
    2. Проверка строки является ли она палиндромом
    3. Счетчик кликов
 */
//////////////////////////1/////////////////////////////////////////////////
const firstNumberAdd = document.querySelector("#first-number-add"),
    secondNumberAdd = document.querySelector("#second-number-add"),
    btnAdd = document.querySelector("#btn-add"),
    resultAdd = document.querySelector(".result-add"),

    firstNumberSub = document.querySelector("#first-number-sub"),
    secondNumberSub = document.querySelector("#second-number-sub"),
    btnSub = document.querySelector("#btn-sub"),
    resultSub = document.querySelector(".result-sub"),

    firstNumberMultiply = document.querySelector("#first-number-multiply"),
    secondNumberMultiply = document.querySelector("#second-number-multiply"),
    btnMultiply = document.querySelector("#btn-multiply"),
    resultMultiply = document.querySelector(".result-multiply"),
    
    firstNumberDiv = document.querySelector("#first-number-div"),
    secondNumberDiv = document.querySelector("#second-number-div"),
    btnDiv = document.querySelector("#btn-div"),
    resultDiv = document.querySelector(".result-div");


btnAdd.onclick = () => {
    const sum = Number(firstNumberAdd.value) + Number(secondNumberAdd.value);
    resultAdd.textContent = `${sum}`;
    /* firstNumberAdd.value = "";
    secondNumberAdd.value = ""; */
}

btnSub.onclick = () => {
    const sub = Number(firstNumberSub.value) - Number(secondNumberSub.value);
    resultSub.textContent = `${sub}`;
    /* firstNumberSub.value = "";
    secondNumberSub.value = ""; */
}

btnMultiply.onclick = () => {
    const multiply = Number(firstNumberMultiply.value) * Number(secondNumberMultiply.value);
    resultMultiply.textContent = `${multiply}`;
    /* firstNumberMultiply.value = "";
    secondNumberMultiply.value = ""; */
}

btnDiv.onclick = () => {
    const division = (Number(firstNumberDiv.value) / Number(secondNumberDiv.value)).toFixed(2);
    resultDiv.textContent = `${division}`;
    /* firstNumberDiv.value = "";
    secondNumberDiv.value = ""; */
}

function displayBlock(element) {
    element.style.display = "inline-block"
}

displayBlock(resultAdd);
displayBlock(resultSub);
displayBlock(resultDiv);
displayBlock(resultMultiply);

/////////////////////////////////2////////////////////////////////////////
let btnPalindrom = document.querySelector("#btn-palindrom"),
    resultPalindrom = document.querySelector(".result-palindrom"),
    inputPalindrom = document.querySelector("#palindrom");

//inputPalindrom = toString(inputPalindrom);

console.log(inputPalindrom)//string


function chekPalindrome(str) {
    str = str.replaceAll(" ", ""); //пробел " " заменяется на ""
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}

function isPalindrome() {
    
    chekPalindrome(inputPalindrom.value) ? resultPalindrom.textContent = `Is Palindrom!` : resultPalindrom.textContent= `Is a not Palindrom!` 
}

btnPalindrom.onclick = () => {
    isPalindrome();
    inputPalindrom.value = ""
} 
//////////////////////////3////////////////////////////////////////
const btnClick = document.querySelector("#click");

function countClick() {
    let counter = 0;
    return () => {
        counter++
        document.querySelector(".result-click").textContent = counter;
    }
}

btnClick.onclick =  countClick();



