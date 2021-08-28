const numbers = [1, 2, 3, 5];
//написать метод который будет выводить все числа в массиве

/* function printArray(array) {
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
} 
printArray(numbers)
*/
////////////////////////////////////////////////////
function printArray() {
    for (let i = 0; i < numbers.length; i++){
        console.log(numbers[i])
    }
}
printArray();
///////////////////////////////////////////////////
function displayItems() {  //параметр в скобках не нужен
    for (let item of numbers) {
        console.log(item)
    }
}
displayItems();//выведет 1, 2, 3, 5
////////////////////////////////////////////////
function displayItems(items) { 
    for (let item of items) {
        console.log(item)
    }
}
displayItems(numbers);
///////////////////////////////////////////////