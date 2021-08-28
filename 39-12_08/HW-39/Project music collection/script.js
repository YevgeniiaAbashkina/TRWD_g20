const jazzBtn = document.querySelector("#jazz-btn"),
    rockBtn = document.querySelector("#rock-btn"),
    bluesBtn = document.querySelector("#blues-btn"),
    content = document.querySelector(".content");

    const div = document.createElement("div")

/* jazzBtn.onclick = (event) => {
    content.innerHTML = "";
    getItem(9, event.target.innerHTML);    
}

rockBtn.onclick = (event) => {
    content.innerHTML = "";
    getItem(8, event.target.innerHTML);    
}

bluesBtn.onclick = (event) => {
    content.innerHTML = "";
    getItem(5, event.target.innerHTML);
} */


function getColor() {
    return `${Math.random() * 256}, ${Math.random() * 256},  ${Math.random() * 256}`;
}

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => btn.onclick = (event) => {
    content.innerHTML = "";
    getItem(+event.target.value, event.target.innerHTML);    
})


function getItem(n, text, itemClass) {
    for (let i = 1; i <= n; i++){
        const div = document.createElement("div");
        //div.className = `item ${itemClass}`;
        //div.classList.add("item", itemClass)
        div.className = "item";
        div.innerHTML = `<p>${text}-item</p>`;
        div.style.backgroundColor = `rgb(${getColor()})`;
        content.append(div);
    }
}
