/* 
1. Создать форму:
    поле - имя
        - фамилия
        - город
        - возраст
        - емаил
        - телефон
2.  При заполнении формы собирать данные в массив юзерс и рендерить  на странице под формой в левой части, показывать списком не полную информацию(имя, фамилию и город проживания ползователя)   
3. При клике на конкретного пользователя полная информация по нему отрисовывается в правой части
*/
/* const usersForm = document.querySelector("#usersForm"),
    btnSend = document.querySelector("#submit"),
    usersList = document.querySelector("#users"),
    right = document.querySelector(".right"),
    users = [];

btnSend.onclick = (event) => {
    event.preventDefault();
    const name = usersForm.querySelector("#name"),
        lastName = usersForm.querySelector("#lastName"),
        age = usersForm.querySelector("#age"),
        city = usersForm.querySelector("#city"),
        email = usersForm.querySelector("#email"),
        phone = usersForm.querySelector("#telephone");
    
    const user = {
        id: users.length,
        name: name.value ,
        lastName: lastName.value,
        age: age.value,
        city: city.value,
        email: email.value,
        phone: phone.value,
    };
    users.push(user);
    name.value = "";
    lastName.value = "";
    age.value="";
    city.value="";
    email.value="";
    phone.value = "";
    usersList.innerHTML = "";
    for (let user of users) {
        const li = document.createElement("li");
        li.classList.add("userItem");
        li.innerHTML = `<h4>Name: ${user.name} Last name: ${user.lastName}</h4>
        <p>City: ${user.city}</p>`;
        usersList.append(li);
    }
} */

//2
const usersForm = document.querySelector("#usersForm"),
    btnSend = document.querySelector("#submit"),
    usersList = document.querySelector("#users"),
    right = document.querySelector(".right"),
    users = [];

btnSend.onclick = (event) => {
    event.preventDefault();
    const user = {
        id: users.length
    };
    const inputs = usersForm.querySelectorAll("input");
    for (input of inputs) {
        user[input.id] = input.value;
        input.value = "";
    }
    
    users.push(user);

    renderUserList();
    /* usersList.innerHTML = "";
    for (let user of users) {
        const li = document.createElement("li");
        li.classList.add("userItem");
        li.innerHTML = `<h4>Name: ${user.name} Last name: ${user.lastName}</h4>
        <p>City: ${user.city}</p>`;
        usersList.append(li);
    } */
}

function renderUserList() {
    usersList.innerHTML = "";
    for (let user of users) {
        const li = document.createElement("li");
        li.id=`user_${user.id}`
        li.classList.add("userItem");
        const h4 = document.createElement("h4");
        h4.innerHTML = `Name: ${user.name}  ${user.lastName}`;
        const p = document.createElement("p");
        p.innerHTML = `City: ${user.city}`;

        li.append(h4);
        li.append(p);
        li.onclick = fullInfo; //обработчик событий        
        usersList.append(li);
    }
}

/* function fullInfo(event) {
    const id = +event.currentTarget.id.split("_")[1];
    const user = users.find(u => u.id === id);
    //console.log(id)
    //console.log(event.currentTarget.id)
    right.innerHTML = "";
    

            const avatar = document.createElement("div");
            avatar.classList.add("avatar");
    
            const h3 = document.createElement("h3");
            h3.innerHTML = `Name: ${user.name} <br> Last  name: ${user.lastName}`;
    
            const pAge = document.createElement("p");
            pAge.innerHTML = `Age: ${user.age}`;

            const pCity = document.createElement("p");
            pCity.innerHTML = `City: ${user.city}`;
            
            const pEmail = document.createElement("p");
            pEmail.innerHTML = `Email: ${user.email}`;
            
            const pPhone = document.createElement("p");
            pPhone.innerHTML = `Phone: ${user.telephone}`;
    
            right.innerHTML = "";
            right.append(avatar);
            right.append(h3);
            right.append(pAge);
            right.append(pCity);
            right.append(pEmail);
            right.append(pPhone);
    
    right.style.right ="0"
}  */


 //другой способ
function fullInfo(event) {
    const id = +event.currentTarget.id.split("_")[1];
    const user = users.find(u => u.id === id);
    right.innerHTML = "";
    const userWrapper = document.createElement("div");
    userWrapper.classList.add("user-wrapper");

    userWrapper.innerHTML = `<div class="avatar"></div>
                <h3>Name: ${user.name} <br> Last name: ${user.lastName}</h3>
                <p>Age: ${user.age}</p>
                <p>City: ${user.city}</p>
                <p>e-mail: ${user.email}</p>
                <p>phone: ${user.telephone}</p>`;
    right.append(userWrapper);
    setTimeout(()=>userWrapper.style.left="0", 100)
} 