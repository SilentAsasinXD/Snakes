let gameContainer = document.querySelector(".game-container");
let scoreContainer = document.querySelector(".score-container")
let scoreDisplay = document.querySelector(".score");

let foodX ;
let foodY ;

function foodGenerator() {
    foodX = Math.floor(Math.random() * 25) + 1 ;
    foodY = Math.floor(Math.random() * 25) + 1 ;
    console.log(foodX, foodY);
}
function renderGame() {
    console.log(foodX, foodY);
    let updateGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"><img src="apple.png"></div>`;
    gameContainer.innerHTML = updateGame;
}

foodGenerator();
renderGame();
