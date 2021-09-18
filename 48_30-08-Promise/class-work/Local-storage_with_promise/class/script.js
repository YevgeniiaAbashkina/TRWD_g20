const wrapper = document.querySelector(".wrapper"),
    btn = document.createElement("button");

const row = document.createElement("div");
row.classList.add("row");



wrapper.append(btn);
btn.innerText = "click me";

btn.onclick = () => {
    const colors = ["aquamarine", "blue", "lime"];
    localStorage.setItem("colors", JSON.stringify(colors));
    row.innerHTML = "";
    renderBoxes(3);
}

function createBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    return box
}

function renderBoxes(n) {
    const index = JSON.parse(localStorage.getItem("boxId"));
    //const colors = JSON.parse(localStorage.getItem("colors"));
    //console.log(colors)//возвращает массив
    for (let i = 0; i < n; i++){
        const box = createBox();
        //box.style.background = colors[i];
        box.setAttribute("data-index", i);
        box.onclick = onclickHandler;
        if (i === index) {
            //box.style.background="lime"
            box.click();
        }
        row.append(box);
    }
    wrapper.prepend(row);
}

function onclickHandler(event) {
    const boxes = row.querySelectorAll(".box");
    boxes.forEach(box => box.style.background = "aquamarine");
    event.target.style.background = "lime";
    const index = event.target.dataset.index;
    localStorage.setItem("boxId", index)
    console.log(event.target)
    
}


