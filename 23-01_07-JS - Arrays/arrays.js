//let arr = new Array();

            //[0]           [1]           [2]      [3][4] [5]
let arr = ["plum.png", "orange.png", "apple.jpg", 1, {}, []];//arr.lenth = 6
console.log(arr[0]);
console.log(arr);
console.log(arr.length);

//let arr = ["plum.png", 1, {}, [], "orange.png", "apple.jpg"];

//arr[99] = 0;//в ячейка 99 лежит 0
//console.log(arr.length);//100
//console.log(arr);

arr[arr.length] = "banan.jpg";//arr[3] = "banan.jpg"
console.log(arr);

arr.length = arr.length - 1;//delete []
console.log(arr);

arr.length = arr.length + 1;//+empty=undefined
console.log(arr);

/* arr.length = 0;
console.log(arr); *///массив останется пустой

for (let i = arr.length; i > 0; i--){
    arr[i] = arr[i - 1];
}

arr[0] = "banan.jpg";
console.log(arr);

for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i + 1];
}
arr.length - arr.length - 1;
console.log(arr);//[6]= undefined


arr.push("banan.jpg", 23, "melone.jpg");//добавление в конец массива
console.log(arr);

let melon = arr.pop();//отрезает конец
console.log(melon)
console.log(arr);

arr.unshift(25, 30);//добавляет в начало
console.log(arr);

let number = arr.shift();
console.log(arr, number);//отрезает  начало

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i] * 2);//width Object
}

for (let i = 0; i < numbers.length; i++){
    if(i!=2){
        console.log(numbers[i] * 2);
    }
}


console.log("----------------------------");


for (let number of numbers) {
    console.log(number + 5);//width arrey
}

for (let number of numbers) {
    if (number % 2 == 0) {
        console.log(number + 5);//width arrey
    }
}

let res = "";
// 1 2 3 4  5  6  7  8  9 10
// 2 4 6 8 10 12 14 16 18 20
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        res += (j * i + '\t'); // 1 2 3 4 5 6 7 8 9 10
        //arr[i][j]
    }
    console.log(res);
    res = "";
}

let matrix = [
    [1, 2, 3], //[0]
    [4, 5, 6], //[1]
    [7, 8, 9]  //[2]
]

console.log(matrix[1][1]);

let pifagorTable = [[1, 2, 3, 4,  5,  6,  7,  8,  9, 10], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [], [], [], [], [], [], [], []]

//pifagorTable[4][4]-->25

//make the Pifagor-table for browser
document.write('<h1 style = "text-align:center">Multiply table</h1>');
document.write('<table border = "1" cellspacing = "0" cellpading = "5" align = "center">');
for (let i = 1; i <= 5; i++){
    document.write('<tr>');
    for (let j = 1; j <= 5; j++){
        document.write('<td width = "100px">Hello!</td>')
    }
    document.write('</tr>')
}
document.write('</table>')
