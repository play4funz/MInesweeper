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

![image](https://github.com/play4funz/MInesweeper/assets/141905435/f1388d1c-9498-49d1-a327-ce6a438e3038)

**How to play**
the basic controls of the is with the use of mouse by left clicking it to reveal the tiles and right clicking it to mark or unmark a tile. The winning condition of the game is to reveal all tiles that are not hidden with mines, and if a single mine is revealed the game is lost.

![image](https://github.com/play4funz/MInesweeper/assets/141905435/43a78bbe-4ad1-4f48-9516-7bfdc274624b)

**Approach to Development**
Step 1: Create a re-sizable and fixed number of mines Minesweeper board 
Step 2: Generate the functions of markers and mines 
Step 3: implement all game logics 
Step 4: Generate multiple difficulties
Step 5: combine the files and test

**Key lessons**
1. through this project i have realised the use of import/export functions
2. the use of flood algorithm to spread and reveal tiles
3. errors on selecting corners of the boards
4. prevent the game from generating from mines on the same tiles
5. To organise things

**Breakdown & Analysis of the Codes**
Below is a breakdown and analysis of some of the codes which I have categorised according to the concepts we have covered in class.

**Creating the board**
the way to create a board is with the use of arrays, while fixed arrays may pose some challenge in the future when implementing the mine positions hence I went on with the use of an empty array. I also did some reseach on the use of flood algorithm and import/export functions and have decided to have 2 seprate js files.

![image](https://github.com/play4funz/MInesweeper/assets/141905435/de5996a9-8ca6-4c1b-891f-c8c87d0384d2)

This portion of the main js file contributes to the main logic of the game such as board creatation, positioning of mines and setting the status of tiles for the game.

![image](https://github.com/play4funz/MInesweeper/assets/141905435/833f8669-9861-428e-92c2-141a5af55fcb)

this portion of the script js controls the size of the board, number of mines available(the difficulty settings) and event listener for the clicking functions.

**Positioning of mines**

![image](https://github.com/play4funz/MInesweeper/assets/141905435/9b9da221-7b36-4c43-bbab-6135cced7062)

![image](https://github.com/play4funz/MInesweeper/assets/141905435/d48b810b-7084-4f45-a81d-085e734ece83)

This portion of the code is to position the fixed number of mines randomly within the board. so that there is no identical game and all games were unique in it's placement.

**Revealing, HIdden and Marked tiles**

![image](https://github.com/play4funz/MInesweeper/assets/141905435/3024c4c0-b1fa-4058-8a3f-821c67fb69df)

This portion of the code is to set tiles as hidden when the game start.

![image](https://github.com/play4funz/MInesweeper/assets/141905435/7d7d3547-592b-4176-965a-eea6fe344b4a)

This portion of the code sets fuctions on checking if tiles are hidden, marked or revealed. If the tile is marked this condition allows the play to right click it again to unmark the tile. hence confirming the tile status.

![image](https://github.com/play4funz/MInesweeper/assets/141905435/d9db1e54-e24c-4839-98af-6ad32e9c4511)

This function runs in a loop till a number is generated for each adjacent tiles containing mines as with the flood algorithm. this was a little tough for me as it is also something new that I would need to venture.

**win/lose condition**

![image](https://github.com/play4funz/MInesweeper/assets/141905435/08d2bcbc-f9e2-44ee-be22-9063c8a46b8d)

This portion of the code checks for win/lose conditions. When a single mine is revealed the player will lose the game and is unable to continue the game.

![image](https://github.com/play4funz/MInesweeper/assets/141905435/fa6b18df-5423-4a5d-b630-cdc4454a85cf)

This portion of the code displays the winning/losing messages and also prevents the game from continuing.

**Future Goals**
there would unlike be future iterations as this is a project created for submission, hence if there were any future developments/improvements below are some of the things i would like to address:
- implementing soundcard
- implementing animated backgrounds
- To remove bugs

**Summary**
Because this was my first time working on a project in such a short period of time, recreating the Minesweeper game was considered extremely challenging. However, the idea was that by learning how others recreated the game, I would understand the logic flow and how they connected the HTML, CSS, and JS. This would then enable me to create a game from the ground up.
I also learn best by recreating someone else's work, deconstructing it, and then figuring out a better way to do it.

**References**
Because JavaScript was new to me, there were many concepts that I had to learn. To get started on my project, I looked up how other people made their minesweeper games and adapted and modified them as much as possible to make them mine.

https://en.wikipedia.org/wiki/Minesweeper_(video_game)#:~:text=to%20solved%20state-,History,the%20ZX%20Spectrum%20in%201983.
https://codepen.io/bglaz/pen/dzrLJX
https://iq.opengenus.org/minesweeper-game-using-js/
https://www.youtube.com/watch?v=W0No1JDc6vE
https://code-boxx.com/simple-javascript-minesweeper/
https://www.codewithfaraz.com/content/134/learn-how-to-create-a-minesweeper-game-with-html-css-and-javascript
https://slicker.me/javascript/minesweeper/minesweeper.htm
https://www.youtube.com/watch?v=3GhzZF4WWsY
