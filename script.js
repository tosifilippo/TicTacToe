// player factory
const playerFactory = (mark, name, species) => {
    return { mark, name, species };
};

// game board module
const gameBoard = (() => {
    // setting the board as an array with nine strings
    let boardArray = ["","","","","","","","",""];
    // creating player X and player O
    const playerOne = playerFactory("X", "PLAYER ONE", "HUMAN");
    const playerTwo = playerFactory("O", "PLAYER TWO", "HUMAN");
    let gameOver;
    let tieGame;
    // looks for winning combinations in rows
    function checkRows() {
        if (((boardArray[0] == boardArray[1]) && (boardArray[1] == boardArray[2]) && (!boardArray[0] == "") && (boardArray[0] == "X")) ||
        ((boardArray[3] == boardArray[4]) && (boardArray[4] == boardArray[5]) && (!boardArray[3] == "") && (boardArray[3] == "X"))||
        ((boardArray[6] == boardArray[7]) && (boardArray[7] == boardArray[8]) && (!boardArray[6] == "") && (boardArray[6] == "X"))) {
            gameOver = "X";
        };
        if ((boardArray[0] == boardArray[1]) && (boardArray[1] == boardArray[2]) && (!boardArray[0] == "") && (boardArray[0] == "O") ||
        (boardArray[3] == boardArray[4]) && (boardArray[4] == boardArray[5]) && (!boardArray[3] == "") && (boardArray[3] == "O") ||
        (boardArray[6] == boardArray[7]) && (boardArray[7] == boardArray[8]) && (!boardArray[6] == "") && (boardArray[6] == "O")) {
            gameOver = "O";
        };
    };
    // looks for winning combinations in columns
    function checkColumns() {
        if ((boardArray[0] == boardArray[3]) && (boardArray[3] == boardArray[6]) && (!boardArray[0] == "") && (boardArray[0] == "X")||
        (boardArray[1] == boardArray[4]) && (boardArray[4] == boardArray[7]) && (!boardArray[1] == "") && (boardArray[1] == "X") ||
        (boardArray[2] == boardArray[5]) && (boardArray[5] == boardArray[8]) && (!boardArray[2] == "") && (boardArray[2] == "X")) {
            gameOver = "X";
        };
        if ((boardArray[0] == boardArray[3]) && (boardArray[3] == boardArray[6]) && (!boardArray[0] == "") && (boardArray[0] == "O")||
        (boardArray[1] == boardArray[4]) && (boardArray[4] == boardArray[7]) && (!boardArray[1] == "") && (boardArray[1] == "O")||
        (boardArray[2] == boardArray[5]) && (boardArray[5] == boardArray[8]) && (!boardArray[2] == "") && (boardArray[2] == "O")) {
            gameOver = "O";
        };
    };
    // looks for winning combinations in diagonals
    function checkDiagonals() {
        if ((boardArray[0] == boardArray[4]) && (boardArray[4] == boardArray[8]) && (!boardArray[0] == "") && (boardArray[0] == "X") ||
        (boardArray[2] == boardArray[4]) && (boardArray[4] == boardArray[6]) && (!boardArray[2] == "") && (boardArray[2] == "X")) {
            gameOver = "X";
        };
        if ((boardArray[0] == boardArray[4]) && (boardArray[4] == boardArray[8]) && (!boardArray[0] == "") && (boardArray[0] == "O") ||
        (boardArray[2] == boardArray[4]) && (boardArray[4] == boardArray[6]) && (!boardArray[2] == "") && (boardArray[2] == "O")) {
            gameOver = "O";
        };
    };
    // looks for tie
    function checkTie() {
        if ((gameOver == undefined) && (!boardArray.includes(""))) {
            tieGame = true;
        };
    };
    function setMark(field, index) {
        // counts how many Xs and Os are on the board 
        let counts = {};
        boardArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
        // for human players, determines turn depending on the number of Xs and Os and sets mark (cell must be empty)
        if (playerTwo.species == "HUMAN") {
            if (((counts.X === undefined) || (counts.X <= counts.O)) && (field.innerHTML === "")) {
                field.innerHTML = playerOne.mark;
                boardArray[index] = playerOne.mark;
            } else if (field.innerHTML === "") {
                field.innerHTML = playerTwo.mark;
                boardArray[index] = playerTwo.mark;
            };
        // for AI player an array for all cells is created, first player mark is set (cell must be empty), a random 
        // number is selected (from 0 to 8). If random cell is empty, second player mark is set, otherwise, new random
        // is selected until empty cell is found (unless game is over).
        } else if (field.innerHTML === "") {
            let cellsArray = [topLeft, topMiddle, topRight, centerLeft, centerMiddle, centerRight, bottomLeft, bottomMiddle, bottomRight];
            field.innerHTML = playerOne.mark;
            boardArray[index] = "X";
            function randomPlay() {
            let random = Math.floor(Math.random() * cellsArray.length);
            declareWinner();
            if ((cellsArray[random].innerHTML == "") && (gameOver == undefined)) {
                cellsArray[random].innerHTML = playerTwo.mark;
                boardArray[random] = playerTwo.mark;
            } else if (!boardArray.includes("")) {
                declareWinner();
            } else if (gameOver == undefined) {
                randomPlay();
            };
            };
            randomPlay();
        };
        function declareWinner() {
            const display = document.getElementById("display");
            checkRows();
            checkColumns();
            checkDiagonals();
            checkTie();
            // checks who won and disables field buttons
            if (gameOver == "X") {
                display.innerHTML = "GAME OVER, " + playerOne.name + " WINS!";
                document.querySelectorAll('button.field-button').forEach(element => {
                    element.disabled = true;
                });
            } else if (gameOver == "O") {
                display.innerHTML = "GAME OVER, " + playerTwo.name + " WINS!";
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
    // resets board html, array and game status
    function reset() {
        boardArray = ["","","","","","","","",""];
        document.querySelectorAll('button.field-button').forEach(element => {
            element.innerHTML = "";
            element.disabled = false;
            gameOver = undefined;
            tieGame = undefined;
        });
    };
    // gets player names and species from input field
    function getNames() {
        playerOne.name = firstText.value.toUpperCase();
        playerTwo.name = secondText.value.toUpperCase();
        if (playerOne.name == "") {
            playerOne.name = "PLAYER ONE"
        };
        if (playerTwo.name == "") {
            playerTwo.name = "PLAYER TWO"
        };
        if (form[3].checked) {
            playerTwo.species = "AI"
        } else {
            playerTwo.species = "HUMAN"
        };
        // updates match details
        display.innerHTML = playerOne.name + " (" + playerOne.species + ") vs " + playerTwo.name + " (" + playerTwo.species + ")";
    }
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
    const restart = document.getElementById("restart");
    const firstText = document.getElementById("player1name");
    const secondText = document.getElementById("player2name");
    const submit = document.getElementById("submit");
    const form = document.getElementById("form");
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
    submit.onclick = getNames;
})();