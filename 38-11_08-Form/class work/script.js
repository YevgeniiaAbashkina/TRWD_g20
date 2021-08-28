/* const sendBtn = document.querySelector("[type]");//только первый инпут */
const sendBtn = document.querySelector("[type = submit]");//последний инпут

const myForm = document.querySelector("#myForm");

/* console.log(myForm);
console.log(myForm.elements);
console.log(myForm.elements[1]);
console.log(myForm.lastName);
console.log(myForm.lastName.value);

console.log(myForm.elements[1].id)
console.log(myForm.elements[1].attributes) */

/* console.log(document.forms)
console.log(document.forms[0])//вернется не вся коллекция а только форма
console.log(document.forms.subscribe) */

////////////////////////////////////////////
//по клику на  sent создавать объект user  и добавдять в массив user
const users = [];

document.querySelector("#firstName").focus();

//version 1
/* myForm.onsubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName,
        lastName = event.target.lastName,
        email = event.target.email;
        
    let user = {
        firstName: "firstName.value",
        lastName: "lastName.value",
        email: "email.value"
    }
    users.push(user);

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    firstName.focus();

    console.log(users)
} */

//version 2

/* myForm.onsubmit = (event) => {
    event.preventDefault();
    

    const firstName = event.target.firstName,
        lastName = event.target.lastName,
        email = event.target.email;
        
    //const user = createUser(firstName, lastName, email) 
    //users.push(user)
    
    users.push(createUser(firstName, lastName, email));

    clean(firstName);
    clean(lastName);
    clean(email);

    firstName.focus();

    console.log(users)
}

function createUser(firstName, lastName, email) {
    return {
        //firstName: firstName,
        //lastName: lastName,
        //email: email, 
        firstName,
        lastName,
        email, 
    }
}

function clean(element) {
    element.value = "";
} */

//version 3

myForm.onsubmit = (event) => {
    event.preventDefault();
const firstName = event.target.firstName,
        lastName = event.target.lastName,
        email = event.target.email;
   
    users.push(createUser(firstName, lastName, email));

    const inputs = myForm.querySelectorAll("input:not([type = submit])");//все инпуты кроме с [type = submit]
    clean(inputs);

    firstName.focus();
    console.log(users)
}

function createUser(firstName, lastName, email) {
    return {
        firstName,
        lastName,
        email, 
    }
}

function clean(elements) {
    for (element of elements) {
        element.value = "";
    }
}