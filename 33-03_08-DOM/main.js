const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    
    squares = document.querySelectorAll(".wrapper .square"),//to class, teg, inputs return Nodelist
    greens = document.getElementsByClassName("square"),
    wrapper = document.querySelector("#wrapperTwo"),//вернет первый найденный по этому селектору return Nodelist
    title = document.querySelector("h1");
    


console.log(box);
console.dir(box);

console.log(btns);//pseudoarray-HTMLCollection, use not methods for arrays
console.log(btns[0]);
console.log(circles);
console.log(squares);
console.log(squares);
console.log(wrapper);
wrapper.innerHTML += '<div class = "square"></div>';
console.log(wrapper);
console.log(squares);
console.log(greens);

const elements = Array.from(greens);//created array
console.log(elements);

/////////////////////////////////////
box.style.backgroundColor = "blue";//to id is one
box.style.width = "400px";

//btns.style.borderRadius = "50%"
//btns[3].style.borderRadius = "50%"

for (btn of btns) { //если НТМЛ коллекция
    btn.style.borderRadius = "50%"
}

//squares.forEach(el => el.style.cssText="background-color:orange");

for (s of squares) { //не возможно Nodelist
    s.style.backgroundColor = "orange"
}


for (s of greens) { // возможно
    s.style.backgroundColor = "orange"
}

box.style.cssText = "backgroung-color: orange; width: 100px";

//const color = "violet";
//alert = ("Hello!");
//const color = prompt("type your color");

//circles[0].style = `background-color: ${color}`;

//title.className = "title active";

title.classList.add("active", "title");
title.classList.remove("title");
title.classList.toggle("active");//если есть уберет, если нет то добавит
title.classList.toggle("active");//+
title.classList.toggle("active");//-

const div = document.createElement("div");//элемент созданный в одном экземпляре
div.classList.add("black");
//document.body.append(div);
//wrapper.append(div);
//appendChild --> old lecsic
//wrapper.prepend(div);//сверху дочерних элементов

//greens[1].before(div)
greens[1].after(div);

div.innerHTML = "<h2>Hello, world!</h2>";
//div.textContent = "Hello, world!";


/* 
                                parentElement
                                    |
    previoursSiblingElement <-- <element> -->nextSiblingElement
                                    |
        firstElementChild <-- childrenElement --> lastElementChild    
*/

console.log(document.querySelector(".wrapper").lastElementChild);

document.querySelector(".wrapper").lastElementChild.before(div);
////////////////////////////////////////////////////////////////////////
for (let b of btns) {
    b.classList.add("green");//покрасить кнопки
}