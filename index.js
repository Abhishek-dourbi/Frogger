const timeLeftDisplay = document.querySelector('#time-left');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currIndex = 76;
const width = 9;

function moveFrog(e) {
    squares[currIndex].classList.remove('frog');

    switch(e.key) {
        case 'ArrowLeft':
            currIndex--;
            break;
        case 'ArrowRight':
            currIndex++;
            break;
        case 'ArrowUp':
            currIndex -= width;
            break;
        case 'ArrowDown':
            currIndex += width;
            break;
    }
    squares[currIndex].classList.add('frog');
}
document.addEventListener('keyup', moveFrog);