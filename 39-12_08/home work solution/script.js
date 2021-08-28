const inputText = document.querySelector("#myInput"),
    addBtn = document.querySelector("#addBtn"),
    list = document.querySelector("#todo-list");

inputText.focus();

addBtn.onclick = () => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    
    //1//checkbox.type = "checkbox" -->create input with type
    checkbox.setAttribute("type", "checkbox");

    //li.append(checkbox);
    li.innerText += inputText.value;
    li.prepend(checkbox);

    checkbox.onchange = () => {
        li.style.textDecoration = checkbox.checked ? "line-through" : none;
    }
    list.append(li);
    inputText.value = "";
    inputText.focus();
}

