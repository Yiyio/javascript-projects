var player = 'X'
var computer = 'O'
var moves = 0;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById('X').onclick = function() {
    player = 'X'
    computer = 'O'
    document.getElementById("X").className += " selected";
}

document.getElementById('O').onclick = function() {
    player = 'O'
    computer = 'X'
    document.getElementById("O").className += " selected";


}

///Create some helper functions
var getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


var humanTurn = function() {

    var numbers = document.getElementsByClassName('square');

    for (var i = 0; i < numbers.length + 1; i++) {
        numbers[i].addEventListener('click', function() {
            if (moves % 2 === 0) {
                document.getElementById(this.getAttribute('id')).innerHTML = player;
                moves += 1;
                board[this.getAttribute('id')] = player;
                if (checkWinner(board) === player) {
                    alert("Congrats, you win!");
                    resetGame();
                }

                computerTurn();

                if (checkWinner(board) === computer) {
                    alert("You lost to a very evil computer...")
                    resetGame();
                }
                if (moves === 9) {
                    alert("It's a trap! I mean...tie")
                    resetGame();
                }

            };
        });
    };
};


var computerTurn = function() {
    //play some naive AI
    var AIStrategy = getRandomInt(1, 9);
    console.log(AIStrategy)
    while (document.getElementById(AIStrategy).innerText !== '') {
        //fix when everything is occuppied
        console.log(AIStrategy)
        AIStrategy = getRandomInt(1, 9);
        console.log(AIStrategy)
    }
    document.getElementById(AIStrategy).innerHTML = computer;
    board[AIStrategy] = computer;
    moves += 1;
};


var checkWinner = function(board) {
    for (var i = 0; i < this.wins.length; i++) {
        var a, b, c;
        console.log(i)
        //these varaibles become what the board is holding 'x', 'o', or 0
        a = board[wins[i][0]];
        b = board[wins[i][1]];
        c = board[wins[i][2]];

        if (a == b && a == c && a !== 0) {
            return a;
        }
    }
    console.log("no winner yet")
    return false;
}

var resetGame = function() {

    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    moves = 0;

    var numbers = document.getElementsByClassName('square');

    for (var i = 0; i < numbers.length + 1; i++) {
        numbers[i].innerHTML = '';
    }
}


humanTurn();
