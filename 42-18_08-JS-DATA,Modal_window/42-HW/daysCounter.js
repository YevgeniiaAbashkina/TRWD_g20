const dataInput = document.querySelector("#data-input"),
    dataBtn = document.querySelector("#data-btn");

dataBtn.onclick = () => {
    
    const userDate = dataInput.value;
    const today = new Date();
    //const dateNow = new Date("2022-08-18");
    const daysLeft = (today - userDate);
    console.log(userDate);
    const days = Math.floor(daysLeft / (24 * 60 * 60 * 1000));
    const hours = Math.floor((daysLeft / (60 * 60 * 1000)) % 24);
    const min = Math.floor((daysLeft / (60 * 1000)) % 60);
    const sec = Math.floor((daysLeft / (60 * 1000)) % 60);

    const div = document.createElement("div");
    div.classList.add("wrapper");
    div.innerHTML = `<div class="days number-box">
                <p class="number">${days}</p>
                <p>days</p>
            </div>
            <div class="hours number-box">
                <p class="number">${hours}</p>
                <p>hours</p>
            </div>
            <div class="minutes number-box">
                <p class="number">${min}</p>
                <p>minutes</p>
            </div>
            <div class="seconds number-box">
                <p class="number">${min}</p>
                <p>seconds</p>
            </div>`;
    document.querySelector(".container").append(div);
    dataInput.value = "";
   
}  

