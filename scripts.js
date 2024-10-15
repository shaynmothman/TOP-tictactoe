var gameboard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];
    var round = 0;
    
    function drawBoard() {
        //Draw board to UI
    }

    function placeMarker(event, player) {
        //Add click event handler
        //Update array
        checkForWins();
        drawBoard();
    }

    function checkForWins() {
        //Process array
        displayWinner();
    }

    function displayWinner(player) {
        //Show alert
    }

    function resetGame() {
        board = [];
        drawBoard();
    }
});

var players = (function() {
    var name = "name";
    var marker = "marker";
    var winner = "false";
});