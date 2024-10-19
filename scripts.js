//Global variables 
const rows = 3;
const columns = 3;
var won = false;
var round = 0;
var board = [];
var winner;
var players = [
    {
        name: 'Player 1',
        marker: 'X',
    },
    {
        name: 'Player 2',
        marker: 'O',
    }
]

const gameboard = document.querySelector('#gameboard');
const buttonStart = document.querySelector('#btn-start');
const inputName = document.querySelector('#input-name');
const buttonSave = document.querySelector('#btn-save');
const tiles = document.querySelectorAll('#gameboard > div');

//Factory function for populating array of tile objects
function createTiles(row, column) {
    var marker = '';

    return {
        row,
        column,
    };
}

function getMarker(row, column) { 
    return board.find((tile) => tile.row == row && tile.column == column).marker;
 }


function setMarker(row, column, playerMarker) { 
    var target = board.find((tile) => tile.row == row && tile.column == column);
    target.marker = playerMarker;
    return target.marker;
}

function createBoard() {

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            const tile = createTiles(i, j);
            board.push(tile);
        }
    }
}

//Function for drawing game board
function drawboard() {
    return board;
}

//Function for switching rounds
function nextRound() {
    round++;

    drawboard();
}

//Function for starting game
function newGame() {
    createBoard();
    nextRound();
    inputName.setAttribute('visibility', 'hidden');
    buttonSave.setAttribute('visibility', 'hidden');
}
document.querySelector('#btn-start').addEventListener('click', newGame);

//Function for resetting game
function resetGame() {
    board = [];
    round = 0;
    won = false;
    buttonStart.disabled = false;
    buttonSave.disabled = false;
    createBoard();
    drawboard();
}
document.querySelector('#btn-reset').addEventListener('click', resetGame);

//Function for updating player name
function updateName(name, index) {
    players[index].name = name;
}

//Function for tracking tile clicks
function getPlayerTurn() {
    var turn;

    if (round != 0) {
        if (round % 2) {
            turn = players[0].marker;
        } else {
            turn = players[1].marker;
        }
    } else {
        alert('Press the Start button to begin');
    }

    return turn;
}

function placeToken() {
    tiles.forEach((tile) => {
        tile.addEventListener('click', (event) => {
            var arrayTile = board[event.target.dataset.index];

            if (won = false) {
                if (arrayTile.marker == undefined) {
                    arrayTile.setMarker(getPlayerTurn());
                } else {
                    alert('Please select an empty space');
                }
            } else {
                //Do nothing
            }
        })
    })
    drawboard();
    checkForWins();
    //Disable clicking
}

function displayWinner(playerMarker) {
    if (playerMarker == players[0].marker) {
        alert(`${players[0].name} is the winner!`);
    } else if (playerMarker == players[1].marker) {
        alert(`${players[1].name} is the winner!`);
    }
}

//Check for wins
function checkForWins() {
    if (checkLinear()) {
        won = true;
        return checkLinear();
    } else if (checkDiagonal()) {
        won = true;
        return checkDiagonal();
    } else {
        nextRound();
    }
}

function checkLinear() {
    for (let i = 0; i < 3; i++) {
        if (getMarker(i, 0) == getMarker(i, 1) && getMarker(i, 1) == getMarker(i, 2) && getMarker(i, 0) !== undefined) {
            return getMarker(i, 0);
        } else if (getMarker(0, i) == getMarker(1, i) && getMarker(1, i) == getMarker(2, i) && getMarker(0, i) !== undefined) {
            return getMarker(0, i);
        } else {
            return false;
        }
    }
}

function checkDiagonal() {
    if (
        getMarker(0, 0) == getMarker(1, 1) && getMarker(1, 1) == getMarker(2, 2) && getMarker(0, 0) !== undefined
        || getMarker(0, 2) == getMarker(1, 1) && getMarker(1, 1) == getMarker(2, 0) && getMarker(0, 2) !== undefined
    ) {
        return getMarker(1, 1);
    } else {
        return false;
    }
}