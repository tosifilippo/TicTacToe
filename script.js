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
    // counts how many Xs and Os are on the board and determines whose turn it is. 
    // Does not run unless clicked field is empty.
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
    const topMiddle = document.createElement("button");
    const topRight = document.createElement("button");
    const centerLeft = document.createElement("button");
    const centerMiddle = document.createElement("button");
    const centerRight = document.createElement("button");
    const bottomLeft = document.createElement("button");
    const bottomMiddle = document.createElement("button");
    const bottomRight = document.createElement("button");
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