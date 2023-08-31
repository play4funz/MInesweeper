// game Logic file
// having these linked with css data status
export const TILE_STATUSES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked',
}
// board creation and how many mines 
export function createBoard(boardSize, numberOfMines) {
    const board = [];
    const minePositions = getMinePositions(boardSize, numberOfMines);

    for (let x = 0; x < boardSize; x++) {
        const row = [];
        for (let y = 0; y < boardSize; y++) {
            const element = document.createElement('div');
            //default status of tiles are hidden
            element.dataset.status = TILE_STATUSES.HIDDEN;
            
            const tile = {
                element,
                x,
                y,
                //set mine position
                mine: minePositions.some(positionMatch.bind(null, {x, y})),
                get status() {
                    return element.dataset.status;
                },
                set status(value) {
                    this.element.dataset.status = value;
                }
            };
            row.push(tile);
        }
        board.push(row);
    }
    return board;
}
// checking the tiles is marked or hidden 
export function markTile(tile) {
    if (
        tile.status !== TILE_STATUSES.HIDDEN && 
        tile.status !== TILE_STATUSES.MARKED
    ) {
        return;
    }
    //setting tile status as marked or removing marked 
    if (tile.status === TILE_STATUSES.MARKED) {
        tile.status = TILE_STATUSES.HIDDEN;
    } else {
        tile.status = TILE_STATUSES.MARKED;
    }
}
// revealing of tiles
export function revealTile(board, tile) {
    if (tile.status !== TILE_STATUSES.HIDDEN) {
        return;
    }
    // check if the tile have mine
    if (tile.mine) {
        tile.status = TILE_STATUSES.MINE;
        return;
    }
    // revealing the number of mines nearby
    tile.status = TILE_STATUSES.NUMBER;
    const adjacentTiles = nearbyTiles(board, tile);
    const mines =  adjacentTiles.filter(t => t.mine);
    // revealing the surrounding tiles till it hit a number
    if (mines.length === 0) {
        adjacentTiles.forEach(revealTile.bind(null, board))
    } else {
        tile.element.textContent = mines.length;
    }
}

// win/lose condition checks
export function checkWin(board) {
    return board.every(row => {
        return row.every(tile => {
            return tile.status === TILE_STATUSES.NUMBER || (tile.mine && (tile.status === TILE_STATUSES.HIDDEN || tile.status === TILE_STATUSES.MARKED))
        })
    })
}
// function for if a single mine is revealed the game lose 
export function checkLose(board) {
    return board.some(row => {
        return row.some(tile => {
            return tile.status === TILE_STATUSES.MINE
        })
    });
}
// randomise the position of mines
function getMinePositions(boardSize, numberOfMines) {
    const positions = [];

    while (positions.length < numberOfMines) {
        const position = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize),
        }
        //prevents same position with mines generated
        if (!positions.some(positionMatch.bind(null, position))) {
            positions.push(position);
        }
    }

    return positions;
}
// check if position are the same
function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y
}

function randomNumber(size) {
    return Math.floor(Math.random() * size);
}
// revealing nearby tiles without any mines nearby
function nearbyTiles(board, { x, y }) {
    const tiles = [];
    // prevent errors at the corner of the board
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile = board[x + xOffset]?.[y + yOffset] 
            if (tile) tiles.push(tile)
        }
    }

    return tiles;
}