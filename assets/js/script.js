//wait for dom to finish loading before runnning the game.
//add game area and buttons with event listeners

var game = {
    /* level layout */
    layout: [
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 0]
    ],
    player_pos_x: 0,
    player_pos_y: 0
}

document.addEventListener("DOMContentLoaded", function() {
        /* creates game grid*/

        let building = document.querySelector('.game-building');
        let width = 28;

        let gameSquares = [];

        function createBoard() {
            for (let i = 0; i < game.layout.length; i++) {
                gameSquares[i] = [];
                for(let j = 0; j < game.layout[i].length; j++) {
                    let location = document.createElement('div');
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
        }
    createBoard();
    

    //get the button elements and add event listeners. 
    let buttons = document.getElementsByClassName('menu')

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "start-game"){
                startGametimer();
            } else if (this.getAttribute("data-type") === "leaderboard"){
                showLeaderboard();
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


function playerMove(x, y) {
    var new_pos_x = Math.max(0, Math.min(5, game.player_pos_x+x));
    var new_pos_y = Math.max(0, Math.min(5, game.player_pos_y+y));
    if (game.layout[new_pos_y][new_pos_x] == 0) {
        game.player_pos_x = new_pos_x;
        game.player_pos_y = new_pos_y;
        console.log('New pos: '+game.player_pos_x+', '+game.player_pos_y);
    }
    else {
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



function showLeaderboard() {
    let overlay = document.querySelector('#leaderboard-overlay');
    let leaderboardArea = document.createElement('div');
    let exitLeaderboard = document.createElement('button');

    overlay.textContent = '';
    exitLeaderboard.classList.add('btn-exit-leaderboard');
    leaderboardArea.classList.add('leaderboard-area');
    leaderboardArea.appendChild(exitLeaderboard);
    overlay.appendChild(leaderboardArea);
    exitLeaderboard.addEventListener("click", hideLeaderboard);

    document.getElementById('leaderboard-overlay').style.display = 'block';
}

function hideLeaderboard() {
    document.getElementById('leaderboard-overlay').style.display = 'none';
}




