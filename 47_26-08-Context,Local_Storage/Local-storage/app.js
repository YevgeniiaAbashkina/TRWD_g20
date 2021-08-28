const right = document.querySelector(".right"),
    form = document.querySelector("#contact-form");

renderList();

form.onsubmit = onAddContactHandler;

function renderList(){
    const contacts = Store.getAll();
    right.innerHTML = contacts.map(mapToRow).join("");
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
    Store.save(contact);
    renderList();
    form.reset();//очистит все формы
}

right.onclick = removeContact;

function removeContact(event) {
    if (event.target.tagName === "BUTTON") {
        const item = event.target.dataset.index;
        Store.remove(item);
        renderList()
    }
}
