const gameBoard = (() => {
    const boardArray = ["X","O","X","O","X","O","X","O","X"];
    const boardGrid = document.createElement("div");
    boardGrid.id =  "board-grid";
    document.body.appendChild(boardGrid);
    const topLeft = document.createElement("div");
    topLeft.innerHTML = boardArray[0];
    const topMiddle = document.createElement("div");
    topMiddle.innerHTML = boardArray[1];
    const topRight = document.createElement("div");
    topRight.innerHTML = boardArray[2];
    const centerLeft = document.createElement("div");
    centerLeft.innerHTML = boardArray[3];
    const centerMiddle = document.createElement("div");
    centerMiddle.innerHTML = boardArray[4];
    const centerRight = document.createElement("div");
    centerRight.innerHTML = boardArray[5];
    const bottomLeft = document.createElement("div");
    bottomLeft.innerHTML = boardArray[6];
    const bottomMiddle = document.createElement("div");
    bottomMiddle.innerHTML = boardArray[7];
    const bottomRight = document.createElement("div");
    bottomRight.innerHTML = boardArray[8];
    boardGrid.append(topLeft, topMiddle, topRight, centerLeft, centerMiddle, centerRight, bottomLeft, bottomMiddle, bottomRight);
})();

const playerFactory = () => {

};  