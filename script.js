let gameContainer = document.querySelector(".game-container");
let scoreContainer = document.querySelector(".score-container")
let scoreDisplay = document.querySelector(".score");

let foodX ;
let foodY ;
let headX ;
let headY ;
let velocityX = 0 ;
let velocityY = 0 ;
let score = 0 ;
let lastDirection = "";
let snakeBody = [];





function foodGenerator() {
    foodX = Math.floor(Math.random() * 25) + 1 ;
    foodY = Math.floor(Math.random() * 25) + 1 ;
    console.log(foodX, foodY);
}


function snakeGenerator() {
    headX = Math.floor(Math.random() * 25) + 1 ;
    headY = Math.floor(Math.random() * 25) + 1 ;
    snakeBody = [[headX, headY]];
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

function gameOver() {
    foodGenerator();
    snakeGenerator();
    velocityX = 0 ;
    velocityY = 0 ;
    score = 0 ;
    alert("Game Over! Press OK to restart.");
}

function eat(){
    if(headX === foodX && headY === foodY) {
        snakeBody.push([...snakeBody[snakeBody.length - 1]]);
        score += 50 ;
        let scoring = `Score : ${score}` ;
        scoreDisplay.innerHTML = scoring ;
        foodGenerator();
    }
}




function renderGame() {
    let updateGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"><img src="apple.png"></div>`;
    updateGame += `<div class="head" style="grid-area: ${headY}/${headX};"></div>`;
    headX += velocityX ;
    headY += velocityY ;
    eat();
    snakeBody.pop();
    edgeMap();
    console.log(foodX, foodY);
    snakeBody.unshift([headX, headY]) ;
    for(let i = 1; i < snakeBody.length; i++) {
        updateGame += `<div class="head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }
    
    gameContainer.innerHTML = updateGame;

}

foodGenerator();
snakeGenerator();
setInterval(renderGame, 150);

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    let newDirection = "";
    if(e.key === "ArrowUp" && velocityY != 1) {
        newDirection = "up";
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        newDirection = "down";
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        newDirection = "left";
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        newDirection = "right";
    }

    // Only update if the direction is different
    if(newDirection && newDirection !== lastDirection) {
        e.preventDefault();
        if(newDirection === "up") {
            velocityX = 0;
            velocityY = -1;
        } else if(newDirection === "down") {
            velocityX = 0;
            velocityY = 1;
        } else if(newDirection === "left") {
            velocityX = -1;
            velocityY = 0;
        } else if(newDirection === "right") {
            velocityX = 1;
            velocityY = 0;
        }
        lastDirection = newDirection;
        renderGame();
        console.log(headX, headY);
    }
});