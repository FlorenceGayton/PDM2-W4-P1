/** @type {Player} */
let player;

/** @type {Wall[]} */
let walls;

/** @type {Grid} */
let grid;

/** @type {Treasure[]}*/
let treasures;

let playerIsMoving = false;

function setup() {
    createCanvas(400, 400);
    createWalls();
    createTreasure();
    grid = new Grid(50);
    addWallsToGrid();
    addTreasureToGrid();
    player = new Player(0, 0, 30, 30, color(0, 255, 0), 3);
}

function draw() {
    background(255);
    drawWalls();
    drawTreasure();
    player.draw();
    movePlayer()
    // grid._showGrid();
}

function movePlayer() {
    if (keyIsPressed) {
        switch (key.toLowerCase()) {
            case "w":
                player.moveUp();
                break;
            case "a":
                player.moveLeft();
                break;
            case "s":
                player.moveDown();
                break;
            case "d":
                player.moveRight();
                break;
        }
    }
}

/**
 * Create the walls and populate the walls array
 */
function createWalls() {
    walls = [
        new Wall(0, 100, 50, 300),
        new Wall(100, 0, 50, 350),
        new Wall(200, 50, 200, 350),
    ];
}

/**
 * Add the walls to the grid
 */
function addWallsToGrid() {
    for (const wall of walls) {
        grid.addToGrid(wall);
    }
}

/**
 * Draw the walls
 */
function drawWalls() {
    for (const wall of walls) {
        wall.draw();
    }
}



function createTreasure(){
    treasures = [
        new Treasure(350, 0, 50, 50)
    ];
}

/**
 * Add the treasure to the grid
 */
function addTreasureToGrid() {
    for (const treasure of treasures) {
        grid.addToGrid(treasure);
    }
}

/**
 * Draw the treasure
 */
function drawTreasure() {
    for (const treasure of treasures) {
        treasure.draw();
    }
}
