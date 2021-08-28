/*Алгоритм бинарного поиска*/

//const arr = [8, 1, 4, 7, 3, 5, 12, 2, 9];
arr = [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 18, 23, 89, 99, 100] //-> ind of "9"

let itaration = 0;

function binarySearch(array, number) {
    let low = 0,
        height = array.length - 1;
    
    while (low <= height) {
        let middle = Math.floor((low + height) / 2);
        itaration++;
        if (array[middle] === number) {
            return middle;
        }
        else if (array[middle] > number) {
            height = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return -1;
}


console.log(binarySearch(arr, 18))//8
console.log(itaration)