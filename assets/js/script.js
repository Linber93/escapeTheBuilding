//wait for dom to finish loading before runnning the game.
//add game area and buttons with event listeners

let game = {
    /* level layout */
    layout: [
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 0]
    ],
    newPositionX: 0,
    newPositionY: 0,
    leaderboard: [],
    startTime: null,
    stopTime: null,
    exitX: 0,
    exitY: 5,
    Running: false
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
                location.dataset.x = j
                location.dataset.y = i
                location.id = `c${i}-${j}`
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

        let mazeExit = document.getElementById(`c${game.exitY}-${game.exitX}`);
        mazeExit.classList.add('exit-location');
        
        //get the button elements and add event listeners. 
    let buttons = document.getElementsByClassName('start-game')

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

    game.Running = true;

    getPlayerCurrentposition()


    window.addEventListener('keyup', handleKeyboardInput)

}

function stopNavigation() {
    game.Running = false;
}

//add eventlisteners to navigation buttons if game is running
let navigationButtons = document.getElementsByClassName('nav-btn')

for (let button of navigationButtons) {
    button.addEventListener('click', function() {
        if (this.getAttribute('id') === 'up') {
            playerPositionUp();
        } else if (this.getAttribute('id') === 'left') {
            playerPositionLeft();
        } else if (this.getAttribute('id') === 'right') {
            playerPositionRight();
        } else if (this.getAttribute('id') === 'down') {
            playerPositionDown();
        }
    });
}



function handleKeyboardInput(e){
    if (e.key === 'ArrowUp') {
        playerPositionUp();
    } else if (e.key === 'ArrowLeft') {
        playerPositionLeft();
    } else if (e.key === 'ArrowRight') {
        playerPositionRight();
    } else if (e.key === 'ArrowDown') {
        playerPositionDown();
    }
  }



function playerMove(x, y) {
    if (game.Running)
    {
        let newPositionX = Math.max(0, Math.min(5, game.newPositionX+x));
        let newPositionY = Math.max(0, Math.min(5, game.newPositionY+y));

        if (game.layout[newPositionY][newPositionX] === 0 ) {
            game.newPositionX = newPositionX;
            game.newPositionY = newPositionY;
            updatePlayerPositionDisplay()
            if (newPositionX === game.exitX && newPositionY === game.exitY){
                console.log("You made it out of the building, Well Done!")
                stopTimer();
                displayVictoryScreen();
            }
            console.log('New pos: ' + game.newPositionY + ', ' + game.newPositionX); 
        } else { 
            console.log('Invalid position');
        }
        getPlayerCurrentposition()
    }
}

function updatePlayerPositionDisplay(){
    // Remove the current position class from whichever cell(s) has/have it.
    // Assuming the possibility that multiple cells might be marked as current
    // to be safe.
    document.querySelectorAll('.current-position').forEach((div, i) => {
      div.classList.remove("current-position")
    })
}
function getPlayerCurrentposition() {
    let playerCurrentPosition = document.getElementById(`c${game.newPositionY}-${game.newPositionX}`);
    playerCurrentPosition.classList.add('current-position');
}


let playerCurrentPosition = document.getElementById(`c${game.newPositionY}-${game.newPositionX}`);
    playerCurrentPosition.classList.add('current-position');

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

    stopNavigation()

    updatePlayerPositionDisplay()

    game.newPositionX = 0;
    game.newPositionY = 0;

    let gameTimer = document.getElementById('countdown-text');

    if (!gameTimer) {
        gameTimer = document.createElement('p');
        gameTimer.setAttribute("id", "countdown-text");
        countdown.appendChild(gameTimer);
    } 

    let secondsLeft = 5;
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

//displays an overlay with a victory message upon reaching the goal

function displayVictoryScreen() {

    stopNavigation()

    let victoryScreenOverlay = document.querySelector('#victory-screen-overlay');
    let overlayContentBlock = document.createElement('div');
    let exitVictoryScreen = document.createElement('button');
    victoryScreenOverlay.textContent = '';
    exitVictoryScreen.classList.add('btn-exit');
    exitVictoryScreen.addEventListener("click", hideVictoryScreen);
    exitVictoryScreen.innerHTML = `<i class="fa-solid fa-xmark"></i>`

    overlayContentBlock.classList.add('overlay-content-block');
    victoryScreenOverlay.appendChild(overlayContentBlock);
    overlayContentBlock.appendChild(exitVictoryScreen);

    let victoryMessage = document.createElement('p');

    let time = game.stopTime / 1000 - game.startTime / 1000;
    let formattedTime = time.toFixed(2);

    victoryMessage.innerHTML = `Yay! You made it out in: ${formattedTime} seconds!`;
    overlayContentBlock.appendChild(victoryMessage);
    document.getElementById('victory-screen-overlay').style.display = 'block';

    console.log(game.Running)
    
}

function hideVictoryScreen() {
    document.getElementById('victory-screen-overlay').style.display = 'none';
}







