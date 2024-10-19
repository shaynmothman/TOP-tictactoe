//Global variables 
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


function setMarker(row, column, player) { 
    var target = board.find((tile) => tile.row == row && tile.column == column);
    target.marker = player.marker;
    return target.marker;
}

function createBoard() {
    const rows = 3;
    const columns = 3;

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
    return round;
}

//Function for starting game
function newGame() {
    createBoard();
    nextRound();
    inputName.setAttribute('visibility', 'hidden');
    buttonSave.setAttribute('visibility', 'hidden');
    return round;
}
document.querySelector('#btn-start').addEventListener('click', newGame);

//Function for resetting game
function resetGame() {
    board = [];
    round = 0;
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
            turn = players[0];
        } else {
            turn = players[1];
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

            if (arrayTile.marker.length == 0) {
                arrayTile.setMarker(getPlayerTurn());
            } else {
                alert('Please select an empty space');
            }
        })
    })
    nextRound();
}

//Check for wins
function checkForWins() {


    //Check linear
    
    checkDiagonal();  
}

function checkDiagonal() {
    if (
        getMarker(0, 0) == getMarker(1, 1) && getMarker(1, 1) == getMarker(2, 2)
        || getMarker(0, 2) == getMarker(1, 1) && getMarker(1, 1) == getMarker(2, 0)
    ) {
        if (getMarker(1, 1) !== undefined) {
            return getMarker(1, 1);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function filterMatches(item) {
    if (item.marker !== '') {
        return true;

    } else {
        return false;
    }
}