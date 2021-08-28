const array = [ {
    picture: "./images/salad-pngrepo-com.png",
    title: "Ceaser Salad",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsam, error.",
    price: 6,
    quantity: 4,
},
{
    picture: "./images/soup-pngrepo-com.png",
    title: "Tomato soup",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsam, error.",
    price: 5,
    quantity: 1,
},
{
    picture: "./images/steak-pngrepo-com.png",
    title: "Steak",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsam, error.",
    price: 12,
    quantity: 1
},
{
    picture: "./images/orange-juice-juice-pngrepo-com.png",
    title: "Orange juice",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsam, error.",
    price: 3,
    quantity: 1
    } ];

    console.log(array)

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
