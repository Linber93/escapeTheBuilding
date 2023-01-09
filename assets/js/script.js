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
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "start-game"){
                runGame();
            } else if (this.getAttribute("data-type") === "leaderboard"){
                goToLeaderboard();
            } else {
                alert("Something went wrong!")
            }
        })
        
    }

});

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
    let location = document.createElement('div')
    building.appendChild(location)
    gameSquares.push(location)

    //add layout to the board
        if (layout[i] === 1) {
          gameSquares[i].classList.add('wall');
        }
        if (layout[i] === 0) {
          gameSquares[i].classList.add('corridor');
        }
    }
}

function runGame() {
    
}
