function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function updateNumber() {
    var number1Elem = document.querySelector('.number1');
    var number2Elem = document.querySelector('.number2');
    var number3Elem = document.querySelector('.number3');

    number1Elem.innerHTML = getRandom(10);
    number2Elem.innerHTML = getRandom(10);
    number3Elem.innerHTML = getRandom(10);
}

updateNumber();