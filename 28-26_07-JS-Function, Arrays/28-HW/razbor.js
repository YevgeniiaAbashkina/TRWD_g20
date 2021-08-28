/* Task01
   написать метод, который на вход получает массив целых чисел, которые могут повторятся, а возвращает новый массив без повторяющихся чисел
   [2,5,7,9,7,2] -> [2,5,7,9]
   [2,0,0,1,1,2] -> [2,0,1]
 */

/*const doubleArray = [2, 5, 7, 9, 7, 2];

function uniqueNumbers(array) {
    const newArray = [];
    for (let number of array) {
        if (!newArray.includes(number)) {
            newArray.push(number);
        }
    }
    return newArray;
}

uniqueNumbers(doubleArray);
console.log(uniqueNumbers(doubleArray)); */

const array = [2, 5, 7, 9, 7, 1];
const uniqArray = array.filter((el, index) => array.indexOf(el) === index);
console.log(uniqArray);


   
//Task02
/* 
написать метод, который на вход получает массив целых чисел, сравнивает первый и последний элемент этого массива и возвращает новый массив, в котором все элементы старого массива заменены на большее значение.
[1,5,6,7,2] -> [2,2,2,2,2];
[7,3,8,4] -> [7,7,7,7]
 */
function replaceValue(arr) {
    const max = arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];
    const newArray = [...arr]      // arr.slice();
    return newArray.fill(max);
}

function strangeArrChanger(arr) {
	const max = arr[0] > arr[arr.length-1] ? arr[0] : arr[arr.length-1]
	return arr.map(item => item = max)
}
const testNew = strangeArrChanger(array);
console.log(testNew);

console.log(replaceValue(array));

//метод на вход получает строку и символ, на выход - сколько раз символ повторяется в строке

const countSymbol = function (str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === char)
            counter++
    }
    return counter;
}

const countSymbolReduce = function (str, char) {
    let count = 0;
    str.split("").forEach(item => {
        if(item === char) count ++
    })
    return count;
}
console.log(countSymbolReduce("fgfgfgf", "f"))
console.log(countSymbol("fgfgfgf", "f"))