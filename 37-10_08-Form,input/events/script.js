const input = document.querySelector("#simple-input");

/* input.onchange = (event) => { //пока инпут в фокусе, события нет, когда вышел из фокуса появляется ончендж
    //console.log("hello!");
    //console.log(input.value);
    console.log(event.target.value)
} */


/* input.oninput = (event) => { //посимвольное изменение в инпут
    console.log(event.target.value)
} */
 
/* input.onkeydown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 27) { //реакция на нажатие кнопки ентер (код 13) and esc(27)
        console.log(event.target.value)
    }
} */

//input.focus();

input.onfocus = () => { //когда возвращаешься в фокус
    console.log("hello")
}

input.onblur = () => { //событие когда не в фокусе
    console.log("good bye!")
}
/////////////////
const myForm = document.querySelector("#myForm");

/* myForm.onsubmit = () => { поведение по умолчанию
    console.log(myForm.querySelector("#firstName").value);
    console.log(myForm.querySelector("#lastName").value);
} */

myForm.onsubmit = (event) => {
    event.preventDefault();//отменяет поведение браузера по умолчанию
    console.log(myForm.querySelector("#firstName").value);
    console.log(myForm.querySelector("#lastName").value);
}

const link = document.querySelector("a");

link.onclick = (event) => {
    event.preventDefault();
    alert("No slack(((")
}