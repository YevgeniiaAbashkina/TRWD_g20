const input = document.querySelector("#data-input"),
    btn = document.querySelector("#data-btn");

let id;

btn.onclick = () => {
    if (id != null) {
        clearInterval(id)
    }
    const date = input.value.split(".").reverse().join("/");
    const deadline = new Date(date);
    id = setInterval(renderDateTimer, 1000, deadline);
}

function renderDateTimer(date) {
    /* const date = input.value.split(".").reverse().join("/");
    //console.log(date);//"12.03.2021-> 2021/03/12 on Greenwich"
    const deadline = new Date(date);
    //console.log(deadline); */

    const timeLeft = date - new Date();
    if (timeLeft < 0) {
        clearInterval(id);
        document.querySelector(".wrapper").innerHTML = "<h3>time is over</h3>";
        return;
    }

    const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeLeft / (60 * 60 * 1000)) % 24);
    const min = Math.floor((timeLeft / (60 * 1000)) % 60);
    const sec = Math.floor((timeLeft / (1000)) % 60);

    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = "";

    const dateTimer = document.createElement("div");
    dateTimer.classList.add("timer");
    dateTimer.innerHTML =`
        <div class="days number-box">
                <p class="number" id="days">${days}</p>
                <p>days</p>
            </div>
            <div class="hours number-box">
                <p class="number" id="hours">${hours}</p>
                <p>hours</p>
            </div>
            <div class="minutes number-box">
                <p class="number" id="minutes">${min}</p>
                <p>minutes</p>
            </div>
            <div class="seconds number-box">
                <p class="number" id="seconds">${sec}</p>
                <p>seconds</p>
        </div>`
    wrapper.append(dateTimer);   
}