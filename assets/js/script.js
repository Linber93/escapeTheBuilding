//wait for dom to finish loading before runnning the game.
//add game area and buttons with event listeners

let game = {
    /* level layout */
    layout: [
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 0]
    ],
    newPositionX: 0,
    newPositionY: 0,
    leaderboard: [],
    startTime: null,
    stopTime: null
}

document.addEventListener("DOMContentLoaded", loadGame)
/** 
 * creates game grid
 **/ 
function loadGame() {
    
        let building = document.querySelector('.game-building');
        let width = 28;

        let gameSquares = [];

        
        for (let i = 0; i < game.layout.length; i++) {
            gameSquares[i] = [];
            for(let j = 0; j < game.layout[i].length; j++) {
                let location = document.createElement('div');
                location.dataset.x = i
                location.dataset.y = j
                building.appendChild(location);
                gameSquares[i][j] = location;

                //add layout to the board
                if (game.layout[i][j] === 1) {
                    gameSquares[i][j].classList.add('wall');
                }
                if (game.layout[i][j] === 0) {
                    gameSquares[i][j].classList.add('corridor');
                }
            }
        }
    //get the button elements and add event listeners. 
    let buttons = document.getElementsByClassName('menu')

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "start-game"){
                countDown();
            } else if (this.getAttribute("data-type") === "leaderboard"){
                showLeaderboard();
            } else {
                alert("Something went wrong!");
            }
        })
    }
};

function runGame() {

    game.newPositionX = 0;
    game.newPositionY = 0;

    // Event listeners for navigation buttons
    let navigationButtons = document.getElementsByClassName('nav-btn')
    
    for (let button of navigationButtons){
        button.addEventListener('click', function(){
            if (this.getAttribute('id') === 'up'){
                playerPositionUp();
            } else if (this.getAttribute('id') === 'left') {
                playerPositionLeft();
            } else if (this.getAttribute('id') === 'right'){
                playerPositionRight();
            } else if (this.getAttribute('id') === 'down'){
                playerPositionDown();
            } 
        })
    }

}

function playerMove(x, y) {
    let newPositionX = Math.max(0, Math.min(5, game.newPositionX+x));
    let newPositionY = Math.max(0, Math.min(5, game.newPositionY+y));

    if (game.layout[newPositionY][newPositionX] === 0 ) {
        game.newPositionX = newPositionX;
        game.newPositionY = newPositionY;
        if (newPositionX === 0 && newPositionY === 5){
            console.log("You made it out of the building, Well Done!")
            stopTimer();
            displayVictoryScreen();
        }
        console.log('New pos: ' + game.newPositionX + ', ' + game.newPositionY); 
    } else { 
        console.log('Invalid position');
    }
}


function playerPositionUp() {
    playerMove(0,-1);
} 

function playerPositionLeft() {
    playerMove(-1,0);  
}

function playerPositionRight() {
    playerMove(1,0);
}

function playerPositionDown() {
    playerMove(0,1);
}

/**
 * starts a countdown until game will start
 */
function countDown() {

    let gameTimer = document.getElementById('countdown-text');

    if (!gameTimer) {
        gameTimer = document.createElement('p');
        gameTimer.setAttribute("id", "countdown-text");
        countdown.appendChild(gameTimer);
    } 

    let secondsLeft = 1;
    gameTimer.textContent = `Game will start in: ${secondsLeft} seconds`;
    let interval = setInterval(() => {
        secondsLeft--;
        gameTimer.textContent = `Game will start in: ${secondsLeft} seconds`;
        if (secondsLeft === 0) {
            clearInterval(interval);
            gameTimer.textContent = "Game started!";
            runGame();
            startTimer();
            console.log('game is running');

        }
    }, 1000);
}

/** 
 * starts game timer
 **/ 
function startTimer(){
    const d = new Date();
    game.startTime = d.getTime();
}

/** 
 * stops game timer
 **/
function stopTimer(){
    const d = new Date();
    game.stopTime = d.getTime();
}

/*function updateLeaderboard(){
    let leaderboardEntries = [];
    let leaderboardEntry = {};


}*/

//consider cutting leaderboard out
function showLeaderboard() {
    let leaderBoardOverlay = document.querySelector('#leaderboard-overlay');
    let overlayContentBlock = document.createElement('div');
    let exitLeaderboard = document.createElement('button');
    let leaderboardList = document.createElement('ol');

    for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.innerHTML = "List item " + i;
    leaderboardList.appendChild(li);
    }
    leaderboardList.classList.add('leaderboard-list');

    overlayContentBlock.appendChild(leaderboardList);

    leaderBoardOverlay.textContent = '';
    exitLeaderboard.classList.add('btn-exit');
    overlayContentBlock.classList.add('overlay-content-block');
    overlayContentBlock.appendChild(exitLeaderboard);
    leaderBoardOverlay.appendChild(overlayContentBlock);
    exitLeaderboard.addEventListener("click", hideLeaderboard);


    document.getElementById('leaderboard-overlay').style.display = 'block';
}

function hideLeaderboard() {
    document.getElementById('leaderboard-overlay').style.display = 'none';
}

//displays an overlay with a victory message upon reaching the goal

function displayVictoryScreen() {
    document.getElementById('victory-screen-overlay').style.display = 'block';
    let victoryScreenOverlay = document.querySelector('#victory-screen-overlay');
    let overlayContentBlock = document.createElement('div');
    let exitVictoryScreen = document.createElement('button');
    overlayContentBlock.classList.add('overlay-content-block');
    victoryScreenOverlay.appendChild(overlayContentBlock);
    overlayContentBlock.appendChild(exitVictoryScreen);
    exitVictoryScreen.classList.add('btn-exit');
    exitVictoryScreen.addEventListener("click", hideVictoryScreen);

    let time = game.stopTime / 1000 - game.startTime / 1000;
    let formattedTime = time.toFixed(2);
    
    let victoryMessage = document.createElement('p');
    victoryMessage.innerHTML = `Yay! You made it out in: ${formattedTime} seconds!`;
    overlayContentBlock.appendChild(victoryMessage);
    leaderBoardOverlay.textContent = '';

}

function hideVictoryScreen() {
    document.getElementById('victory-screen-overlay').style.display = 'none';
}







