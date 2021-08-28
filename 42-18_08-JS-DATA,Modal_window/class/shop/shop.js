const goods = [
    {
        id: 0,
        title: "Pencil",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at.",
        price: 2
    },
    {
        id: 1,
        title: "Pen",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at.",
        price: 3
    },
    {
        id: 2,
        title: "Album",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at.",
        price: 5
    },
    {
        id: 3,
        title: "Papier",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at.",
        price: 1
    }
];

cart = [];

renderMyShop();

function renderMyShop() {
    const container = document.createElement("div");
    container.classList.add("container");
    goods.forEach((good)=> {
        const item = document.createElement("div");
        item.classList.add('item');
        item.innerHTML = `<h3>${good.title}</h3>
                    <p>${good.description}</p>
                    <p>Price: ${good.price} &euro;</p>
                    <button data-id =${good.id}>Add to cart</button>`;
        container.append(item);
    })
        const buttons = container.querySelectorAll("[data-id]");
        buttons.forEach(btn => {
            btn.onclick = goodAddHandler;
    })
    document.querySelector(".left").append(container)
}

/* function goodAddHandler(event) {
    console.log(event.target) ///<button data-id="0">Add to cart</button>  выводит объект на котором клик произошел
} */

function goodAddHandler(event) {
    const id = +event.target.dataset.id;
    //console.log(id)
    const item = goods.find(good => good.id == id);
    const goodInCart = cart.find(good => good.id == id);
    if (goodInCart) {
        goodInCart.quantity++;
    } else {
        cart.push({
            id,      // id: id       //item.id
            title: item.title,
            price: item.price,
            quantity: 1
        })
    }
    renderCart();
}


function removeFromCart(event) {
    if (event.target.classList.contains("fas")) {
        const index = +event.target.dataset.id;
        const good = cart[index];
        if (good.quantity > 1) {
            good.quantity--;
        } else {
            cart.splice(index, 1);
        }
    }
    renderCart();
}




function renderCart() {
    document.querySelector(".right").innerHTML=`<h2>My cart</h2>`
    const table = document.createElement("table");
    table.innerHTML = `<thead>
                    <th>Title</th>
                    <th>Price:</th>
                    <th>Quantity</th>
                </thead>`;
    const tbody = document.createElement("tbody");
    
    cart.forEach((item, index) => {
        tbody.innerHTML += `
                    <tr>
                        <td><i class="fas fa-trash" data-id=${index}></i> ${item.title}</td>
                        <td>${item.price} &euro;</td>
                        <td>${item.quantity}</td>
                    </tr>`;
        
    })
    tbody.onclick = removeFromCart;
    table.append(tbody);
    const total = document.createElement("h3")
    total.innerHTML =`Total: ${cart.reduce((total, item)=> total += item.price * item.quantity, 0)}`
    document.querySelector(".right").append(table);
  
    document.querySelector(".right").append(total);
}

