let gameContainer = document.querySelector(".game-container");
let scoreContainer = document.querySelector(".score-container")
let scoreDisplay = document.querySelector(".score");

let foodX ;
let foodY ;
let headX ;
let headY ;
let velocityX = 0 ;
let velocityY = 0 ;

function foodGenerator() {
    foodX = Math.floor(Math.random() * 25) + 1 ;
    foodY = Math.floor(Math.random() * 25) + 1 ;
    console.log(foodX, foodY);
}

function snakeGenerator() {
    headX = Math.floor(Math.random() * 25) + 1 ;
    headY = Math.floor(Math.random() * 25) + 1 ;
    console.log(headX, headY);
}

function edgeMap() {
    if(headX < 1) {
        headX = 25 ;
    } else if(headX > 25) {
        headX = 1 ;
    }
    if(headY < 1) {
        headY = 25 ;
    } else if(headY > 25) {
        headY = 1 ;
    }
}



function renderGame() {
    headX += velocityX ;
    headY += velocityY ;
    edgeMap();
    console.log(foodX, foodY);
    let updateGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"><img src="apple.png"></div>`;
    updateGame += `<div class="head" style="grid-area: ${headY}/${headX};"></div>`;
    gameContainer.innerHTML = updateGame;
}

foodGenerator();
snakeGenerator();
setInterval(renderGame, 190);

document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowUp") {
        velocityX = 0 ;
        velocityY = -1 ;
    } else if(e.key === "ArrowDown") {
        velocityX = 0 ;
        velocityY = 1 ;
    } else if(e.key === "ArrowLeft") {
        velocityX = -1 ;
        velocityY = 0 ;
    } else if(e.key === "ArrowRight") {
        velocityX = 1 ;
        velocityY = 0 ;
    }
    renderGame();
    console.log(headX, headY);
});