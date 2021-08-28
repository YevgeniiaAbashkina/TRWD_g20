const inputFilms = document.querySelector("#films"),
    btnAdd = document.querySelector("#btn-add"),
    ol = document.querySelector("#film-list");

btnAdd.onclick = () => {
    const li = createLi(inputFilms.value);
    ol.append(li);
    inputFilms.value = "";
}

btnAdd.addEventListener("click", createLi);

function createLi(name) {
    const li = document.createElement("li");
    li.innerHTML = name;
    return li; 
}
