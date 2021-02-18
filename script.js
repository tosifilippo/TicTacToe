const gameBoard = (() => {
    const boardArray = ["","","","","","","","",""];
    const boardGrid = document.createElement("div");
    boardGrid.id =  "board-grid";
    document.body.appendChild(boardGrid);
    const topLeft = document.createElement("button");
    topLeft.innerHTML = boardArray[0];
    const topMiddle = document.createElement("button");
    topMiddle.innerHTML = boardArray[1];
    const topRight = document.createElement("button");
    topRight.innerHTML = boardArray[2];
    const centerLeft = document.createElement("button");
    centerLeft.innerHTML = boardArray[3];
    const centerMiddle = document.createElement("button");
    centerMiddle.innerHTML = boardArray[4];
    const centerRight = document.createElement("button");
    centerRight.innerHTML = boardArray[5];
    const bottomLeft = document.createElement("button");
    bottomLeft.innerHTML = boardArray[6];
    const bottomMiddle = document.createElement("button");
    bottomMiddle.innerHTML = boardArray[7];
    const bottomRight = document.createElement("button");
    bottomRight.innerHTML = boardArray[8];
    boardGrid.append(topLeft, topMiddle, topRight, centerLeft, centerMiddle, centerRight, bottomLeft, bottomMiddle, bottomRight);
    return {
        boardArray, topLeft, topMiddle, topRight, centerLeft, centerMiddle, centerRight, bottomLeft, bottomMiddle, bottomRight
    };
})();

const playerFactory = (mark) => {
    return { mark };
};

const gameController = (() => {
    const playerOne = playerFactory("X");
    const playerTwo = playerFactory("O");
    function setMark(field, index) {
        let counts = {};
        gameBoard.boardArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
        if (((counts.X === undefined) || (counts.X <= counts.O)) && (field.innerHTML === "")) {
            field.innerHTML = playerOne.mark    
            gameBoard.boardArray[index] = "X"
        } else if (field.innerHTML === "") {
            field.innerHTML = playerTwo.mark
            gameBoard.boardArray[index] = "O"
        };
    }
    gameBoard.topLeft.onclick = function(){setMark(this, 0)};
    gameBoard.topMiddle.onclick = function(){setMark(this, 1)};
    gameBoard.topRight.onclick = function(){setMark(this, 2)};
    gameBoard.centerLeft.onclick = function(){setMark(this, 3)};
    gameBoard.centerMiddle.onclick = function(){setMark(this, 4)};
    gameBoard.centerRight.onclick = function(){setMark(this, 5)};
    gameBoard.bottomLeft.onclick = function(){setMark(this, 6)};
    gameBoard.bottomMiddle.onclick = function(){setMark(this, 7)};
    gameBoard.bottomRight.onclick = function(){setMark(this, 8)};
})();