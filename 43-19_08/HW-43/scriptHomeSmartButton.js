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
    contactsSection = document.querySelector(".contactsSection");
    fullInfoSection = document.querySelector(".fullInfoSection");

contacts.forEach((element, index) => {
    element.id = index;
}) 
console.log(contacts);


createContactBox();

contactsBtn.onclick = (event) => {
    event.preventDefault();
    createContactBox;
    contactsBtn.classList.add("active");
}

const contactsBox = document.createElement("div");
contactsBox.classList.add("contactsBox");
        
function createContactBox() {
    contactsSection.style.display = "block";
    for (let i = 0; i < contacts.length; i++) {
        const contactsBox = document.createElement("div");
        contactsBox.classList.add("contactsBox");  
        contactsBox.id = "contact_" + contacts[i].id;
        const about = document.createElement("div");
        about.classList.add("about")
        about.innerHTML = `
                            <h2>${contacts[i].name}</h2>
                            <p>${contacts[i].phone}</p>
                        </div>
                        <div class="del">
                            <img src="./img/trash-restore-alt-solid.svg" alt="trash">
                        `
        contactsSection.append(contactsBox);
        contactsBox.append(about);
    }
}

const contactNames = contactsBox.querySelectorAll(".about");

    for (el of contactNames) {
        el.onclick = (event) => {
            fullInfoSection.innerHTML = "";
            const id = +event.currentTarget.id.split("_")[1];
            const element = contacts.find((about) => about.id === id);
            fullInfoSection.innerHTM = `<h2>${element.name}</h2>`;
            contactSection.append(fullInfoSection)
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

/*     contacts.forEach((element) => {
        contactsSection.style.display = "block";
        const contactsBox = document.createElement("div");
        contactsBox.id = "contact_" + element.id;
        contactsBox.className = "contactsBox";
        contactsBox.innerHTML = `<div class="about">
                    <h2>${element.name}</h2>
                    <p>${element.phone}</p>
                </div>
                <div class="del">
                    <img src="./img/trash-restore-alt-solid.svg" alt="trash">
                </div>`
        contactsSection.append(contactsBox);
    }); */




/* 
contactsBox.onclick = (event) => {
    event.preventDefault();
    createfullInfoSection;
} */

/* function createContactBox() {
    contactsSection.style.display = "block";
    for (let i = 0; i < contacts.length; i++) {
        const contactsBox = document.createElement("div");
        contactsBox.classList.add("contactsBox");  
        contactsBox.innerHTML = `<div class="about">
                            <h2>${contacts[i].name}</h2>
                            <p>${contacts[i].phone}</p>
                        </div>
                        <div class="del">
                            <img src="./img/trash-restore-alt-solid.svg" alt="trash">
                        </div>`
        contactsSection.append(contactsBox);
    }
} */


/* 
function createfullInfoSection() {

    fullInfoSection.innerHTML = "";
    const id = +event.currentTarget.id.split("_")[1];
        const element = library.find((book) => book.id === id);


    for (let i = 0; i < contacts.length; i++){
        fullInfoSection.innerHTML=`<h2>${contacts[i].name}</h2>
                <div class="fullInfo"> 
                    <div class="imgBox">
                        <img src="./img/phone-alt-solid.svg" alt="phone">
                        <img src="./img/envelope-open-text-solid.svg" alt="envelope"> 
                        <img src="./img/city-solid.svg" alt="city">       
                    </div>
                    <div class="infoBox">
                        <p>${contacts[i].phone}</p>
                        <p>${contacts[i].email}</p>
                        <p>${contacts[i].city}</p>
                        <p>${contacts[i].description}</p>
                    </div>`
        contactsSection.append(fullInfoSection);
    }
}  */



    







//////////////////////////////////////////////////////////    
/* const button = document.querySelectorAll("button");
let newArray = [];

button.onclick = () => {
    const obj = {
        id=array.length,
        title: array.title,
        price: array.price,
        quantity: kk
}
} */


    
   /*  picture: "./images/salad-pngrepo-com.png",
    title: "Ceaser Salad",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsam, error.",
    price: 6,
    quantity: 4, */

    /* console.log(array)

const homeBtn = document.querySelector("#homeBtn"),
    cartBtn = document.querySelector("#cartBtn"),
    root= document.querySelector(".root");

homeBtn.onclick = (event) => {
    event.preventDefault();
    root.innerHTML = "";
    root.style.display = "flex";
    for (let i = 0; i < array.length; i++){
        const div = document.createElement("div");
        div.className = "cart";
        div.innerHTML = `<img src="${array[i].picture}", alt="${array[i].title}">
        <h2>${array[i].title}</h2>
        <p>${array[i].description}</p>
        <h3>Price: &#8364 ${array[i].price}</h3>
        <button>ADD TO CART</button>`;
        root.append(div);
    }
}   


cartBtn.onclick = (event) => {
    event.preventDefault();
    root.innerHTML = "";
    const table = document.createElement("table");
    table.className = "table";
    root.style.display = "block";
    table.innerHTML = `<thead>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>COUNT</th>
                        <th>TOTAL</th>
                    </thead>`;
    for (let i = 0; i < array.length; i++){
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${array[i].title}</td>
            <td>${array[i].price} &#8364</td>
            <td>${array[i].quantity}</td>
            <td>${array[i].price * array[i].quantity} &#8364</td>`
        table.append(tr);
    }
    root.append(table);
    const total = document.createElement("div");
    total.className = "sum";
    total.innerHTML = `Total: &#8364 ${array.reduce((total, item) => total += item.quantity * item.price, 0)}`;
    root.append(total);
}
 */