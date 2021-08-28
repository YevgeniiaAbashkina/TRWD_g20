const modalTriggers = document.querySelectorAll("[data-modal]")//pseudocollection for btn

/* for (let btn of modalTriggers) {
    btn.onclick = (event) => {
        if (event.target.dataset.modal == 1) {
            console.log("click")
        }
    }
} */

/* function clickHandler() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML=`<div class="modal-dialog">
            <form action="#">
                <div class="modal-close" data-close>&times</div>
                <h3>We will get in touch with you as soon as possible!</h3>
                <input type="text" class="modal-input"placeholder="your name">
                <input type="text" class="modal-input" placeholder="your phone number">
                <button class="btn btn-dark">Call me back</button>
            </form>
        </div>`
} */

////////////////////  1   ////////////////////////////
/* const clickHandler= () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML=`<div class="modal-dialog">
            <form action="#">
                <div class="modal-close" data-close>&times</div>
                <h3>We will get in touch with you as soon as possible!</h3>
                <input type="text" class="modal-input"placeholder="your name">
                <input type="text" class="modal-input" placeholder="your phone number">
                <button class="btn btn-dark">Call me back</button>
            </form>
        </div>`
    const close = modal.querySelector("[data-close]");
    close.addEventListener("click", closeModal);
    document.querySelector("body").append(modal);
    document.body.style.overflow = "hidden";

}

modalTriggers.forEach((btn) => {
    btn.addEventListener("click", clickHandler)
})

function closeModal() {
    document.querySelector(".modal [data-close]").removeEventListener("click", closeModal);
    document.querySelector(".modal").remove();
    document.body.style.overflow = "";
} */
////////////////   2  /////////////////////
/* const clickHandler= () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML=`<div class="modal-dialog">
            <form action="#">
                <div class="modal-close" data-close>&times</div>
                <h3>We will get in touch with you as soon as possible!</h3>
                <input type="text" class="modal-input"placeholder="your name">
                <input type="text" class="modal-input" placeholder="your phone number">
                <button class="btn btn-dark">Call me back</button>
            </form>
        </div>`
    modal.addEventListener("click", closeModalWindow);
    document.addEventListener("keydown", closeModalByEsc)
    document.querySelector("body").append(modal);
    document.body.style.overflow = "hidden";

}

modalTriggers.forEach((btn) => {
    btn.addEventListener("click", clickHandler)
})

function closeModal() {
    
    document.querySelector(".modal").removeEventListener("click", closeModalWindow);
    document.removeEventListener("keydown", closeModalByEsc)
    document.querySelector(".modal").remove()
    document.body.style.overflow = "";
}

function closeModalWindow(event) {
    const target = event.target;
    if (target === document.querySelector(".modal") || target === document.querySelector(".modal [data-close]")){
        closeModal();
    }
}

function closeModalByEsc(event) {
    if (event.key === "Escape")
        closeModal();
} */
/////////////////3////////////////////////
//вывод данных из формы в консоль
const clickHandler= () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML=`<div class="modal-dialog">
            <form action="#">
                <div class="modal-close" data-close>&times</div>
                <h3>We will get in touch with you as soon as possible!</h3>
                <input type="text" class="modal-input"placeholder="your name">
                <input type="text" class="modal-input" placeholder="your phone number">
                <button class="btn btn-dark">Call me back</button>
            </form>
        </div>`
    const form = modal.querySelector("form");
    form.addEventListener("submit", formHandler)
    modal.addEventListener("click", closeModalWindow);
    document.addEventListener("keydown", closeModalByEsc)
    document.querySelector("body").append(modal);
    document.body.style.overflow = "hidden";
}

modalTriggers.forEach((btn) => {
    btn.addEventListener("click", clickHandler)
})

function closeModal() {
    document.querySelector(".modal").removeEventListener("click", closeModalWindow);
    document.removeEventListener("keydown", closeModalByEsc);
    document.querySelector(".modal form").removeEventListener("submit", formHandler);
    document.querySelector(".modal").remove()
    document.body.style.overflow = "";
}

function closeModalWindow(event) {
    const target = event.target;
    if (target === document.querySelector(".modal") || target === document.querySelector(".modal [data-close]")){
        closeModal();
    }
}

function closeModalByEsc(event) {
    if (event.key === "Escape")
        closeModal();
}

function formHandler(event) {
    event.preventDefault();
    const inputs = event.target.querySelectorAll("input");
    for (input of inputs) {
        console.log(input.value);
        input.value = "";
    }
    closeModal();
}