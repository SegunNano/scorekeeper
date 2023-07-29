const p1 = {
    userName: prompt("What is Player One's Name?"),
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    userName: prompt("What is Player Two's Name?"),
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
p1.button.textContent = p1.userName;
p2.button.textContent = p2.userName
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const gameInfo = document.querySelector('#gameInfo')

let winningScore = 3;
let isGameOver = false;
function updateScore(player, opponent) {
    if(!isGameOver) {
        addPlus = addition();
        player.score += addPlus;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            opponent.button.disabled = true;
            player.button.disabled = true;
            gameInfo.textContent = `${player.userName} wins the Game`
        } else {
            opponent.button.disabled = false;
            player.button.disabled = true;
            gameInfo.textContent = `${addPlus} was added to ${player.userName} score`
        }
        player.display.textContent = player.score;
        ;
    };
}


p1Button.addEventListener('click', function() {
    updateScore(p1, p2)
});

p2Button.addEventListener('click', function() {
    updateScore(p2, p1)
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