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
https://vercel.com/play4funz/m-inesweeper
https://github.com/play4funz/MInesweeper

**How to play**
The player begins by selecting a cell on a board. During the game, the player deduces further cells that are safe to open based on the information provided by the opened cells, iteratively gaining more information to solve the board. The minecount, which is calculated as the total number of mines subtracted by the number of flagged cells (the minecount can be negative if too many flags have been placed), is also provided to the player.
