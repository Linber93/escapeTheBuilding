//wait for dom to finish loading before runnning the game.
//add game area and buttons with event listeners

document.addEventListener("DOMContentLoaded", function() {
        /* creates game grid*/

        let building = document.querySelector('.game-building');
        let width = 28;
        /* level layout */
        let layout = [
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 0]
        ];

        let gameSquares = [];

        function createBoard() {
            for (let i = 0; i < layout.length; i++) {
                gameSquares[i] = [];
                for(let j = 0; j < layout[i].length; j++) {
                    let location = document.createElement('div');
                    building.appendChild(location);
                    gameSquares[i][j] = location;
            
                    //add layout to the board
                    if (layout[i][j] === 1) {
                        gameSquares[i][j].classList.add('wall');
                    }
                    if (layout[i][j] === 0) {
                        gameSquares[i][j].classList.add('corridor');
                    }
                }
            }
        }
    createBoard();
    

    //get the button elements and add event listeners. 
    let buttons = document.getElementsByClassName('menu')

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "start-game"){
                startGametimer();
            } else if (this.getAttribute("data-type") === "leaderboard"){
                goToLeaderboard();
            } else {
                alert("Something went wrong!")
            }
        })
        
    }
});

function runGame() {
    let navigationButtons = document.getElementsByClassName('nav-btn')
    
    for (let button of navigationButtons){
        button.addEventListener('click', function(){
            if (this.getAttribute('id') === 'up'){
                playerPositionUp();
                console.log('move player up')
            } else if (this.getAttribute('id') === 'left') {
                playerPositionLeft();
                console.log('move player left')
            } else if (this.getAttribute('id') === 'right'){
                playerPositionRight();
                console.log('move player right')
            } else if (this.getAttribute('id') === 'down'){
                playerPositionDown();
                console.log('move player down');
            } 
        })
    }
}

function playerPositionUp(layout) {
  
} 

function playerPositionLeft(layout) {
  
}

function playerPositionRight(layout) {
  
}

function playerPositionDown(layout) {
  
}


function startGametimer() {

    let gameTimer = document.getElementById('countdown-text');

    if (!gameTimer) {
        gameTimer = document.createElement('p');
        gameTimer.setAttribute("id", "countdown-text");
        timer.appendChild(gameTimer);
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
            console.log('game is running')
        }
    }, 1000);
}




