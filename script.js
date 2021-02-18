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
    let counts = {};
    gameBoard.boardArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    const playerOne = playerFactory("X");
    const playerTwo = playerFactory("O");
    function setMark(field) {
        if ((counts.X === undefined) || (counts.X <= counts.O)) {
            field.innerHTML = playerOne.mark
        } else {
            field.innerHTML = playerTwo.mark
        };
    }
    gameBoard.topLeft.onclick = function(){setMark(this)};
    gameBoard.topMiddle.onclick = function(){setMark(this)};
    gameBoard.topRight.onclick = function(){setMark(this)};
    gameBoard.centerLeft.onclick = function(){setMark(this)};
    gameBoard.centerMiddle.onclick = function(){setMark(this)};
    gameBoard.centerRight.onclick = function(){setMark(this)};
    gameBoard.bottomLeft.onclick = function(){setMark(this)};
    gameBoard.bottomMiddle.onclick = function(){setMark(this)};
    gameBoard.bottomRight.onclick = function(){setMark(this)};
})();