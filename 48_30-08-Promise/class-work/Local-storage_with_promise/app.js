const right = document.querySelector(".right"),
    form = document.querySelector("#contact-form"),
    listloader = document.querySelector(".lds-dual-ring");

let currentContacts = [];

///listloader.classList.add("hide");
showListLoader(false);

loaderList();

form.onsubmit = onAddContactHandler;

function loaderList() {
    showRightBox(false);
    showListLoader(true);
    Store.getAll().then(contacts => {
        showListLoader(false);
        currentContacts = contacts;
        showRightBox(true);
        renderList();
    });
}

function renderList() {
    console.log(currentContacts)
    right.innerHTML = currentContacts.map(mapToRow).join("");
    
    const buttons = right.querySelectorAll("button");
    buttons.forEach(b => b.onclick = removeContact);
}

function mapToRow(contact, index) {
    return `
    <div>
        <h2>${contact.name} ${contact.lastName}</h2>
        <h4>${contact.phone}</h4>
        <p>${contact.email}</p>
        <br>
        <button data-index=${index}>remove</button>
    </div>
    `
}

function onAddContactHandler(event) {
    event.preventDefault();
    const form = event.target;
    const contact = new Contact(
        form.name.value,
        form.lastName.value,
        form.phone.value,
        form.email.value    
    )
    showListLoader(true);
    showRightBox(false);

    Store.save(contact).then(res => {
        currentContacts = res;
        renderList();
        showListLoader(false);
        showRightBox(true);
        form.reset();
    });
}



function removeContact(event) {
    event.preventDefault()
    const item = +event.target.dataset.index;
    Store.remove(item).then(res=>{
        currentContacts=res;
        renderList();
    });
}

function showListLoader(isShow) {
    listloader.style.display = isShow ? "block" : "none";
}

function showRightBox(isShow) {
    right.style.display = isShow ? "block" : "none";
}