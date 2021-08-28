function manageDiv(num) {
    for (let i = 1; i <= num; i++) {
        let div = document.createElement("div");    
        document.querySelector(".container1").append(div);
        div.classList.add('firstTaskDiv');
        div.onclick = () => {
            if (i != num) {
                div.classList.toggle('hide')
            }
        }
    }
}
manageDiv(10);

/////////////////////////   2   //////////////////////////
function createDiv(num) {
    for (let i = 1; i <= num; i++) {
        let div = document.createElement("div");    
        document.querySelector(".container2").append(div);
        div.classList.toggle('square');
        div.onclick = () => {
            div.classList.toggle('circle')
        }
    }
}

createDiv(5)







