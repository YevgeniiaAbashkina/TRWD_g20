const btn = document.querySelector("#btn"),
    filmInput = document.querySelector("#film-input"),
    filmUl = document.createElement("ul");

    document.querySelector(".container").append(filmUl)



filmInput.focus();

/* 
let counter = 1;

btn.onclick = () => {
    const tytle = filmInput.value;
    tytle = tytle.trim();//пропустить через обрезание пробелов в начале или конце
    if (title == "") {
        alert("Enter title");
        //return
    } else {
        const li = document.createElement("li");
        li.innerHTML = `${counter++}. ${tytle}`;
        filmUl.append(li);
        filmInput.value = "";
        filmInput.focus();
    }
    
} */

 //"one" -->true

/* btn.onclick = () => {
    let tytle = filmInput.value;
    tytle = tytle.trim();//пропустить через обрезание пробелов в начале или конце
    //let tytle = filmInput.value.trim();
    
    if (!tytle) {
        alert("Enter title");
        filmInput.value = "";
        filmInput.focus();
    } else {
        const li = document.createElement("li");
        li.innerHTML = `${counter++}. ${tytle}`;
        filmUl.append(li);
        filmInput.value = "";
        filmInput.focus();
    }
} */
////////////////////     1       ///////////////////////////

/* 
let counter = 1;
btn.onclick = () => {
    let tytle = filmInput.value.trim();
    if (!tytle) {
        alert("Enter title");
        cleanInput(filmInput);
    } else {
        const li = createLi(counter, tytle);
        counter++;
        filmUl.append(li);
        cleanInput(filmInput);
    }
}

function createLi(number, tytle) {
    const li = document.createElement("li");
    li.innerHTML = `${number++}. ${tytle}`;
    li.onclick = () => {
        li.classList.toggle("line-trough")
    }
    return li;
}

function cleanInput(el) {
    el.value = "";
    el.focus();
} */

///////////////////////   2   ///////////////////////
/* const films = [];

btn.onclick = () => {
    let tytle = filmInput.value.trim();
    if (!tytle) {
        alert("Enter title");
        cleanInput(filmInput)
    } else {
        films.push(tytle);
        filmUl.innerHTML = "";
        renderUl();
        cleanInput(filmInput);
        console.log(films)
    }
}

function renderUl(){
    for (let i = 0; i < films.length; i++) {
        filmUl.innerHTML += `<li>${i + 1}. ${films[i]}</li>`;
    }
}

function cleanInput(el) {
    el.value = "";
    el.focus();
}
 */
///////////////////    3   //////////////////////////

const films = [];

btn.onclick = () => {
    let tytle = filmInput.value.trim();
    if (!tytle) {
        alert("Enter title");
        cleanInput(filmInput)
    } else {
        films.push(tytle);
        filmUl.innerHTML = "";
        renderUl();
        cleanInput(filmInput);
        console.log(films)
    }
}

/* function renderUl(){
    const arr = films.map((film, index) => createFilmLi(film, index));
    arr.forEach(li => filmUl.append(li));
} */


function renderUl(){
    films.map((film, index) => createFilmLi(film, index)).forEach(li => filmUl.append(li));
}


function createFilmLi(tytle, index) {
    const li = document.createElement("li");
    li.innerHTML = `${index+1}. ${tytle}`;
    li.onclick = () => {
        li.classList.toggle("line-trough")
    }
    return li;
}

function cleanInput(el) {
    el.value = "";
    el.focus();
}


