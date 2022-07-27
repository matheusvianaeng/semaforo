
const semaf = document.getElementById('semaf__off');
const button = document.getElementById('button');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if(colorIndex < 2) {
        colorIndex++;
    } else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['button__red', 'button__yellow', 'button__green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOn = {
    'button__red': () => semaf.src = './img/vermelho.png',
    'button__yellow': () => semaf.src = './img/amarelo.png',
    'button__green': () => semaf.src = './img/verde.png',
    'button__auto': () => intervalId = setInterval(changeColor, 1000)
}

button.addEventListener('click', trafficLight);