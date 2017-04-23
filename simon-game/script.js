var computerMovements = [];
var answers = [];
var rounds = 0;

var addColor = function(arr){
var colorsArray = ['green', 'red', 'yellow', 'blue'];
return arr.push(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
};


var flashLights = function(arr){

 var i = 0;

 setInterval(function(){
  $('#'+arr[i]).fadeTo('slow',0).fadeTo('slow',1);
   $('#sound-'+arr[i])[0].play();
   i++;
   if (i >= arr.length) {
 clearInterval(interval);
        }

 }, 3000);
}

var resetAnswers = function(){
  answers = [];
};

var updateRounds = function(){
  $('#show-rounds').html(rounds);
}

var checkLoser = function(){
  if (answers === []){
   return break;
  }
}

var playerTurn = function(){

$('.button').click(function() {
 // answers.append($(this).attr('id'));
  $('#sound-'+ ($(this).attr('id')))[0].play();
  answers.push(($(this).attr('id')));
  for (var i = 0; i < computerMovements.length; i++){
    if(answers[i] !== computerMovements[i]){
      alert('Epic fail!');
      resetAnswers();
      break;
    }
    if(JSON.stringify(computerMovements) === JSON.stringify(answers)){
      alert("You, you, you're good you!");
      break;
    }
  }
});
};


var main = function(){
  while (rounds < 20) {
  addColor(computerMovements);
  flashLights(computerMovements);
  playerTurn();
  checkLoser();
  updateRounds();
  rounds++;
 }
}
