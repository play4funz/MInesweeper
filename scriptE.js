// display file

import {
    TILE_STATUSES,
    createBoard,
    markTile,
    revealTile,
    checkWin,
    checkLose,
} from "./main.js";

// setting of board size and number of mines and const
const BOARD_SIZE = 8;
const NUMBER_OF_MINES = 5;
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector(".board");
const minesLeftText = document.querySelector("[data-mine-count]");
const messageText = document.querySelector(".subtext");
const restartButton = document.querySelector(".restart-button");

// setting the board and clicks functions
board.forEach(row => {
  row.forEach(tile => {
    boardElement.append(tile.element)
    
    //left click function reveals
    tile.element.addEventListener("click", () => {
      revealTile(board, tile);
      checkGameEnd();
    }); 
        
        //right click function mark
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

// calculates the number of mines left to be marked and updates the count display
function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
    }, 0);

    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount;
}

// checks for win/lose conditions
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

// prevent the game from continuing when game ends
function stopProp(e) {
    e.stopImmediatePropagation();
}

// Function to restart the game by generating now game board and removes te old tiles and update the display
function restartGame() {
    const newBoard = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
    board.forEach(row => {
        row.forEach(tile => {
            tile.element.remove();
        });
    });
    board.length = 0;
    board.push(...newBoard);
    messageText.textContent = ".subtext";
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