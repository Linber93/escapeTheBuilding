# Escape The Building

[View deployed site here](https://linber93.github.io/escapeTheBuilding/)

This is website includes a game for anyone looking for way to kill a few minutes of time.

## Objective

the games objective is for the player (indicated by red circle) to move to the exit(indicated by a yellow square) navigation through the maze.

![Website shown on different devices](https://github.com/Linber93/escapeTheBuilding/blob/main/assets/readme/escape-the-building-responsiveness.png)


### Features

- __header__
 - shows a simple title to the game including logo

![header](https://github.com/Linber93/escapeTheBuilding/blob/main/assets/readme/escape-the-building-header.png)

- __Gameboard__
 - corridor is indicated by the color white
 - walls is indicated by the color black

![gameboard](https://github.com/Linber93/escapeTheBuilding/blob/main/assets/readme/escape-the-building-gameboard.png)

- __Navigation__
 - a navigation pad to use on touch devices or with mouse
 - navigation can also be done using your keyboard

![navigation pad](https://github.com/Linber93/escapeTheBuilding/blob/main/assets/readme/escape-the-building-navigation.png)

- __Start Button__
 - starts a countdown on click which will start the game when it reaches 0.
 - resets the game and starts a new when pressed again

![start button](https://github.com/Linber93/escapeTheBuilding/blob/main/assets/readme/escape-the-building-start-button.png)

- __victory overlay__
 - once the user has reached the goal an ovelay will show displaying the time that has elapsed since the game started until the goal was reached.
 - has and exit button that allows the user to close and restart the game. 

![victory overlay](https://github.com/Linber93/escapeTheBuilding/blob/main/assets/readme/escape-the-building-victory.png)

## UX

### The ideal user is:
* English speaking
* looking for a way get his/her brain going

### What the user should be looking for:
* A few minutes of 
* A way to contact Linus 

## Testing

### Features tested
| Test subject | test action | Expected Result | Result |
| ----------- | ----------- | ----------| ----------|
| Gameboard| Load the site up and await the DOM to load | Board loads up a complete maze with a path to the exit | PASSED |
| Navigation pad | Try pressing the navigation buttons |  Only accept inputs if the game is started | PASSED |
| Keyboard inputs | Use the arrowkeys on the keyboard. |  Only accept inputs if the game is started | PASSED |
| Movement | Start the game a use a movement button |  Only register a movement command to move one tile in correct direction | PASSED |
| Wall collision | Try to move through a wall or outside the Gameboard |  Return "invalid position" or an unchanged "new pos" in console and do nothing| PASSED |
| Completed objective | Navigate through the maze and reach the goal(indicated by yellow square) | A victory overlay that returns a message including the time elapsed in seconds with two decimals | PASSED |
| Victory overlay exit button | Press the exit button indicated with a X | Closes victory overlay and allows to start the game again | PASSED |
| Start button | Press start button | Starts a count down from 5 and display "Game Started!" when it reaches 0 | PASSED |
### Validator testing

- HTML - Validated using the official W3C Markup Validator. [W3C validator results](https://validator.w3.org/nu/?doc=https%3A%2F%2Flinber93.github.io%2FescapeTheBuilding%2F)

- CSS - validated using the official W3C Jigsaw CSS validation Service. [W3C CSS validator results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flinber93.github.io%2FescapeTheBuilding%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- JavaScript - Validated using jshint [jshint.com](https://jshint.com/)

### Lighthouse

The site has been tested using Lighthouse in Chrome developer tool

![Lighthouse test](https://github.com/Linber93/escapeTheBuilding/blob/main/assets/readme/escape-the-building-ligthhouse.png)


### Browser compatibility
- Tested on Microsoft Edge Version 108.0.1462.54 on Windows 10 Home 21H2.
- Tested on Google Chrome Version 108.0.5359.125 on Windows 10 Home 21H2.
- Tested on Firefox Version 108.0.1 on Windows 10 Home 21H2.
- Tested on Safari Version 16.2 on macOS Venture.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  1. In the GitHub repository, navigate to the Settings tab 
  2. Navigate to the Pages tab
  3. From the source section drop-down menu, select the Main Branch
  4. Once the main branch has been selected, you might be required to wait for a few minutes after refreshing the browser there should be a ribbon on the page with a generated link with the published site 


 [View deployed site here](https://linber93.github.io/escapeTheBuilding/)

## Forking
Forking the GitHub Repository

forking the GitHub Repository allows you to make a copy of the original repository in your own GitHub account. This creates the possibility to view and make changes without the risk of affecting the original.

1. Log into GitHub and locate the GitHub Repository.
2. At the top right you will see a "Fork" button.
3. You should now have a new copy of the original repository in your own GitHub account.

## Cloning
 Creating a local clone
 1. Log into GitHub and locate the GitHub Repository.
 2. There is a button named "<>code" a dropdown will provide you with an option to download it as a zip file or clone it directly using HTTPS but copying provided URL
 3. Open Gitbash in your terminal
 4. Navigate to the directory which you want the clone to be located
 5. Type git clone, and then paste the URL you copied in step 2. For example, "git clone https://github.com/your-username/your-repository".
 6. Press enter, and the repository will be cloned to your working directory.



## External technologies used
 - [MDN](https://developer.mozilla.org/en-US/) - external resource to learn more about javascript
 - [FontAwesome](https://fontawesome.com/) - Utilized for icons for the contact information and for social media links
 - [Gitpod](https://www.gitpod.io/) - The developer used Gitpod to develop this site.
 - [Github](https://github.com/) - used to store and save my project during the development process.
 - [Github Pages](https://pages.github.com/) - Used to host and publish the project.
 - HTML5 - Mark-up language using semantic structure
 - CCS3 - Cascading style sheets used to style.
 - javascript - 


## Credits
### Content
 - Content was created and assessed by Linus Berger.

### Acknowledgements
 - I received some ideas on design and how to clean up my code from friends and relatives
 - My uncle Stefan Löfgren for assistance with bugfixes, smart sollutions to problems that arrised during development.
 - My Mentor Brian Macharia for guiding me through this project and giving valuable tips and advice throughout the development process.