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

//game variables
var hero = {
	speed: 256, // in pixels per second
	x: 0,
	y: 0
};
var monster = {
	x: 0,
	y: 0
};
var monstersCaught = 0; //by the player i.e. score

//player input
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);
