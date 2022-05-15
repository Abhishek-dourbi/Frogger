const timeLeftDisplay = document.querySelector('#time-left');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

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