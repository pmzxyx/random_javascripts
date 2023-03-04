//First, insert this script.
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeWall-EndgameSooner/main/code.js'); req.onload = function() { eval(this.responseText + 'snake.wall_every_apple();'); }; req.send();

//Then, insert this script
snake.wall_every_apple();
//into the console.
