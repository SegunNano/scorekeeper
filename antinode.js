const  p1Button = document.querySelector('#p1Button');
const  p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');
const gameInfo = document.querySelector('#gameInfo')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


p1Button.addEventListener('click', function() {
    if(!isGameOver) {
        addPlus = addition();
        p1Score += addPlus;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p2Button.disabled = true;
            p1Button.disabled = true;
            gameInfo.textContent = `Player 1 wins the Game`
        } else {
            p2Button.disabled = false;
            p1Button.disabled = true;
            gameInfo.textContent = `${addPlus} was added to Player 1 score`
        }
        p1Display.textContent = p1Score;
        ;
    };
});

p2Button.addEventListener('click', function() {
    if(!isGameOver) {
        addPlus = addition();
        p2Score += addPlus;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
            gameInfo.textContent = `Player 2 wins the Game`
        } else {
            p1Button.disabled = false;
            p2Button.disabled = true;
            gameInfo.textContent = `${addPlus} was added to Player 2 score`
        }
        p2Display.textContent = p2Score;
    };
});


winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false; 
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-danger', 'has-text-success');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
function addition() {
    random = Math.random();
    if (random < 0.5) {
        increment = 0
    } else {
        increment = 1
    }
    console.log(increment);
    return increment
}