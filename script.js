var score_array = [0, 0];

function resetGame() {
    // Reset scores
    score_array[0] = 0;
    score_array[1] = 0;
    document.querySelector('.score-player p').textContent = '0 - 0';
    const tableBody = document.getElementById('Score').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
}


function add(player, computer, winner) {
    const table = document.getElementById('Score').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const palyercell = newRow.insertCell(0);
    const computercell = newRow.insertCell(1);
    palyercell.textContent = player;
    computercell.textContent = computer;

    if (winner === player) {
        score_array[0]++;
        palyercell.style.color = 'blue';
    } else if (winner === computer) {
        score_array[1]++;
        computercell.style.color = 'blue';
    }
    document.querySelector('.score-player p').textContent = `${score_array[0]} - ${score_array[1]}`;
    if(score_array[0] >= 5 || score_array[1] >=5){
        if(score_array[0] >= 5){
            alert('You won the game');
        }
        else{
            alert('You lost the game');
        }
        resetGame();
        return;
    }
}

function computerInput() {
    const possibleInputs = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * possibleInputs.length);
    return possibleInputs[randomIndex];
}

function playerInput(player) {
    const computer = computerInput();
    let winner;
    if (player === 'Rock') {
        if (computer === 'Rock') {
            winner = 'tie';
        } else if (computer === 'Paper') {
            winner = computer;
        } else {
            winner = player;
        }
    } else if (player === 'Paper') {
        if (computer === 'Rock') {
            winner = player;
        } else if (computer === 'Paper') {
            winner = 'tie';
        } else {
            winner = computer;
        }
    } else {
        if (computer === 'Rock') {
            winner = computer;
        } else if (computer === 'Paper') {
            winner = player;
        } else {
            winner = 'tie';
        }
    }
    add(player, computer, winner);
}