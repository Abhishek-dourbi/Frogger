const timeLeftDisplay = document.querySelector('#time-left');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');

let currIndex = 76;
const width = 9;

function moveFrog(e) {
    squares[currIndex].classList.remove('frog');

    switch(e.key) {
        case 'ArrowLeft':
            if(currIndex % width) currIndex--
            break;
        case 'ArrowRight':
            if(currIndex % width < width - 1) currIndex++;
            break;
        case 'ArrowUp':
            if(currIndex >= width) currIndex -= width;
            break;
        case 'ArrowDown':
            if(currIndex + width < width * width) currIndex += width;
            break;
    }
    squares[currIndex].classList.add('frog');
}
document.addEventListener('keyup', moveFrog);

function autoMoveLogs() {
    logsLeft.forEach(moveLogLeft);
    logsRight.forEach(moveLogRight);
}

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1');
            logLeft.classList.add('l2');
            break;

        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2');
            logLeft.classList.add('l3');
            break;

        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3');
            logLeft.classList.add('l4');
            break;

        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4');
            logLeft.classList.add('l5');
            break;

        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5');
            logLeft.classList.add('l1');
            break;
    }
}

function moveLogRight(logRight) {
    switch(true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1');
            logRight.classList.add('l5');
            break;

        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2');
            logRight.classList.add('l1');
            break;

        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3');
            logRight.classList.add('l2');
            break;

        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4');
            logRight.classList.add('l3');
            break;

        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5');
            logRight.classList.add('l4');
            break;
    }
}

setInterval(autoMoveLogs, 1000);