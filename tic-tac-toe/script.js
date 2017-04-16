var moves = 0;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var wins = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
 ];

///Create some helper functions
var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var createGroupedArray = function(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
}

function findOccurrences(arr, val) {
    var i, j,
        count = 0;
    for (i = 0, j = arr.length; i < j; i++) {
        (arr[i] === val) && count++;
    }
    return count;
}


var humanTurn = function(){
  var numbers = document.getElementsByClassName('square');

  for (var i = 0; i < numbers.length + 1; i++) {
  numbers[i].addEventListener('click', function() {
    if (moves % 2 === 0){
  document.getElementById(this.getAttribute('id')).innerHTML = 'X';
    moves += 1;
      board[this.getAttribute('id')] = 'X';
    };
  });
};
};


var computerTurn = function() {
    //play some naive AI
    var AIStrategy = getRandomInt(1,10);
    console.log(AIStrategy)
    while (document.getElementById(AIStrategy).innerText !== ''){
      //fix when everything is occuppied
      console.log(AIStrategy)
      AIStrategy = getRandomInt(1,10);
      console.log(AIStrategy)
    }
    document.getElementById(AIStrategy).innerHTML = 'O';
   board[AIStrategy] = 'O';
    moves += 1;
  };


 var checkWinner = function(board){
  for(var i=0; i<this.wins.length; i++){
    var a, b, c;
    console.log(i)
    //these varaibles become what the board is holding 'x', 'o', or 0
    a = board[wins[i][0]];
    b = board[wins[i][1]];
    c = board[wins[i][2]];

    if(a == b && a == c && a !== 0){
      return a;
    }
  }
  return false;
}



  if(moves === 9){
    console.log("It's a trap! I mean...tie")
  }



humanTurn();
computerTurn();
checkWinner(board);
