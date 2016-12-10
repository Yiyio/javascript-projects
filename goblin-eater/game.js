//Create canvas element and rendering
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//add images
var bgReady = false;
var bgImage = new Image(); //we draw the background once it has loaded
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";


var heroReady = false;
var heroImage = new Image(); //same as with the background
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";


var monsterReady = false;
var monsterImage = new Image(); //same as with the background
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";
