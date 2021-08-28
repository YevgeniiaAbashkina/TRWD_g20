//Task02
//Галерея    

const items = document.querySelectorAll(".item"),
    btnPrev = document.querySelector("#btn-prev"),
    btnNext = document.querySelector("#btn-next");
    
console.log(items)//object 

let currentIndex = 0;
items[currentIndex].style.display = "block";

btnNext.onclick = () => {
    items[currentIndex].style.display = "none"
    currentIndex++;
    if (currentIndex === items.length) {
        currentIndex = 0;
    }
    items[currentIndex].style.display = "block";
}

btnPrev.onclick = () => {
    items[currentIndex].style.display = "none"
    currentIndex--;
    if (currentIndex <0) {
        currentIndex = items.length-1;
    }
    items[currentIndex].style.display = "block";
}



