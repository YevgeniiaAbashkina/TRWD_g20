const contacts = [
    {
        name: 'John Doe',
        phone: '123456789',
        email: 'john@mail.com',
        address: 'Tel Aviv',
        desc: 'Best friend'
    },
    {
        name: 'Jack Sparrow',
        phone: '0987654321',
        email: 'jack@mail.com',
        address: 'Carribian Sea',
        desc: 'Pirate'
    },
    {
        name: 'Tony Stark',
        phone: '4566778',
        email: 'tony@stark.com',
        address: 'New York',
        desc: 'IronMen'
    }
];

const root = document.querySelector("#root"),
    nav = document.querySelector(".nav");

let currentPageLink = document.querySelector("a[href='contacts']"),
    currentContactRow;

renderContacts();

nav.onclick = function (event) {
    event.preventDefault();
    //console.log(event.target.tagName)
    if (event.target.tagName === "A") {
        currentPageLink.classList.remove("active");
        currentPageLink = event.target;
        currentPageLink.classList.add("active");
        navigation(currentPageLink.getAttribute("href"))
    }
}

function navigation(path) { //приходит ссылка "href"
    switch (path) {
        case "contacts":
            renderContacts();
            break;
        case "addContact":
            renderAddContact();
            break;
    }
}


document.body.onkeydown = function (e) {
    if(e.key ===  "Enter")
    console.log(e.key);
        
}

function renderContacts() {
    root.className = "contacts";
    root.innerHTML = `
    <ul class="list">
    ${contacts.map(mapToContactRow).join("")}
    </ul>
    <div class="contact-view">No selected</div>
    `;
    root.querySelector(".list").onclick = contactClickHandler;

}

function mapToContactRow(contact, index){
    return `
    <li class="list-item" data-index=${index}>
        <h2 class="title">${contact.name}</h2>
        <h3 class="sub-title">${contact.phone}</h3>
        <div class="delete"></div>
    </li>
    `
}

function contactClickHandler(event) {
    let li = event.target;
    //console.log(li)
    if (li.classList.contains("delete")) {
        contacts.splice(li.parentNode.dataset.index, 1);
        renderContacts();
    } else {
        if (li.tagName !== "LI") {
            li = event.target.parentNode;
        } if (currentContactRow) {
            currentContactRow.classList.remove("item-active");
        }
        showContact(li.dataset.index);
        currentContactRow = li;
        currentContactRow.classList.add("item-active")
    }
}

function showContact(index) {
    //console.log("contact view")
    const contact = contacts[+index];
    const contactViev = root.querySelector(".contact-view");
    
    contactViev.innerHTML = `
    <h2>${contact.name}</h2>
    <div class="contact-view-row">
      <img src="./img/.pngtechnology.png" alt="" />
      <h3>${contact.phone}</h3>
     </div>
     <div class="contact-view-row">
      <img src="./img/multimedia.png" alt="" />
      <h3>${contact.email}</h3>
     </div>
     <div class="contact-view-row">
      <img src="./img/buildings.png" alt="" />
      <h3 ">${contact.address}</h3>
     </div>
     <p>${contact.desc}</p>
    `;
    
}

function renderAddContact() {
    root.className = 'add-contact';
    root.innerHTML = `
    <form name = "addContactForm" action="#">
        <input
        id="inputName"
        class="form-control"
        type="text"
        name="name"
        placeholder="Type name"
        />
        <input
        id="inputPhone"
        class="form-control"
        type="text"
        name="phone"
        placeholder="Type phone"
        />
        <input
        id="inputEmail"
        class="form-control"
        type="text"
        name="email"
        placeholder="Type email"
        />
        <input
        id="inputAddress"
        class="form-control"
        type="text"
        name="address"
        placeholder="Type address"
        />
        <textarea
        id="inputDesc"
        class="form-control"
        type="text"
        name="description"
        placeholder="Type description"
        ></textarea>
        <div class="buttons"><button class="add-btn">Add</button></div>
    </form>`
    //const form = document.forms[0]
    const form = document.forms.addContactForm;
    form.onsubmit = formSubmitHandler;
}

function formSubmitHandler(event) {
    event.preventDefault();
    const form = event.target;
    contacts.push({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        desc: form.description.value,
    })
    clearForm(form);
    currentPageLink.classList.remove("active")
    currentPageLink = document.querySelector("a[href='contacts']"),
    currentPageLink.classList.add("active")    
    navigation("contacts")
}

function clearForm(form) {
    for (element of form) {
        if (element.localName !== "button") {
            element.value =""
        }
    }
}

/////////////////////////////////
const searchInput = document.querySelector("#search"),
    searchIcon = document.querySelector(".searchIcon");

searchInput.oninput = function () {
    renderContacts();
    let valueOfUser = this.value.trim();
    
    let searchItems = document.querySelectorAll('.list-item li');
    console.log(searchItems)
    if (valueOfUser != "") {
        searchItems.forEach(function (elem) {
            if (elem.innerText.search(valueOfUser) == -1) {
                elem.classList.add("hide");
            }
            else {
                elem.classList.remove("hide");
            }
        });
    }
    else {
        searchItems.forEach(function (elem) {
            elem.classList.remove("hide");
        });
    }
}    
/* 

function renderContacts() {
    root.className = "contacts";
    root.innerHTML = `
    <ul class="list">
    ${contacts.map(mapToContactRow).join("")}
    </ul>
    <div class="contact-view">No selected</div>
    `;
    root.querySelector(".list").onclick = contactClickHandler;

}

function mapToContactRow(contact, index){
    return `
    <li class="list-item" data-index=${index}>
        <h2 class="title">${contact.name}</h2>
        <h3 class="sub-title">${contact.phone}</h3>
        <div class="delete"></div>
    </li>
    `
} */