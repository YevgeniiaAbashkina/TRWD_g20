//setTimeout(()=>{console.log("hello")}, 2000)

const idTimeOut=setTimeout(display, 1000, "hello from timeOut");

function display(text) {
    console.log(text);
}
display("hello from normal stream");

console.log("end of code");
////////////////////////
let count = 10;
const id = setInterval(function () { //может уйти в минус, надо остановить
    console.log(count--);
    if (count === 0) { //отменить по условию
        console.log("stop")
        clearInterval(id)
    }
}, 1000);

/* setTimeout(function () {
    console.log("time out");
    clearInterval(id)
}, 5000);//отменить по времени
*/

/////////////////////inner HTML//////////////
const btn = document.querySelector(".btn");

btn.onclick = myAnimation;

function myAnimation() {
    const box = document.querySelector('.box');
    let position = 0;
    const id = setInterval(movieBoxBottom, 10);
    let idTop;

    function movieBoxBottom() {
        /* if (box.style.bottom <= "0px" && box.style.right <= "0px") */ {
            if (position === 300) {
                clearInterval(id);
                idTop = setInterval(movieBoxTop, 10)
            }
            position++;
            box.style.top = position + "px";
            box.style.left = position + "px";
        }

        function movieBoxTop() {
            if (position === 0) {
                clearInterval(idTop);
                id = setInterval(movieBoxBottom, 10)
            }
            position--;
            box.style.top = position + "px";
            box.style.left = position + "px";
        }

    }
}
///////////////////////////////////////////////////
/* function myAnimation2() {
	const box = document.querySelector('.box')
	let position = 0;
	const id = setInterval(movieBox, 10);
	function movieBox() {
		if (position == 600) {			
			clearInterval(id);
		} else {
			position++
			if(position < 300){
				box.style.top = position + 'px'
				box.style.left = position + 'px'
			}else{box.style.top = (600 - position) + 'px'
				box.style.left = (600 - position) + 'px'}
		}
	}
} */




