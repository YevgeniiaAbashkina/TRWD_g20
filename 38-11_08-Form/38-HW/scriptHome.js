const toDoInput = document.querySelector("#toDoInput"),
    submitBtn = document.querySelector("#submitBtn"),
    ul = document.querySelector("#toDoList"),
    toDoList = [];

let li = document.createElement("li")
inputCheckbox = document.createElement("input");

inputCheckbox.type = "checkbox";
inputCheckbox.classList = "check";

    
toDoInput.focus();


/* submitBtn.onclick = () => {
    ///ul.innerHTML += `<li><input type="checkbox">${toDoInput.value}</li>` 
    ul.append(li);
    li.innerHTML += `<input type="checkbox">${toDoInput.value}`;
    toDoInput.value = "";
    toDoInput.focus();
} */

submitBtn.onclick = () => {
    ul.innerHTML += `<li><input type="checkbox">${toDoInput.value}</li>`
    li.style.fontSize = "1.5rem"
    toDoInput.value = "";
    toDoInput.focus();
}

li.onclick = () => {
    //li.style.classList=("through")
    li.innerHTML =`<strike><input type="checkbox">${toDoInput.value}</strike>}`
}




/* submitBtn.onsubmit = (event) => {
    //event.preventDefault();
    const toDo = event.target.toDoInput;
    let done = false;

    let doListObj = {
        toDo: "toDo.value",
        done: "done"    
    }

    toDoList.push(doListObj);

    toDoInput.value = ""
    toDoInput.focus();

    console.log(toDoList)
} */
