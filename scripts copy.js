const buttonRed = document.getElementById('button__red');
const buttonYellow = document.getElementById('button__yellow');
const buttonGreen = document.getElementById('button__green');
const buttonAuto = document.getElementById('button__auto');
const semaf = document.getElementById('semaf__off');

function semafClose() {
    semaf.src='./img/vermelho.png';
}

function semafWait() {
    semaf.src='./img/amarelo.png';
}

function semafOpen() {
    semaf.src='./img/verde.png';
}

buttonRed.addEventListener('click', semafClose);
buttonYellow.addEventListener('click', semafWait);
buttonGreen.addEventListener('click', semafOpen);
