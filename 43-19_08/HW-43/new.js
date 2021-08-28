const contacts = [{
    id:"",
    name: "John Doe",
    phone: "+49 (150) 232-56-987",
    email: "john@mail.com",
    city: "Tel Aviv",
    description:"best friend",
    
},
    {
    id:"",
    name: "Jack Sparrow",
    phone: "+20 (150) 123-45-678",
    email: "sparrow@mail.com",
    city: "New York",
    description:"brother",
    
},
    {
    id:"",
    name: "Tonny Stark",
    phone: "+49 (152) 987-98-987",
    email: "tonnyS@mail.com",
    city: "Chemnitz",
    description:"teacher",
    
    }];

const contactsBtn = document.querySelector("#contactsBtn"),
    newBtn = document.querySelector("#newBtn"),

    contactsSection = document.querySelector(".contactsSection"),
    contactsBox = document.querySelector(".contactsBox"),
    fullInfoSection = document.querySelector(".fullInfoSection");

contacts.forEach((element, index) => {
    element.id = index;
});

contacts.forEach((element) => {
    contactsBox.style.display = "flex";
    contactsBox.style.justifyContent="space-between"
    const div = document.createElement("div");
    div.id = "contact_" + element.id;
    div.className = "about";
    div.innerHTML = `<h2>${element.name}</h2>
                    <p>${element.phone}</p>
                </div>
                <div class="del">
                    <img src="./img/trash-restore-alt-solid.svg" alt="trash">
                </div>`;
    contactsBox.append(div);
});

const contactNames = contactsBox.querySelectorAll(".about");

    for (contactName of contactNames) {
        contactName.onclick = (event) => {
            fullInfoSection.innerHTML = "";
            const id = +event.currentTarget.id.split("_")[1];
            const element = contacts.find((about) => about.id === id);
            fullInfoSection.innerHTM = `<h2>${element.name}</h2>`;
            //contactSection.append(fullInfoSection)
            const fullInfo = document.createElement("div");
            fullInfo.className = "fullInfo";
            fullInfo.innerHTML = `<div class="imgBox">
                        <img src="./img/phone-alt-solid.svg" alt="phone">
                        <img src="./img/envelope-open-text-solid.svg" alt="envelope"> 
                        <img src="./img/city-solid.svg" alt="city">       
                    </div>
                    <div class="infoBox">
                        <p>${element.phone}</p>
                        <p>${element.email}</p>
                        <p>${element.city}</p>
                        <p>${element.description}</p>
                    </div>`
            fullInfoSection.append(fullInfo);
        }
}

contactsBtn.onclick = (event) => {
    event.preventDefault();
    createContactBox;
    contactsBtn.classList.add("active");
}
    
function createContactBox() {
    contactsSection.style.display = "block";
    for (let i = 0; i < contacts.length; i++) {
        const contactsBox = document.createElement("div");
        contactsBox.classList.add("contactsBox");  
        contactsBox.id = "contact_" + contacts[i].id;
        contactsBox.innerHTML = `<div class="about">
                            <h2>${contacts[i].name}</h2>
                            <p>${contacts[i].phone}</p>
                        </div>
                        <div class="del">
                            <img src="./img/trash-restore-alt-solid.svg" alt="trash">
                        </div>`
        contactsSection.append(contactsBox);
    }
}