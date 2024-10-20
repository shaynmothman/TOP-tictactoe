function Game(targetDiv) {
    const rows = 3;
    const columns = rows;
    var won = false;
    var round = 0;
    var board = [];
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

    const buttonStart = document.querySelector('#btn-start');
    const dialogPlayers = document.querySelector('#dialog-players');

    const createTiles = (row, column) => {
        var marker = '';
        return { row, column };
    }

    const getMarker = (row, column) => { 
        return board.find((item) => item.row == row && item.column == column).marker;
    }

    const setMarker = (row, column, playerMarker) => { 
        var target = board.find((item) => item.row == row && item.column == column);
        target.marker = playerMarker;
        return target.marker;
    }

    const createBoard = () => {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                const tile = createTiles(i, j);
                board.push(tile);
            }
        }
    }

    const drawboard = () => {
        const gameboard = document.querySelector(targetDiv);

        while (gameboard.firstChild) { gameboard.removeChild(gameboard.lastChild); }

        for (var i = 0; i < board.length; i++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.setAttribute('data-index', i);
            tile.textContent = board[i].marker;
            gameboard.append(tile);
        }
    }

    const nextRound = () => {
        round++;
        drawboard();
    }

    const newGame = () => {
        createBoard();
        nextRound();
        document.getElementById('form-players').reset();
        dialogPlayers.showModal();
        document.querySelector('#btn-start').disabled = true;
    }
    document.querySelector('#btn-start').addEventListener('click', newGame);

    const resetGame = () => {
        board = [];
        round = 0;
        won = false;
        document.querySelector('#btn-start').disabled = false;
        document.querySelector('#btn-reset').disabled = true;
    }
    document.querySelector('#btn-reset').addEventListener('click', resetGame);

    const updateInfo = (name, marker, index) => {
        players[index].name = name;
        players[index].marker = marker;
    }
    document.querySelector('#btn-save').addEventListener('click', updateInfo);

    const getPlayerTurn = () => {
        if (round != 0) {
            if (round % 2) {
                return players[0].marker;
            } else {
                return players[1].marker;
            }
        } else {
            alert('Press the Start button to begin');
        }
    }

    const tiles = document.querySelectorAll('#gameboard > div');
    tiles.forEach((tile) => {
        tile.addEventListener('click', (event) => {
            var arrayTile = board[event.target.dataset.index];

            if (won = false) {
                if (arrayTile.marker == undefined) {
                    arrayTile.setMarker(getPlayerTurn());
                    drawboard();
                    checkForWins();
                } else {
                    alert('Please select an empty space');
                }
            } else {
                //Do nothing
            }
        })
    });

    const displayWinner = (playerMarker) => {
        if (playerMarker == players[0].marker) {
            alert(`${players[0].name} is the winner!`);
        } else if (playerMarker == players[1].marker) {
            alert(`${players[1].name} is the winner!`);
        }
    }

    const checkForWins = () => {
        if (checkLinear()) {
            won = true;
            displayWinner(checkLinear());
        } else if (checkDiagonal()) {
            won = true;
            displayWinner(checkDiagonal());
        } else {
            nextRound();
        }
    }

    const checkLinear = () => {
        for (let i = 0; i < rows; i++) {
            if (getMarker(i, 0) == getMarker(i, 1) && getMarker(i, 1) == getMarker(i, 2) && getMarker(i, 0) !== undefined) {
                return getMarker(i, 0);
            } else if (getMarker(0, i) == getMarker(1, i) && getMarker(1, i) == getMarker(2, i) && getMarker(0, i) !== undefined) {
                return getMarker(0, i);
            } else {
                return false;
            }
        }
    }

    const checkDiagonal = () => {
        if (
            getMarker(0, 0) == getMarker(1, 1) && getMarker(1, 1) == getMarker(2, 2) && getMarker(0, 0) !== undefined
            || getMarker(0, 2) == getMarker(1, 1) && getMarker(1, 1) == getMarker(2, 0) && getMarker(0, 2) !== undefined
        ) {
            return getMarker(1, 1);
        } else {
            return false;
        }
    }
}

const theGame = Game('#gameboard');