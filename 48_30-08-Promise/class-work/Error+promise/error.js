/* function division1(a, b) {
    return a / b;
}

console.log("Error1:" + division1(4, 0))//infinity */
/////////////////////////////////////////////////////////
/* function division2(a, b) {
    if (b === 0) {
        throw new Error("error: division by zero")
    }
    return a / b;
}


try {
    console.log(division2(4, 0));
} catch(err) {
    console.log(err.message);
}

console.log("hello!"); */
////////////////////////////////////////////////////////
/* function f1() {
    if (Math.random() > 0.5) {
        throw new Error('someting is wrong')
    }
    return 100;
}

try {
    const res = f1();
    console.log(res);
} catch(err) {
    console.log(err.message);
}

console.log("hello!"); */
//////////////////////////////
/* function f1() {
    if (Math.random() > 0.5) {
        throw new Error('someting is wrong')
    }
    return 100;
}

try {
    const res = f1();
    console.log(res);
} catch(err) {
    console.log(err.message);
} finally {         //не обязательный блок
    console.log("hello!");
}

console.log("good bay"); */
/////////////////////////////////////////////
function f1() {
    if (Math.random() > 0.5) {
        throw new Error('someting is wrong')
    }
    return 100;
}

try {
    const res = f1();
    console.log(res);
} catch(blabla){                        //но трай не может быть без кетч
    console.log(blabla)
} finally {         //не обязательный блок
    console.log("hello!");
}

console.log("good bay");