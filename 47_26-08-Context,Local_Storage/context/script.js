/* function printContext() {//context Window
    console.log(this)
}

printContext();

const user = {   //context Object
    name: "Vasya",
    print: function () {
        console.log(this.name)
    }
}

user.print() */

//потеря контекста


const timerInput = document.querySelector('#timerInput'),
    result = document.querySelector("#result"),
    startBtn = document.querySelector("#startBtn"),
    stopBtn = document.querySelector("#stopBtn");


const timer = new Timer(0, onUpdateCount, onStop); //{count: undefined, id}

result.style.display="none"

startBtn.onclick = function () {
    const input = parseInt(timerInput.value);
    timer.count = input;
    timer.start();
    timerInput.style.display = "none";
    result.style.display = "block";
    startBtn.disabled=true
}

//чтобы обойти потерю контекста, нужно пользоваться :

//stopBtn.onclick = timer.stop.bind(timer);

//или

stopBtn.onclick = function () { //stop worked
    timer.stop();
}

function onUpdateCount(count) {
    result.innerHTML = count;
}

function onStop(count) {
    timerInput.value = count;
    timerInput.style.display = "block";
    result.style.display = "none";
    startBtn.disabled = false;
}
