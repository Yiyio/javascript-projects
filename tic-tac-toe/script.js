var moves = 0;



var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var humanTurn = function(){
  var numbers = document.getElementsByClassName('square');

  for (var i = 0; i < numbers.length + 1; i++) {
  numbers[i].addEventListener('click', function() {
    if (moves % 2 === 0){
  document.getElementById(this.getAttribute('id')).innerHTML = 'X';
    moves += 1;
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
    moves += 1;
  };


var checkWinningConditions = function(){


}

humanTurn();
computerTurn();
