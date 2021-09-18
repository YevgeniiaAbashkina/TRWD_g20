/* const getProducts = () => {
    return new Promise((resolve, reject) => {  //resolve=goot, reject=bad
        setTimeout(() => {
            const card = {
                apple: "2kg",
                milk: 1,
                sugar: "1kg"
            };
            resolve(JSON.stringify(card));
        }, 5000);
    });

};


const product = getProducts().then((prod) => {
    console.log(prod);
    return JSON.parse(prod);
});
console.log(product) */

////////////////////////////////////
/* const getProducts = () => {
    return new Promise((resolve, reject) => {  //resolve=goot, reject=bad
        setTimeout(() => {
            const card = {
                apple: "2kg",
                milk: 1,
                sugar: "1kg"
            };
            resolve(JSON.stringify(card));
        }, 5000);
    });
};
let product={}

getProducts().then((p) => {
    console.log(p);
    return JSON.parse(p);
}).then(p => {
    console.log("product from promise:", p);
    product = p;
});

console.log("product from code:", product); */
//////////////////reject////////////////////////
const shop = {
    isOpen:true
}

const getProducts = () => {
    return new Promise((resolve, reject) => {  //resolve=goot, reject=bad
        if (!shop.isOpen) {
            reject(new Error("Shop is closed..."))
        }
        setTimeout(() => {
            const card = {
                apple: "2kg",
                milk: 0,
                sugar: "1kg"
            };
            resolve(JSON.stringify(card));
        }, 5000);
    });
};
let product={}

getProducts().then((p) => {
    console.log(p);
    return JSON.parse(p);
}).then(p => {
    if (p.milk < 1) {
        throw new Error("I need milk!")
    }
    console.log("product from promise:", p);
    product = p;
}).catch(err => {
    console.log(err.message)
}).finally(() => {
    console.log(product, "from finally")

})

console.log("product from code:", product); 
//////////////////////catch должен быть после всех then////////////////////////////
/* const shop = {
    isOpen:true
}

const getProducts = () => {
    return new Promise((resolve, reject) => {  //resolve=goot, reject=bad
        if (!shop.isOpen) {
            reject(new Error("Shop is closed..."))
        }
        setTimeout(() => {
            const card = {
                apple: "2kg",
                milk: 1,
                sugar: "1kg"
            };
            resolve(JSON.stringify(card));
        }, 5000);
    });
};
let product={}

getProducts().then((p) => {
    console.log(p);
    return JSON.parse(p);
}).catch(err => {
    console.log(err.message) //prommis.js:112 Uncaught (in promise) Error: I need milk!

}).
then(p => {
    if (p.milk < 1) {
        throw new Error("I need milk!")
    }
    console.log("product from promise:", p);
    product = p;
/* }).catch(err => {
    console.log(err.message)
}); 

console.log("product from code:", product); */
