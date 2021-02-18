// player factory
const playerFactory = (mark, name) => {
    return { mark, name };
};

// game board module
const gameBoard = (() => {
    // setting the board as an array with nine strings
    let boardArray = ["","","","","","","","",""];
    // creating player X and player O
    const playerOne = playerFactory("X");
    const playerTwo = playerFactory("O");
    let gameOver;
    let tieGame;
    // looks for winning combination in rows
    function checkRows() {
        if ((boardArray[0] == boardArray[1]) && (boardArray[1] == boardArray[2]) && (!boardArray[0] == "") ||
        (boardArray[3] == boardArray[4]) && (boardArray[4] == boardArray[5]) && (!boardArray[3] == "") ||
        (boardArray[6] == boardArray[7]) && (boardArray[7] == boardArray[8]) && (!boardArray[6] == "")) {
            gameOver = true;
        };
    };
    // looks for winning combination in columns
    function checkColumns() {
        if ((boardArray[0] == boardArray[3]) && (boardArray[3] == boardArray[6]) && (!boardArray[0] == "") ||
        (boardArray[1] == boardArray[4]) && (boardArray[4] == boardArray[7]) && (!boardArray[1] == "") ||
        (boardArray[2] == boardArray[5]) && (boardArray[5] == boardArray[8]) && (!boardArray[2] == "")) {
            gameOver = true;
        };
    };
    // looks for winning combination in diagonals
    function checkDiagonals() {
        if ((boardArray[0] == boardArray[4]) && (boardArray[4] == boardArray[8]) && (!boardArray[0] == "") ||
        (boardArray[2] == boardArray[4]) && (boardArray[4] == boardArray[6]) && (!boardArray[2] == "")) {
            gameOver = true;
        };
    };
    // looks for tie
    function checkTie() {
        if ((!gameOver == true) && (!boardArray.includes(""))) {
            tieGame = true;
        };
    };
    // counts how many Xs and Os are on the board and determines whose turn it is. 
    // it also looks for winner, does not run unless clicked field is empty.
    function setMark(field, index) {
        let counts = {};
        boardArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
        if (((counts.X === undefined) || (counts.X <= counts.O)) && (field.innerHTML === "")) {
            field.innerHTML = playerOne.mark    
            boardArray[index] = "X"
        } else if (field.innerHTML === "") {
            field.innerHTML = playerTwo.mark
            boardArray[index] = "O"
        };
        function declareWinner() {
            const display = document.getElementById("display");
            checkRows();
            checkColumns();
            checkDiagonals();
            checkTie();
            // checks who won and disables field buttons
            if ((gameOver == true) && (counts.X <= counts.O)) {
                display.innerHTML = "GAME OVER, X WINS!";
                document.querySelectorAll('button.field-button').forEach(element => {
                    element.disabled = true;
                });
            } else if ((gameOver == true) && (counts.X > counts.O)) {
                display.innerHTML = "GAME OVER, O WINS!";
                document.querySelectorAll('button.field-button').forEach(element => {
                    element.disabled = true;
                });
            };
            // if game is tie field buttons are disabled
            if (tieGame == true) {
                display.innerHTML = "TIE GAME!"
                document.querySelectorAll('button.field-button').forEach(element => {
                    element.disabled = true;
                });
            };
        };
        declareWinner();
    };
    // resets board html and array
    function reset() {
        boardArray = ["","","","","","","","",""];
        document.querySelectorAll('button.field-button').forEach(element => {
            element.innerHTML = "";
        });
    };
    // targeting elements
    const topLeft = document.getElementById("top-left");
    const topMiddle = document.getElementById("top-middle");
    const topRight = document.getElementById("top-right");
    const centerLeft = document.getElementById("center-left");
    const centerMiddle = document.getElementById("center-middle");
    const centerRight = document.getElementById("center-right");
    const bottomLeft = document.getElementById("bottom-left");
    const bottomMiddle = document.getElementById("bottom-middle");
    const bottomRight = document.getElementById("bottom-right");
    const restart = document.getElementById("restart")
    // onclick functions
    topLeft.onclick = function(){setMark(this, 0)};
    topMiddle.onclick = function(){setMark(this, 1)};
    topRight.onclick = function(){setMark(this, 2)};
    centerLeft.onclick = function(){setMark(this, 3)};
    centerMiddle.onclick = function(){setMark(this, 4)};
    centerRight.onclick = function(){setMark(this, 5)};
    bottomLeft.onclick = function(){setMark(this, 6)};
    bottomMiddle.onclick = function(){setMark(this, 7)};
    bottomRight.onclick = function(){setMark(this, 8)};
    restart.onclick = reset;
})();