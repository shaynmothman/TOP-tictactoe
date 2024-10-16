const rows = 3;
const columns = 3;
var board = [];
var round = 0;

function drawBoard() {
    const board = document.querySelector('#gameboard');

    //Clear board
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }

    //Draw board
    function drawGameboard(rowIndex, columnIndex, marker) {
        const tile = document.createElement('div');
        tile.setAttribute('data-rowindex', rowIndex);
        tile.setAttribute('data-columnindex', columnIndex);
        tile.innerText = marker;
        tile.classList.add('tile');
        board.append(tile);

        return {
            tile,
            setMarker(marker) {
                tile.innerText = marker;
            }
        }
    }

    
}

function checkForWins() {
    //Check for tie (all tiles full and no wins)
    //Check row 1
    //Check row 2
    //Check row 3
    //Check column 1
    //Check column 2
    //Check column 3
    //Check left bottom to right top diagonal
    //Check left top to right bottom diagonal
}

function handleBoardClicks() {
    //Handle clicks in board
    const tiles = document.querySelectorAll('#gameboard > div');

    tiles.forEach((tile) => {
        tile.addEventListener('click', (event) => {
            var rowIndex = tile.dataset.rowIndex;
            var columnIndex = tile.dataset.columnIndex;

            if (tile.textContent === "") {
                if (player[0].turn === true) {
                    setMarker(rowIndex, columnIndex, player[0].marker);
                } else if (player[1].turn === true) {
                    setMarker(rowIndex, columnIndex, player[1].marker);
                } else {
                    alert('Game over');
                }
            } else {
                alert('Please select an empty tile');
            }
        });
    });
}

function displayWinner() {
    //Display alert
}

function addPlayer(name) {
    var players = [
        {
            name: "Player 1",
            marker: "X",
            turn: true,
            win: false,
        },
        {
            name: "Player 2",
            marker: "O",
            turn: false,
            win: false,
        }
    ];

    //Get input

    if (players.length > 0) {
        player[0].name = name;

        //Clear input
    } else {
        player[1].name = name;

        //Clear input
    }

    return players;
}