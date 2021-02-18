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
        topLeft, topMiddle, topRight, centerLeft, centerMiddle, centerRight, bottomLeft, bottomMiddle, bottomRight
    };
})();

const playerFactory = (mark) => {
    return { mark };
};

const gameController = (() => {
    const playerOne = playerFactory("X");
    const playerTwo = playerFactory("O");
    gameBoard.topLeft.onclick = function(){this.innerHTML = playerOne.mark};
    gameBoard.topMiddle.onclick = function(){this.innerHTML = playerOne.mark};
    gameBoard.topRight.onclick = function(){this.innerHTML = playerOne.mark};
    gameBoard.centerLeft.onclick = function(){this.innerHTML = playerOne.mark};;
    gameBoard.centerMiddle.onclick = function(){this.innerHTML = playerOne.mark};;
    gameBoard.centerRight.onclick = function(){this.innerHTML = playerOne.mark};;
    gameBoard.bottomLeft.onclick = function(){this.innerHTML = playerOne.mark};;
    gameBoard.bottomMiddle.onclick = function(){this.innerHTML = playerOne.mark};;
    gameBoard.bottomRight.onclick = function(){this.innerHTML = playerOne.mark};;
})();