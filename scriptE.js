// display UI file

import {
    TILE_STATUSES,
    createBoard,
    markTile,
    revealTile,
    checkWin,
    checkLose,
} from "./main.js";

// setting of board size and number of mines 
const BOARD_SIZE = 8;
const NUMBER_OF_MINES = 5;

// displays & selector
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector(".board");
const minesLeftText = document.querySelector("[data-mine-count]");
const messageText = document.querySelector(".subtext");

// setting the board
board.forEach(row => {
  row.forEach(tile => {
    boardElement.append(tile.element)
    //left click function
    tile.element.addEventListener("click", () => {
      revealTile(board, tile);
      checkGameEnd();
    }); //right click function
        tile.element.addEventListener("contextmenu", e => {
            e.preventDefault();
            markTile(tile);
            listMinesLeft();
        });
    });
});
// listing the mines left counter
boardElement.style.setProperty("--size", BOARD_SIZE);
minesLeftText.textContent = NUMBER_OF_MINES;

function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
    }, 0);

    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount;
}
// displaying win/lose condition
function checkGameEnd() {
    const win = checkWin(board);
    const lose = checkLose(board);
    // stop the game when win or lose is achieved
    if (win || lose) {
        boardElement.addEventListener("click", stopProp, { capture: true });
        boardElement.addEventListener("contextmenu", stopProp, { capture: true });
    }
// display win/lose
if (win) {
    messageText.textContent = "You Win";
}
// if lose reveal the tiles with mines 
if (lose) {
    messageText.textContent = "You Lose";
    board.forEach(row => {
        row.forEach(tile => {
            // remove marked tiles
            if (tile.status === TILE_STATUSES.MARKED) markTile(tile)
            if (tile.mine) revealTile(board, tile);
        });
    });
        
    }
}
// prevent the game from continuing
function stopProp(e) {
    e.stopImmediatePropagation();
}

const restartButton = document.querySelector(".restart-button");

// Function to restart the game
function restartGame() {
    const newBoard = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
    board.forEach(row => {
        row.forEach(tile => {
            tile.element.remove();
        });
    });
    board.length = 0;
    board.push(...newBoard);
    messageText.textContent = "";
    minesLeftText.textContent = NUMBER_OF_MINES;

    board.forEach(row => {
        row.forEach(tile => {
            boardElement.append(tile.element);
            tile.element.addEventListener("click", () => {
                revealTile(board, tile);
                checkGameEnd();
            });
            tile.element.addEventListener("contextmenu", e => {
                e.preventDefault();
                markTile(tile);
                listMinesLeft();
            });
        });
    });
}

restartButton.addEventListener("click", restartGame);
