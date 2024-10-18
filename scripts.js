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
function createTiles() {
    var marker = '';

    return {
        getMarker() {
            return { marker }
        },
        setMarker(player) {
            marker = player.marker;
            return { marker }
        }
    };
}

function createBoard() {
    const rows = 3;
    const columns = 3;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            const tile = createTiles();
            board.push(tile);
        }
    }
}

//Function for drawing game board
//Function for switching rounds
function nextRound() {
    round++;
    drawboard();
}

//Function for starting game
//Function for resetting game
// function resetGame(event) {
//     board = [];
//     players[0].name = 'Player 1';
//     players[1].name = 'Player 2';
//     drawboard();
// }
// document.querySelector('#btn-reset').addEventListener('click', resetGame);

//Function for updating player name
//Function for tracking tile clicks
function placeToken() {
    tiles.forEach((tile) => {
        tile.addEventListener('click', (event) => {
            var arrayTile = board[event.target.dataset.index];

            if (round != 0) {
                if (round % 2) {
                    arrayTile.setMarker(players[1]);
                } else {
                    arrayTile.setMarker(players[0]);
                }
            } else {
                alert('Press the Start button to begin.');
            }
        })
    })
}