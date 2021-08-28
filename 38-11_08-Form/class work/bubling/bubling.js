const box = document.querySelector(".box"),
    item = box.querySelector(".item");

const click = (event) => {
    console.log(event.target);
    //console.log(event.currentTarget);
    console.log("click")
}

item.addEventListener("click", click);//item.onclick = click
box.addEventListener("click", click);

console.dir(box)

/////////////////////
const row = document.querySelector(".row"),
    items = document.querySelectorAll(".box-item");

//items.forEach(element => element.onclick = click); - срабатывает из за перебора все детей


///отзывается теперь если кликать только по детям, хотя обработчик стоит на родителе
row.onclick = (event)=>{
    if (event.target.classList.contains("box-item")) {
        console.log(event.target);
        console.log("click")
    }
}
