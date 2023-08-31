**Project 1 Browser-based Game - Minesweeper**

**Project Brief**

**MVP - Minimum Viable Product**
- Built with HTML, CSS and JavaScript
- Use Javascript for DOM manipulation
- Hosted on Github pages
- Commits to Github frequently
- A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.
Be displayed in the browser
- Have some kind of user interaction via mouseclick or keypress
- include win/lose message

**Timeframe**
1 week

**Technologies & Tools Used**
- HTML
- CSS
- JavaScript
- Git & GitHub

**Description**
Minesweeper is a type of logic puzzle video game that is commonly played on personal computers. The game's grid of clickable squares is interspersed with hidden "mines" throughout the board. The goal is to clear the board without detonating any mines, using clues about the number of neighbouring mines in each field to help.

I chose to recreate this game because it was one of the games I enjoyed playing as a child and it remains addictive even in adulthood. Minesweeper's origins are unknown. Although Microsoft Minesweeper was the first version of the game, Eurogamer claims Mined-Out by Ian Andrew (1983) was the first Minesweeper game. Curt Johnson, the creator of Microsoft Minesweeper, admits that the design of his game was influenced by another game, but it was not Mined-Out, and he cannot recall which game it was.

**Game Concept**
The game is a single-player puzzle game in which the goal is to clear a shaped grid containing hidden mines without activating any of them. The gird is divided into cells, some of which contain mines and others of which are not.

**Deployment**
The game is deployed on GitHub pages, and you can play the game here:
https://m-inesweeper-git-main-play4funz.vercel.app/

**How to play**
The player begins by selecting a cell on a board. During the game, the player deduces further cells that are safe to open based on the information provided by the opened cells, iteratively gaining more information to solve the board. The minecount, which is calculated as the total number of mines subtracted by the number of flagged cells (the minecount can be negative if too many flags have been placed), is also provided to the player.
For this game controls wer are employing the use of mouse, left click to mine the cells, while right click to mark(flag) the cells.

![image](https://github.com/play4funz/MInesweeper/assets/141905435/aa623cfa-385f-4c4f-948e-8a86335bd64c)

**Files**
The plan to build the game with different dificulty levels falls on the use of a main file (minesweeper.js) that renders the main function of the game such as creating the board, randomising the mine placements, revealing the tiles with a flood method, win/lose condition checks and marking the tiles. Subsequent files (Script[].js) denotes the size and number of mines of the game and functions to allow clicks and restarting of game.

**Approach to Development** 
i have broken down the project into stages:
Step 1: Generate the board and game logic of the game
Step 2: Generate and tune to HTML and CSS files 
Step 3: Create a main page for dificulty selection
Step 4: Generate different difficulties
Step 5: Fine tune on additional functions and beautify the game

**Key Learnings**
1. I have learned the concepts and terms like export/import from a module to another, arrow functions, eventlistner, forEach and more.
2. In order to create the tiles unravealing itself till an adjacent mine some considerations are needed to be made.
3. In making boards with difficulty levels, it helps to separate teh JS files for the main components and reactive components where the main components will be the same for different difficulties but the reactive components have minor differences. having that said by seporating the files we are able to better identify issues easier and clearer.

**Breakdown & Analysis of the codes**
Below is a breakdown and analysis of some of the codes which I have categorised according to the concepts we have covered in class.











