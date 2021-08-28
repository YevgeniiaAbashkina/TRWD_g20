const names =["Ivan", "Anna", "Maria", "Nicolay", "Petr", "Olga"]

const ul = document.querySelector("#list"),
    addButton = document.querySelector("#addbtn");



/* addButton.onclick = () => {
    const index = getRnd(names.length);
    //ul.innerHTML += `<li>${names[index]}</li>` перерисовывает каждый раз

    //const li = document.createElement("li");//можно добавить ему класс, стиль и т.п. дорисовывает вниз
    //li.innerHTML = `${names[index]}`;

    //ul.insertAdjacentHTML("afterend", `<li>${names[index]}</li>`)

    //let li = createLi(names[index])
    //ul.insertAdjacentHTML("beforeend", li)

    let li = createLi(names[index])
    ul.insertAdjacentElement("beforeend", li)

    //const li = createLi(names[index]);
    //ul.append(li);// добавит в конец 

    //ul.prepend(li); добавит к началу
    //ul.before(li) добавит до открытия ul
    //ul.after(li) добавит после закрытия ul
} */

function createLi(name) {
    const li = document.createElement("li");
    li.innerHTML = name;
    li.style.backgroundColor = getRandomeColor();
    li.classList.add("nameList");
    /* li.onclick = function () {
        li.style.backgroundColor = getRandomeColor();
    } */
    li.onclick = changeBg;
    return li; //возвращает объект что позволяет сохранять динамику и все настройки

    //return li.outerHTML;//возвращается узел из разметки
}

function getRnd(max) {
    return parseInt(Math.random() * max);
}

function getRandomeColor() {
    return `rgb(${getRnd(256)}, ${getRnd(256)}, ${getRnd(256)})`
}

////////////////////////////////////////////////
//const box = document.querySelector(".wrapper").querySelector(".box")
const box = document.querySelector(".box");

/* box.onclick = () => {
    box.style.backgroundColor = getRandomeColor()
} */
/* box.onclick = (event) => {  //имя м.б. любое оно показывает что это созданный по событию элемент
    console.log(event.target)
    box.style.backgroundColor = getRandomeColor()
} */

//box.onclick = changeBg;
/* box.onclick = () => {
    console.log("click")//будет применяться по клику только одна логика, оторая написана ниже
} */

box.addEventListener("click", changeBg);//нужно передавать обязательно два имени - имя события + что по нему делать
box.addEventListener("click", () => {
    console.log("click")
})

box.removeEventListener("click", changeBg)

function changeBg(event) {
    event.target.style.backgroundColor = getRandomeColor();
}
/////////////////////////
//1
let i = 0;
/* addButton.onclick = () => {
    const index = getRnd(names.length);
    if (i === names.length) return;//не будут добавляться новые элюпосле ретурн

    let li = createLi(names[i++])
    ul.append(li);// добавит в конец 
} */

//2
const liRender = () => {
    let li = createLi(names[i++])
    ul.append(li);
    if (i === names.length) addButton.removeEventListener("click", liRender);
}

addButton.addEventListener("click", liRender);
