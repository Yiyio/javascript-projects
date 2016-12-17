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

//start the game
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// randomized monster position
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Are they touching each other?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		reset();
	}
};
