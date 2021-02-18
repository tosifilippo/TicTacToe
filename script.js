// player factory
const playerFactory = (mark) => {
    return { mark };
};

// game board module
const gameBoard = (() => {
    // setting the board as an array with nine strings
    const boardArray = ["","","","","","","","",""];
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
        checkRows();
        checkColumns();
        checkDiagonals();
        checkTie();
        // if game is over field buttons are disabled
        if (gameOver == true) {
            console.log("GAME OVER");
            document.querySelectorAll('button.field-button').forEach(element => {
                element.disabled = true;
            });
        };
        // if game is tie field buttons are disabled
        if (tieGame == true) {
            console.log("TIE GAME");
            document.querySelectorAll('button.field-button').forEach(element => {
                element.disabled = true;
            });
        }
    };
    // set mark is returned to be used onclick
    return { setMark };
})();

const gameController = (() => {
    // creating a grid for the board
    const boardGrid = document.createElement("div");
    boardGrid.id =  "board-grid";
    document.body.appendChild(boardGrid);
    // creating the nine fields on the grid
    const topLeft = document.createElement("button");
    topLeft.classList.add("field-button");
    const topMiddle = document.createElement("button");
    topMiddle.classList.add("field-button");
    const topRight = document.createElement("button");
    topRight.classList.add("field-button");
    const centerLeft = document.createElement("button");
    centerLeft.classList.add("field-button");
    const centerMiddle = document.createElement("button");
    centerMiddle.classList.add("field-button");
    const centerRight = document.createElement("button");
    centerRight.classList.add("field-button");
    const bottomLeft = document.createElement("button");
    bottomLeft.classList.add("field-button");
    const bottomMiddle = document.createElement("button");
    bottomMiddle.classList.add("field-button");
    const bottomRight = document.createElement("button");
    bottomRight.classList.add("field-button");
    boardGrid.append(topLeft, topMiddle, topRight, centerLeft, centerMiddle, centerRight, bottomLeft, bottomMiddle, bottomRight);
    // all fields call set mark on click
    topLeft.onclick = function(){gameBoard.setMark(this, 0)};
    topMiddle.onclick = function(){gameBoard.setMark(this, 1)};
    topRight.onclick = function(){gameBoard.setMark(this, 2)};
    centerLeft.onclick = function(){gameBoard.setMark(this, 3)};
    centerMiddle.onclick = function(){gameBoard.setMark(this, 4)};
    centerRight.onclick = function(){gameBoard.setMark(this, 5)};
    bottomLeft.onclick = function(){gameBoard.setMark(this, 6)};
    bottomMiddle.onclick = function(){gameBoard.setMark(this, 7)};
    bottomRight.onclick = function(){gameBoard.setMark(this, 8)};
})();