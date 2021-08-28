function makeCounter() {
    let coutn = 0;
    return function () {
        return coutn++;
    }
};

let counter = makeCounter();
counter();//0
counter();//1

let number = counter()
console.log(number)//2
console.log(counter())