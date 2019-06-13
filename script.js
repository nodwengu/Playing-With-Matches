var allNumbers = document.querySelectorAll('.number');

var number1Elem = document.querySelector('.number1');
var number2Elem = document.querySelector('.number2');
var number3Elem = document.querySelector('.number3');

var msgBtn = document.querySelector('.msgButton');

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function updateNumber() {

    number1Elem.innerHTML = getRandom(10);
    number2Elem.innerHTML = getRandom(10);
    number3Elem.innerHTML = getRandom(10);

    if(allNumbers[1] == allNumbers[0]) {
        alert("Equal");
    } else if(allNumbers[1] == allNumbers[2]) {
        alert("Equal");
    }
}

msgBtn.addEventListener('click', updateNumber);