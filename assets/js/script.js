//wait for dom to finish loading before runnning the game.
//add game area and buttons with event listeners

document.addEventListener("DOMContentLoaded", function() {
    
    //get the button elements and add event listeners 
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "start-game"){
                console.log("de fungerar")
            } else if (this.getAttribute("data-type") === "leaderboard"){
                goToLeaderboard()
            } else {
                alert("Something went wrong!")
            }
        })
        
    }
});
